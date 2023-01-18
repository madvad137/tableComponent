import TrComponent from "./TrComponent";


function TbodyComponent({data, info}) {


  return (
    <tbody>
      {
        data.map((item) =>{
          let itemInfo = info && info.find((infoItem) => infoItem.key===item.key )
          return(
            <TrComponent key={item.key} item={item} itemInfo = {itemInfo} />
          )
        })
      }
    </tbody>
  );
}
  
export default TbodyComponent;



