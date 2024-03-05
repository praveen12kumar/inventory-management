const initialState = {
    items: [],
    loading: false,
    itemToUpdated: {},
  };
  
  const inventoryReducer = (state = initialState, { type, payload }) => {
    //console.log("Payload", payload);
    switch (type) {
      case "LOADING":
        return { ...state, loading: true };
      case "FETCH_ALL_ITEMS":
        return { ...state, items: payload, loading: false };
      case "ADD_ITEM":
        return {
          ...state,
          items: [...state.items, payload],
          loading: false,
        };
      case "DELETE_ITEM":
        return {
          ...state,
          items: state.items.filter(({ _id }) => _id !== payload),
          loading: false,
        };
      case "UPDATE_ITEM":
        return {
          ...state,
          items: state.items.map((item) =>
            item._id === payload._id ? payload : item,
          ),
          loading: false,
        };
      case "UPDATE_ITEM_TO_UPDATE":
        return { ...state, itemToUpdated: payload, loading: false };
      default:
        return state;
    }
  };
  
  export default inventoryReducer;
  