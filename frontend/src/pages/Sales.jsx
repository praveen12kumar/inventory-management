import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSale } from "../actions/saleActions";
import SaleTable from "../components/table/SaleTable";
import Loader from "../components/loader/Loader";
import SaleModal from "../components/modal/SaleModal";

import "./index.css";

const Sales = () => {
  const { sales, loading } = useSelector((state) => state.sales);
  const [saleModalOpen, setSaleModalOpen] = useState(false);
  const dispatch = useDispatch();
  // console.log("Sales", sales, loading);
  const totalPrice = sales.reduce((total, curr) => total + curr.price, 0);
  useEffect(() => {
    dispatch(fetchAllSale());
  }, [dispatch]);

  return (
    <div className="">
      <h1>Sales</h1>
      <div className="">
        <button className="addItem" onClick={() => setSaleModalOpen(true)}>
          Add Sale
        </button>
        {saleModalOpen && <SaleModal setSaleModalOpen={setSaleModalOpen} />}
      </div>
      <div className="">
        <h2>Total Revenue: ₹{totalPrice}</h2>
      </div>
      <div className="">
        {loading ? <Loader /> : <SaleTable sales={sales} />}
      </div>
    </div>
  );
};

export default Sales;
