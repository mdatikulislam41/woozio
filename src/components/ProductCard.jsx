import { Heart, ShoppingCart, Star, Trash } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";
import { slugify } from "../utils/slugify";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorite();

  return (
    <>
      {/* New Design */}
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
        <div className="relative overflow-hidden bg-gray-50 aspect-square">
          <img
            alt={product.title}
            className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
            src={product.image}
          />
          <button
            onClick={() => toggleFavorite(product)}
            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <Heart
              size={30}
              className={
                isFavorite(product.id)
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400 hover:text-red-500"
              }
            />
          </button>
        </div>
        <div className="p-4 flex flex-col">
          <div className="flex-grow">
            <span className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-2 capitalize">
              {product.category}
            </span>
            {/* <Link to={`/product/${product.id}`}></Link> */}
            <Link to={`/product/${product.id}`}>
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
                {product.title}
              </h3>
            </Link>
            <div className="flex items-center space-x-1 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    size={20}
                    key={i}
                    className={
                      i < Math.floor(product.rating.rate)
                        ? "fill-yellow-500 text-yellow-500"
                        : "text-gray-200"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({product.rating.count})
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => addToCart(product)}
                className="p-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
              >
                <ShoppingCart />
              </button>
              {/* <button className="p-2 bg-gray-100 text-red-500 rounded-lg hover:bg-red-50 transition-colors">
                <Trash />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
