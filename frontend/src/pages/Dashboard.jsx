import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import InventoryTable from '../components/dashboardComponents/InventoryTable';
import SaleTable from '../components/table/SaleTable';
import "./index.css";


const Dashboard = () => {
  const { items } = useSelector((state) => state.items);
  const {sales} = useSelector((state) => state.sales);
  const [select, setSelect] = useState("");
  
  return (
    <div className='dashboard'>
      <div className="item-sales">
        <p onClick={()=>setSelect("inventory")}>Inventory Data</p>
        <p onClick={()=>setSelect("sales")}>Sales Data</p>
      </div>

      {
        select === "inventory" && 
        (
          <InventoryTable data = {items}/>
        )
      }
      {
        select === "sales" && (
          <SaleTable sales = {sales}/>
        )
      }
    </div>
  )
}

export default Dashboard
