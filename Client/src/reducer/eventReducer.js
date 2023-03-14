const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "API ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "MY_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });
      return {
        ...state,
        isLoading:false,
        events:action.payload,
        featureEvents:featureData
        
      };
      
     

    default:
      return state;
  }
};
export default ProductReducer;
