import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllItems } from "../actions/itemsAction";
import Loader from "../components/loader/Loader";
import ItemTable from "../components/table/ItemTable";
import ItemModal from "../components/modal/ItemModal";
import { GoChecklist } from "react-icons/go";


import "./index.css";

const Item = () => {
  const { items, loading } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);

  return (
    <div className="Item">
      <h1>Items <GoChecklist/></h1>
      <div className="">
        <button className="addItem" onClick={() => setModal(true)}>
          Add Item
        </button>
        {modal && <ItemModal setModal={setModal} />}
      </div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="">
            <ItemTable data={items} setModal={setModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
