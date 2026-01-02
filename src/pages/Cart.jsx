import React from "react";
import { Link } from "react-router";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { cart, cartTotal } = useCart();
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Your Cart
            </h2>
          </div>
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-black mb-4">
                Your cart is empty
              </h2>
              <Link
                class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                to="/shop"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div>
              <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
                {/* <!-- product - start --> */}
                {cart.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}

                {/* <!-- product - end --> */}
              </div>

              {/* <!-- totals - start --> */}
              <CartTotal total={cartTotal} />
              {/* <!-- totals - end --> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
