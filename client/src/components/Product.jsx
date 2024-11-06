// import { useEffect, useState } from "react";
import ProductItem from "./ProductItem.jsx";

export default function Product(props) {
  const items = props.items;

  return (
    <ul id="product">
      {items?.map((product) => (
        <ProductItem key={product._id} product={product} />
        // <p key={product._id}>{product.name}</p>
      ))}
    </ul>
  );
}
