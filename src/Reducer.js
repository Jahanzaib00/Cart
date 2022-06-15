const Reducer = (state, action) => {
  console.log(action.payload);
  if (action.type === "ADD_ITEM") {
    const newList = [...state.products, action.payload];
    console.log(newList);
    return { ...state, products: newList };
  } else if (action.type === "REMOVE_ITEM") {
    const newList = state.products.filter(
      (prod) => prod.id !== action.payload.id
    );
    console.log(newList);
    return { ...state, products: newList };
  } else if (action.type === "CLEAR_CART") {
    console.log(state.products);
    return { ...state, products: [], modal: false };
  } else if (action.type === "CLOSE_MODAL") {
    return { ...state, modal: false };
  } else if (action.type === "OPEN_MODAL") {
    return { ...state, modal: true };
  }
};
export default Reducer;
