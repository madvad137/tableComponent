function Pagination({currentPage, setCurrentPage, pagesCount, setItemsOnPage, sortArray, itemsOnPage}) {

  function nextPage(){
    setCurrentPage(currentPage+1)
  };

  function prevPage(){
    setCurrentPage(currentPage-1)
  };

  function changeItemOnPage (e) {
    setCurrentPage(1);
    setItemsOnPage(e.target.value);
  };
  
  return (
    <div>
      <button disabled={currentPage===1 & true} onClick={prevPage}>prev</button>
      <span>{currentPage}/{pagesCount}</span>
      <button disabled={currentPage===pagesCount & true} onClick={nextPage}>next</button>
       <span>кол-во элементов</span>
      <select onChange={changeItemOnPage} name="language" size="1">
        <option value={5} >5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
}

export default Pagination;
