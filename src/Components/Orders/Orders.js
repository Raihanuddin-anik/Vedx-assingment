import React from 'react';
import './Orders.css'
const Orders = ({ data }) => {
  
  
    return (
        <tr className='Table_Reader_Row'>
            <td className="Table_Data_Id" >#{data.order_id}</td>
            <td className="Table_Data">{data.customer}</td>
            <td className="Table_Data">{data.address}</td>
            <td className="Table_Data">{data.product_title} <br/> <span className="Country_Text">{data.country}</span></td>
            <td className="Table_Data">{data.date}</td>
            <td className="Table_Data" >{data.status}</td>
        </tr>



    );
};

export default Orders;