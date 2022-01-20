import React, { useEffect, useState } from 'react';
import Orders from '../../Components/Orders/Orders';
import './MainPage.css'
const MainPage = () => {
    const [Data, setData] = useState([]);
    console.log(Data)
    const [searchData, setSearchData] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    console.log(filterStatus)
   
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Ved-X/assignment/orders')
            .then(response => response.json())
            .then(json => setData(json))
    },[Data])
  useEffect(()=>{
    const filteredData = Data.filter(value => value.status == filterStatus );
    setData(filteredData)
  },[filterStatus])
  


    return (
        <div>
            <div className="navbar">
                <div className='Input'>
                    <input type="text" onChange={(event) => setSearchData(event.target.value)} placeholder="Search.." />
                </div>
                <div className="dropdown">
                    <button onclick="myFunction()" className="dropbtn">Dropdown</button>
                    <div id="myDropdown" className="dropdown-content">
                        <p onClick={() => setFilterStatus('Delivered')}>Delivered</p>
                        <p onClick={() => setFilterStatus('Completed')}>Completed</p>
                        <p onClick={() => setFilterStatus('Prepared')}>Prepared</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <table>
                    <tr className='Table_Reader_Row'>
                        <th className="Table_Header_Id" >ORDER ID</th>
                        <th className="Table_Header">CUSTOMER</th>
                        <th className="Table_Header">ADDRESS</th>
                        <th className="Table_Header">PRODUCT</th>
                        <th className="Table_Header">Date Order</th>
                        <th className="Table_Header">STATUS</th>

                    </tr>
                    {Data.filter((value) => {
                        if (searchData === '') {
                            return value
                        }
                        else if (value.customer.toLowerCase().includes(searchData.toLocaleLowerCase())) {
                            return value
                        }
                    }).map((data) => <Orders data={data} key={data.order_id} />)}
                </table>
            </div>
        </div>
    );
};

export default MainPage;