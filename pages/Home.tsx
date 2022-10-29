import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="flex flex-col items-center justify-center mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl mb-8 font-medium text-gray-900">PRODUCTS</h2>

          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
