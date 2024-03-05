import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllItems } from "../../actions/itemsAction";
import { addSale } from "../../actions/saleActions";

const SaleModal = ({ setSaleModalOpen }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);

  const [saleInput, setSaleInput] = useState({
    id: "",
    name: items[0]?.name,
    quantity: 1,
  });

  //const { sales } = useSelector((state) => state.sales);

  const handleSubmit = (e) => {
    const { id, quantity } = saleInput;

    const saleQuantity = {
      _id: id,
      quantity: quantity,
    };
    //console.log(id, "Quantity", quantity);
    e.preventDefault();
    dispatch(addSale(id, saleQuantity));
    setSaleModalOpen(false);
  };

  const handleForm = (e) => {
    setSaleInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);

  return (
    <div className="modal">
      <div className="add-header">
        <h3>Add Sale Modal</h3>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group itemCategory">
          <label htmlFor="Items">Sale item</label>
          <select
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => {
              const [_id, name] = e.target.value.split(",");
              setSaleInput({ ...saleInput, id: _id, name: name });
            }}
          >
            {items.map(({ _id, name }, index) => (
              <option value={`${_id}, ${name}`} key={index}>
                {name}
              </option>
            ))}
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
        <div className="button-container">
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn" onClick={() => setSaleModalOpen(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SaleModal;
