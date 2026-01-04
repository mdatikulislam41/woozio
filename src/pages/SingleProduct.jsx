import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchProductById } from "../services/api";
import { useParams } from "react-router";
import SingleProductCard from "../components/SingleProductCard";

const SingleProduct = () => {
  const { id } = useParams();
  // console.log("single product", id);
  const {
    data: singlePro,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: () => fetchProductById(id),
  });

  // useQuery({
  //   queryKey:["product"],
  //   queryFn: fetchProductById
  // })
  if (isLoading) return <div>Loading....</div>;

  return (
    <div>
      <SingleProductCard key={singlePro.data.id} product={singlePro.data} />
    </div>
  );
};

export default SingleProduct;
