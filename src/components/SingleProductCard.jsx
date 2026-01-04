import { Heart, Star, Truck } from "lucide-react";
import React from "react";
import { useFavorite } from "../context/FavoriteContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";

const SingleProductCard = ({ product }) => {
  const { toggleFavorite, isFavorite } = useFavorite();
  const { addToCart } = useCart();
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* <!-- images - start --> */}
            <div className="grid gap-4 lg:grid-cols-5">
              <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    loading="lazy"
                    alt="Photo by Himanshu Dewangan"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    loading="lazy"
                    alt="Photo by Himanshu Dewangan"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    loading="lazy"
                    alt="Photo by Himanshu Dewangan"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <img
                  src={product.image}
                  loading="lazy"
                  alt="Photo by Himanshu Dewangan"
                  className="h-full w-full object-cover object-center"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                  sale
                </span>

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
            </div>
            {/* <!-- images - end --> */}

            {/* <!-- content - start --> */}
            <div className="md:py-8">
              {/* <!-- name - start --> */}
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  {product.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  {product.title}
                </h2>
              </div>
              {/* <!-- name - end --> */}

              {/* <!-- rating - start --> */}
              <div className="mb-6 flex items-center gap-3 md:mb-10">
                <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
                  <span className="text-sm">{product.rating.rate}</span>

                  <Star size={20} />
                </div>

                <span className="text-sm text-gray-500 transition duration-100">
                  {product.rating.count} ratings
                </span>
              </div>
              {/* <!-- rating - end --> */}

              {/* <!-- color - start --> */}
              <div className="mb-4 md:mb-6">
                <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                  Color
                </span>

                <div className="flex flex-wrap gap-2">
                  <span className="h-8 w-8 rounded-full border bg-gray-800 ring-2 ring-gray-800 ring-offset-1 transition duration-100"></span>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border bg-gray-500 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                  ></button>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border bg-gray-200 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                  ></button>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border bg-white ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                  ></button>
                </div>
              </div>
              {/* <!-- color - end --> */}

              {/* <!-- size - start --> */}
              <div className="mb-8 md:mb-10">
                <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                  Size
                </span>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                  >
                    XS
                  </button>
                  <button
                    type="button"
                    className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                  >
                    S
                  </button>
                  <span className="flex h-8 w-12 cursor-default items-center justify-center rounded-md border border-indigo-500 bg-indigo-500 text-center text-sm font-semibold text-white">
                    M
                  </span>
                  <button
                    type="button"
                    className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                  >
                    L
                  </button>
                  <span className="flex h-8 w-12 cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-white text-center text-sm font-semibold text-gray-400">
                    XL
                  </span>
                </div>
              </div>
              {/* <!-- size - end --> */}

              {/* <!-- price - start --> */}
              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    ${product.price}
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    ${(product.price * 1.5).toFixed(2)}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  incl. VAT plus shipping
                </span>
              </div>
              {/* <!-- price - end --> */}

              {/* <!-- shipping notice - start --> */}
              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <Truck size={20} />

                <span className="text-sm">2-4 day shipping</span>
              </div>
              {/* <!-- shipping notice - end --> */}

              {/* <!-- buttons - start --> */}
              <div className="flex gap-2.5">
                <button
                  onClick={() => addToCart(product)}
                  className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                >
                  Add to cart
                </button>

                <Link
                  to="/"
                  className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Buy now
                </Link>
              </div>
              {/* <!-- buttons - end --> */}
            </div>
            {/* <!-- content - end --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductCard;
