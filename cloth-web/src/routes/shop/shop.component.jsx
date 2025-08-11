import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
// import { setCategories } from "../../store/categories/category.action";
// import { fetchCategoriesAsync } from "../../store/categories/category.action"; NOTE: this is for thunk
// import { CategoriesProvider } from "../../contexts/categories.provider";
import { fetchCategoriesStart } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const getCategoriesMap = async () => {
    //   // const categoryMap = await getCategoriesAndDocuments();
    //   const categoriesArray = await getCategoriesAndDocuments("categories");
    //   // console.log(categoriesArray);
    dispatch(fetchCategoriesStart());
    // };
    // getCategoriesMap();
  }, []);

  return (
    // <CategoriesProvider>
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
