import { Heart, ShoppingCart, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <>
      <div className="relative">
        <Link
          to={`/product/${product.id}`}
          className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
        >
          <img
            src={product.image}
            loading="lazy"
            alt={product.title}
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white ">
            sale
          </span>
        </Link>

        <button className="absolute top-0 right-0   bg-transform rounded-full shadow ">
          <Heart size={30} className="fill-red-500 text-red-500" />
        </button>

        <div>
          <Link
            to={`/product/${product.id}`}
            className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
          >
            {product.title}
          </Link>

          <div className="flex items-end gap-2">
            <span className="font-bold text-gray-800 lg:text-lg">
              ${product.price}
            </span>
            <span className="mb-0.5 text-red-500 line-through">
              ${(product.price + 30).toFixed(2)}
            </span>
          </div>
          <div className="flex flex-row ">
            <span className="flex flex-row">
              {[...Array(5)].map((_, i) => (
                <Star
                  size={20}
                  key={i}
                  className={
                    i < Math.floor(product.rating.rate)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </span>
            <span className="text-red-500">({product.rating.count})</span>
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="btn btn-primary block w-full flex flex-row item-center flex-between gap-3"
        >
          <ShoppingCart /> Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
