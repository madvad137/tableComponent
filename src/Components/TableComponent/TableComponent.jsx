import { useState, useCallback } from 'react';
import Pagination from './Pagination';
import styles from './TableComponent.module.css'
import TbodyComponent from './TbodyComponent/TbodyComponent';
import TheadComponent from './THeadComponent/TheadComponent';

function TableComponent({data, columns, info}) {

   let [itemsOnPage, setItemsOnPage] = useState(5);
   let [currentPage, setCurrentPage] = useState(1);
   let [searchValue, setSearchValue] = useState(null);
   let [columnKey, setColumnKey] = useState(null);
   let [sortMethod, setSortMethod] = useState(null);
   let sortArray = []
   let paginationArrray =[];   
   
   const handleChageInput = useCallback(str =>{
    setSearchValue(str)
    setCurrentPage(1);
   }, [])

   const search = useCallback((item) => {
    let coincidence = false

    if (!searchValue) {return true}
    
    Object.values(item).forEach(value => {
      if (typeof value === 'string') {
        if (value.toLowerCase().includes(searchValue.toLowerCase())) {
          coincidence = true
        }
      } else if (typeof value === 'number') {
        if (String(value).toLowerCase().includes(searchValue.toLowerCase())) {
          coincidence = true
        }
      } 
    })
    if(coincidence===true){
      sortArray.push(item)
    }
  }, [searchValue,sortArray])

  const sort = useCallback((arr) =>{
    if(columnKey===null){
      return
    }
    if(sortMethod==='up'){
      arr.sort((a, b) =>{
      if(a[columnKey] < b[columnKey]) { return -1; }
      if(a[columnKey] > b[columnKey]) { return 1; }
      return 0;
    })
    }
    if(sortMethod==='down'){
      arr.sort((a, b) => {
      if(a[columnKey] < b[columnKey]) { return 1; }
      if(a[columnKey] > b[columnKey]) { return -1; }
      return 0;
    })
    }
  },[columnKey,sortMethod])
 

  if(!searchValue){
    sortArray=[...data]
  } else{
    data.forEach((item) =>{
    search(item);
  })
  }

  sort(sortArray)
 
  let pagesCount = Math.ceil(sortArray.length/itemsOnPage)

  if(pagesCount===0){
    pagesCount=1
  } 

  let endPosition = currentPage* itemsOnPage;
  let startPosition = endPosition-itemsOnPage;
  paginationArrray = sortArray.slice(startPosition, endPosition);
  
    
  return (
    <div className={styles.wrapper}>
      <Pagination
        currentPage = {currentPage} 
        setCurrentPage = {setCurrentPage} 
        pagesCount={pagesCount} 
        setItemsOnPage = {setItemsOnPage}
        sortArray = {sortArray}
        itemsOnPage = {itemsOnPage}
      />
      <input
        className={styles.input}
        placeholder='поиск...'
        type="text"
        value={searchValue}
        onChange={(e) => handleChageInput(e.target.value)}
      />
      <table class={styles.table} className={styles.table}>
        <TheadComponent
          columnKey={columnKey}
          setColumnKey={setColumnKey}
          columns={columns}
          sortMethod={sortMethod}
          setSortMethod={setSortMethod}

        />
        <TbodyComponent
          data={paginationArrray}
          info={info}
        />
      </table>
    </div>
    
  );
}
  
  export default TableComponent;
  