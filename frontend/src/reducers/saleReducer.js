const initialState = {
    sales: [],
    loading: false,
  };
  
  const salesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "LOADING":
        return { ...state, loading: true };
  
      case "ADD_SALE":
        return { ...state, sales: [...state.sales, payload], loading: false };
  
      case "FETCH_ALL_SALE":
        return { ...state, sales: payload, loading: false };
  
      default:
        return state;
    }
  };
  
  export default salesReducer;
  