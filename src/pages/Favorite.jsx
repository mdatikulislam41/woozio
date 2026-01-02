import React from "react";
import { useFavorite } from "../context/FavoriteContext";
import { ArrowLeft, Heart, Star, Trash, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";

const Favorite = () => {
  const { favorite } = useFavorite();
  if (favorite.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart size={48} className="text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Your favorites list is empty
          </h2>
          <p className="text-white mb-8">
            You haven't added any products to your favorites yet. Start
            exploring our collection!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Browse Products
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorite.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorite;
