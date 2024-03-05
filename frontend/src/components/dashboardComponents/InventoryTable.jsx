import React from "react";
import "../table/table.css";




const InventoryTable = ({ data, setModal }) => {

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item._id}>
                <td>{index}</td>
              <td>{item?.name}</td>
              <td>{item?.category}</td>
              <td>{item?.quantity}</td>
              <td>{item?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
