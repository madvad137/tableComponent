import { useState } from "react";
import styles from './TbodyComponent.module.css'

function TrComponent({ item, itemInfo }) {

  let [additionalInformation, setAdditionalInformation ] = useState(false)
    return (
      <>
      <tr className={styles.tr}  onClick={() =>{setAdditionalInformation(!additionalInformation)}}>
      {
        Object.keys(item).map((key) => {
         return(
           key!=='key' && <td className={styles.td} key={item[key]}>{item[key]}</td>
         )
       })
       
      }
     </tr>
     {additionalInformation && itemInfo && <tr>
       {Object.keys(itemInfo).map((key) =>{
        return(
          key!=='key' && <tr>{key}:{itemInfo[key]}</tr>
        )
       })}
       </tr>
      }  
     </>
    );
  }
  
  export default TrComponent;
  