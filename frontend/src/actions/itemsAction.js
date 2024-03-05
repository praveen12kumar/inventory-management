import axios from "axios";

const fetchAllItems = () => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const response = await fetch(
      "/api/v1/item/all",
    );
    const data = await response.json();
    //console.log("data", data.items);
    dispatch({ type: "FETCH_ALL_ITEMS", payload: data.items });
  } catch (error) {
    console.log(error.message);
  }
};

const addItem = (item) => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const response = await axios({
      method: "POST",
      url: "/api/v1/item/new",
      data: item,
    });
    //console.log("response", response.data.item);
    dispatch({
      type: "ADD_ITEM",
      payload: response.data.item,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteItem = (id) => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const response = await axios({
      method: "DELETE",
      url: `/api/v1/item/delete/${id}`,
    });
    console.log("response", response.data.message);
    dispatch({ type: "DELETE_ITEM", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

const updateItem = (id, item) => async (dispatch) => {
  //console.log("Item", item);
  dispatch({ type: "LOADING" });
  try {
    const response = await axios({
      method: "PUT",
      url: `/api/v1/item/update/${id}`,
      data: item,
    });
    //console.log("response", response);
    if (response.status === 200) {
      dispatch({ type: "UPDATE_ITEM", payload: item });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const toUpdateItem = (UpdateItem) => async (dispatch) => {
  dispatch({ type: "UPDATE_ITEM_TO_UPDATE", payload: UpdateItem });
};

export { fetchAllItems, addItem, deleteItem, updateItem, toUpdateItem };
