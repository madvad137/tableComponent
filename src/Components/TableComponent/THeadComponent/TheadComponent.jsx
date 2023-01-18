
import styles from './THeadComponent.module.css'

function TheadComponent({columnKey,  setColumnKey, columns, sortMethod, setSortMethod}) {

  function handleThClick(item){
    if(sortMethod==='up' && columnKey===item.key){
      setSortMethod('down')
    } else if(sortMethod==='down' && columnKey===item.key){
      setSortMethod(null)
      setColumnKey(null)
    } else{
      setSortMethod('up')
      setColumnKey(item.key)
    }
  }

  return (
    <thead>
    <tr className={styles.tr}>
      {
        columns.map((item) => {
          return(
            <th
              className={styles.th}
              onClick={() =>{handleThClick(item)}} 
              key={item.key}>
                {item.title}
                {sortMethod==='up' && columnKey===item.key && <img className={styles.sort__img} src='/up.png'/>}
                {sortMethod==='down' && columnKey===item.key && <img className={styles.sort__img} src='/down.png'/>}
            </th>
          )
        })
      }
    </tr>
    </thead>
  );
}

export default TheadComponent;
