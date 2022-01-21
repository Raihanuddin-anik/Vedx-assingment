import React, { useEffect, useState } from 'react';
import Orders from '../../Components/Orders/Orders';
import { BiFilter } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';

import './MainPage.css'
const MainPage = () => {
    const [Data, setData] = useState([]);
    console.log(Data)
    const [searchData, setSearchData] = useState('');
    const [FilterData, setFilterData] = useState([]);
  
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Ved-X/assignment/orders')
            .then(response => response.json())
            .then(json => {
                setData(json)
                setFilterData(json)
            })
    }, [])

    const filterByStatus = (e) => {
      if(e.target.value){
        const filteredData = Data.filter(value => value.status === e.target.value);
        setFilterData(filteredData)
      }
      else setFilterData(Data)
    }



    return (
        <div className='container-fluid'>
            <section className='Top_Header'>
                <div style={{color:"#00B4CC"}}>All Orders{Data.length}</div>
                <div style={{color:"darkgrey"}}>showing {FilterData.length} out of {Data.length} </div>
            </section>
            <section className="navbar">
                <div className='Input'>
                    <input type="text" className='Input_Item' onChange={(event) => setSearchData(event.target.value)} placeholder="Search.." />
                </div>
                <div className="dropdown">
                    <button onclick="myFunction()" className="dropbtn"><BiFilter/> Filter</button>
                    <div className="dropdown-content">
                        <button  className="Each_dropdown" value="Delivered" onClick={(e) => filterByStatus(e)}>Delivered</button>
                        <button  className="Each_dropdown" value="Completed" onClick={(e) => filterByStatus(e)}>Completed</button>
                        <button  className="Each_dropdown" value="Prepared" onClick={(e) => filterByStatus(e)}>Prepared</button>
                        <button  className="Each_dropdown"  onClick={(e) => filterByStatus(e)}>All</button>
                    </div>
                </div>
            </section>
            <section  style={{overflowX:"auto"}}>
                <table>
                    <tr className='Table_Reader_Row'>
                        <th className="Table_Header_Id" >ORDER ID <AiFillCaretDown className="Arrow_ICon"/></th>
                        <th className="Table_Header">CUSTOMER <AiFillCaretDown className="Arrow_ICon"/></th>
                        <th className="Table_Header">ADDRESS <AiFillCaretDown className="Arrow_ICon"/></th>
                        <th className="Table_Header">PRODUCT <AiFillCaretDown className="Arrow_ICon"/></th>
                        <th className="Table_Header">Date Order <AiFillCaretDown className="Arrow_ICon"/></th>
                        <th className="Table_Header">STATUS <AiFillCaretDown className="Arrow_ICon"/></th>

                    </tr>
                    {FilterData.filter((value) => {
                        if (searchData === '') {
                            return value
                        }
                        else if (value.customer.toLowerCase().includes(searchData.toLocaleLowerCase())) {
                            return value
                        }
                    }).map((data) => <Orders data={data} key={data.order_id} />)}
                </table>
            </section>
        </div>
    );
};

export default MainPage;