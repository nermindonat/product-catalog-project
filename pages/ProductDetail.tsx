import React, {useState} from "react";
import Navbar from "../components/Navbar";
import ProductDetailCard from "../components/ProductDetailCard";


let productId= "/api/v1/product/get"

interface ProductDetailProps{
  id?: number; 
  image?: string;
  name?: string;
  price?: number;
  description?: string;
}

function ProductDetail() {
  const [ProductDetail, setProductDetail] = useState();
  
  return (
    <>
      <Navbar />
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <ProductDetailCard />
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
