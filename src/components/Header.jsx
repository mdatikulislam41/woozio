import { useQuery } from "@tanstack/react-query";
import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { Link, Navigate, NavLink } from "react-router";
import { getNavItem } from "../services/mokApi";
import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";
const NavItem = () => {
  const {
    data: nav,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: getNavItem,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {nav.data.map((item) => (
        <li key={item.id}>
          <NavLink to={item.url}>{item.label}</NavLink>
        </li>
      ))}
    </>
  );
};

const Header = () => {
  const { cart } = useCart();
  const { favorite } = useFavorite();
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavItem />
            </ul>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavItem />
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-xl">
            <img src="/Logo-w.png" alt="Woozio" />
          </Link>
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => navigate("/favorite")}
          >
            <Heart
              size={20}
              className="fill-red-500 text-red-400"
              className={
                favorite.length > 0
                  ? "fill-red-500 text-red-400"
                  : "fill-gray-500 text-red-400"
              }
            />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Link to="/cart">
                <ShoppingCart />
                {cart.length > 0 && (
                  <span className="badge badge-xs badge-primary indicator-item">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
