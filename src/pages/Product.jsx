import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import BeautyProd from "../components/BeautyProd/BeautyProd";
import ProductDisplay from "../components/ProductDIsplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import ReleatedProducts from "../components/ReleatedProducts/ReleatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BeautyProd product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <ReleatedProducts />
    </div>
  );
};

export default Product;
