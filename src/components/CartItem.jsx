import { Check, Trash } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { slugify } from "../utils/slugify";

const CartItem = ({ product }) => {
  const { removeCartItem, increaseCart, decreaseCart } = useCart();
  return (
    <>
      <div className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
        <Link
          to="/"
          className="group relative block h-48 w-32 overflow-hidden bg-gray-100 sm:h-56 sm:w-40"
        >
          <img
            src={product.image}
            loading="lazy"
            alt={product.title}
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </Link>

        <div className="flex flex-1 flex-col justify-between py-4">
          <div>
            <Link
              to={`/product/${slugify(product.title)}`}
              className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              {product.title}
            </Link>

            <span className="block text-gray-500">Size: S</span>
            <span className="block text-gray-500">Color: White</span>
          </div>

          <div>
            <span className="mb-1 block font-bold text-gray-800 md:text-lg">
              ${product.price.toFixed(2)}
            </span>

            <span className="flex items-center gap-1 text-sm text-gray-500">
              <Check size={20} className="text-emerald-500" />
              In stock
            </span>
          </div>
        </div>

        <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
          <div className="flex flex-col items-start gap-2">
            <div className="flex h-12 w-20 overflow-hidden rounded border">
              {/* <input
                type="number"
                value="1"
                className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring"
              /> */}

              <div className="flex flex-row divide-y border-l gap-4">
                <button
                  onClick={() => increaseCart(product.id, product.quantity)}
                  className="flex w-6 flex-1 select-none items-center justify-center bg-indigo-500 leading-none transition duration-100 hover:bg-indigo-400 active:bg-gray-200"
                >
                  +
                </button>
                <button
                  onClick={() => decreaseCart(product.id)}
                  className="flex w-6 flex-1 select-none items-center justify-center bg-indigo-500 leading-none transition duration-100 hover:bg-indigo-400 active:bg-gray-200"
                  disabled={product.quantity === 1}
                >
                  -
                </button>
              </div>
            </div>

            <button
              onClick={() => removeCartItem(product)}
              className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              <Trash size={20} className="cursor-pointer" />
            </button>
          </div>

          <div className="ml-4 pt-3 md:ml-8 md:pt-2 lg:ml-16">
            <span className="block font-bold text-gray-800 md:text-lg">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
