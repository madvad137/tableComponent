import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import TableComponent from './Components/TableComponent/TableComponent';


function App() {
  const [columns, setColumns] = useState();
  const [data, setData] = useState();
  const [info, setInfo] = useState();

  async function fetchData() {
    let response = await axios.get('http://localhost:3001/data')
    setData(response.data)
  }

  async function fetchcolumns() {
    let response = await axios.get('http://localhost:3001/columns')
    setColumns(response.data)
  }
  async function fetchInfo() {
    let response = await axios.get('http://localhost:3001/information')
    setInfo(response.data)
  }

  useEffect (()  => {
    fetchData()
    fetchcolumns()
    fetchInfo()
  },[])
 
  return (
    <div className="App">
      <div style={{width:800, margin:'0 auto'}}>
       {data && columns&& <TableComponent data={data} columns={columns} info={info}/>}
      </div>
    </div>
  );
}

export default App;
