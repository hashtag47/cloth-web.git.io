import React from "react";

import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { product } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {product.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
