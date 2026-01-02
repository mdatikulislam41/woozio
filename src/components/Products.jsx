import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchProduct } from "../services/api";
import ProductCard from "./ProductCard";

const Products = (props) => {
  const { start = 3, next } = props;
  const [starting, setStarting] = useState(start);
  const handleShowMore = () => {
    setStarting((prev) => prev + next);
  };
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
  });
  if (isLoading) return <div>Loading....</div>;

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {/* <!-- product - start --> */}
            {products.data.slice(0, starting).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {/* <!-- product - end --> */}
          </div>
          {next && products.data.length > starting && (
            <div className="mb-6 mt-5 flex items-center justify-center gap-4 w-full">
              <button onClick={handleShowMore} className="btn btn-primary">
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
