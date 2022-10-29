import React from "react";
import {useRouter} from "next/router"
import Link from "next/link";

function ProductList() {
  const router = useRouter();


  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Link href="" className="group border-gray " onClick={() => router.push("/ProductDetail")}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 ml-2">
                Earthen Bottle
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900 ml-2">$48</p>
              
            </Link>

            <a href="#" className="group  border-gray">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                  alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </a>

            <a href="#" className="group  border-gray">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
            </a>

            <a href="#" className="group  border-gray">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                Machined Mechanical Pencil
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </a>
          </div>
  );
}

export default ProductList;
