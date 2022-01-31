import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/receipes_reducer";
import axios from "axios";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../files";

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

  const options = {
    method: "GET",
    url: "https://cooking-recipe2.p.rapidapi.com/getbycat/Indian%20Desserts",
    headers: {
      "x-rapidapi-host": "cooking-recipe2.p.rapidapi.com",
      "x-rapidapi-key": "a9af11c38fmshc761ffe28560cf4p184146jsn1203d639b760",
    },
  };

  // const getProducts = (options) => {
  //   dispatch({ type: GET_PRODUCTS_BEGIN });
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       const products = response.data;
  //       dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
  //     })
  //     .catch(function (error) {
  //       dispatch({ type: GET_PRODUCTS_ERROR });
  //     });
  // };

  // useEffect(() => {
  //   getProducts(options);
  // }, []);

  return (
    <ReceipesContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ReceipesContext.Provider>
  );
};

export const useReceipesContext = () => {
  return useContext(ReceipesContext);
};
