import React, { useEffect, useState } from 'react';
import Orders from '../../Components/Orders/Orders';
import './MainPage.css'
const MainPage = () => {
    const [Data, setData] = useState([])
    const [searchData, setSearchData] = useState('');
    console.log(searchData)
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Ved-X/assignment/orders')
            .then(response => response.json())
            .then(json => setData(json))
    })


    return (
        <div>
            <div className="navbar">
                <div className='Input'>
                    <input type="text" onChange={(event) => setSearchData(event.target.value)} placeholder="Search.." />
                </div>
                <div className="dropdown">
                    <button onclick="myFunction()" className="dropbtn">Dropdown</button>
                    <div id="myDropdown" className="dropdown-content">
                        <p>Raihan</p>
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
                    }).map((data) => <Orders data={data} />)}
                </table>
            </div>
        </div>
    );
};

export default MainPage;