import { useState, useEffect } from "react";
import { CategoriesContext } from "./categories.context.js";

import {
  addCollctionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from "../shop-data.js";

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  //NOTE: when it's done, we remove it because we only deal it in front-end
  // useEffect(() => {
  //   addCollctionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap, setCategoriesMap };

  // useEffect(() => {
  //   setProduct(SHOP_DATA);
  // }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
