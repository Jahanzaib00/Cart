import React, { useReducer, useContext } from "react";
import Reducer from "./Reducer";
// const url = "https://course-api.com/react-store-products";
import { data } from "./data";
const initialState = {
  products: [],
  modal: false,
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((prod) => {
  //       setData(prod);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  const [state, dispatch] = useReducer(Reducer, initialState);
  const Add_Product = (prod) => {
    dispatch({ type: "ADD_ITEM", payload: prod });
  };
  const Remove_Product = (prod) => {
    dispatch({ type: "REMOVE_ITEM", payload: prod });
  };
  const Clear_Cart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const Close_Modal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const Open_Modal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };
  return (
    <div>
      <AppContext.Provider
        value={{
          ...state,
          Add_Product,
          Remove_Product,
          Clear_Cart,
          Close_Modal,
          Open_Modal,
          data,
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
