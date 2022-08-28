import React, { useContext, useEffect, useReducer } from "react";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../files";
import reducer from "../reducers/receipes_reducer";
import { receipeOptions, fetchData } from "../utils";

let url = "https://cokoing-recipe2.p.rapidapi.com/getbycat/Indian%20Desserts";

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
};

const ReceipesContext = React.createContext();

export const ReceipesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const getProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    try {
      const products = await fetchData(url, receipeOptions);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ReceipesContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ReceipesContext.Provider>
  );
};

export const useReceipesContext = () => {
  return useContext(ReceipesContext);
};
