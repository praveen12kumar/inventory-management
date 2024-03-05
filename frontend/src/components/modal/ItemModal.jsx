import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem, toUpdateItem } from "../../actions/itemsAction";
import "./item.css";

const ItemModal = ({ setModal }) => {
  const dispatch = useDispatch();
  const { itemToUpdated } = useSelector((state) => state.items);

  const isUpdate = Object.keys(itemToUpdated).length !== 0;

  //console.log("isUpdate", isUpdate);
  const allCategories = [
    "Electronics",
    "Stationary",
    "Food",
    "Furniture",
    "Sports",
    "Fashion",
    "Home & Kitchen",
  ];

  const initialInput = {
    name: "",
    category: allCategories[0],
    quantity: 0,
    price: 0,
  };

  const [inputItem, setInputItem] = useState(
    isUpdate ? itemToUpdated : initialInput,
  );

  const handleForm = (e) => {
    setInputItem((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = inputItem._id;
    const updatedItem = {
      _id: inputItem._id,
      name: inputItem.name,
      category: inputItem.category,
      quantity: inputItem.quantity,
      price: inputItem.price,
    };
    {
      isUpdate
        ? dispatch(updateItem(id, updatedItem))
        : dispatch(addItem(inputItem));
    }
    dispatch(toUpdateItem({}));
    setModal(false);
  };

  return (
    <div className="modal">
      <div className="add-header">
        <h3>Add Item Modal</h3>
        {/* <button className="cancel" onClick={() => setModal(false)}>
          <GiCancel />{" "}
        </button> */}
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Enter item name"
            onChange={handleForm}
          />
        </div>
        <div className="form-group itemCategory">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" onChange={handleForm}>
            <option value="">Select</option>
            <option value="Electronics">Electronics</option>
            <option value="Stationary">Stationary</option>
            <option value="Food">Food</option>
            <option value="Furniture">Furniture</option>
            <option value="Sports">Sports</option>
            <option value="Fashion">Fashion</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="quantity"
            id="quantity"
            placeholder="Enter quantity"
            onChange={handleForm}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="price"
            id="price"
            placeholder="Enter price"
            onChange={handleForm}
          />
        </div>
        <div className="button-container">
          <button className="btn" type="submit">
            {isUpdate ? "Update" : "Submit"}
          </button>
          <button className="btn" onClick={() => setModal(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemModal;
