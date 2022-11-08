import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import ProductCard from "../components/ProductCard";

let basePath = "https://assignment-api.piton.com.tr";
let productAll = "/api/v1/product/all";
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lcm1pbkB0ZXN0LmNvbSIsImlhdCI6MTY2NzIxMzM2MiwiZXhwIjoxNjkzMTMzMzYyfQ.q8L1W7aKQZp_cGLY5l1y7-awjvxqC2Y5IWS-wFEVdtM";

interface ProductListProps {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  likes: number;
}

function Home() {
  const [productList, setProductList] = useState([]);

   useEffect(() => {
    axios
    .get(basePath + productAll, {
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": '*',
        // Authorization: `Bearer ${token}`,
        "access-token": token,
      },
    })
    .then((res) => res.data)
    .then((res) => console.log(res.products))
    .catch((error) => {
      console.error(error);
    });
   }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="flex flex-col items-center justify-center mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl mb-8 font-medium text-gray-900">PRODUCTS</h2>
          {productList.map((product: ProductListProps) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                description={product.description}
                likes={product.likes}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
