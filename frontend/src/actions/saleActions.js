import axios from "axios";

const fetchAllSale = () => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const response = await axios({
      method: "GET",
      url: "api/v1/sale/all",
    });
    console.log("response", response.data.SaleArray);
    dispatch({
      type: "FETCH_ALL_SALE",
      payload: response.data.SaleArray,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const addSale = (id, quantity) => async (dispatch) => {
  //console.log(id, "Quantity", quantity);
  dispatch({ type: "LOADING" });
  try {
    const response = await axios({
      method: "POST",
      url: `/api/v1/sale/add/${id}`,
      data: quantity,
    });
    //console.log("response", response.data.newSale);
    dispatch({
      type: "ADD_SALE",
      payload: response.data.newSale,
    });
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllSale, addSale };
