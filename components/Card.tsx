import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function ProductList() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <Link
        href=""
        className="rounded-md border border-gray-300 shadow-xl group "
        onClick={() => router.push("/ProductDetail")}
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col ml-2 mb-2">
          <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
        </div>
        <button className="rounded-full mr-2 w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
        </div>
        
      </Link>

      <Link
        href=""
        className="rounded-md border border-gray-300 shadow-xl group"
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
            alt="Olive drab green insulated bottle with flared screw lid and flat top."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
       <div className="flex flex-row items-center justify-between">
       <div className="flex flex-col ml-2 mb-2">
          <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </div>
        <button className="rounded-full mr-2 w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
       </div>
      </Link>

      <Link
        href=""
        className="rounded-md border border-gray-300 shadow-xl group"
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
            alt="Person using a pen to cross a task off a productivity paper card."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col ml-2 mb-2">
          <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
        </div>
        <button className="rounded-full mr-2 w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
        </div>
      </Link>

      <Link
        href=""
        className="rounded-md border border-gray-300 shadow-xl group"
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
            alt="Hand holding black machined steel mechanical pencil with brass tip and top."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
          <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col ml-2 mb-2">
          <h3 className="mt-4 text-sm text-gray-700">
            Machined Mechanical Pencil
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </div>
        <button className="rounded-full mr-2 w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
          </div>
      </Link>
    </div>
  );
}

export default ProductList;
