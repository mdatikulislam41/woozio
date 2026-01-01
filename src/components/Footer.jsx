import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getfooterItem } from "../services/mokApi";
import { Link } from "react-router";
import { ClosedCaption, Smile, X } from "lucide-react";
const FooterItem = () => {
  const {
    data: fNav,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["footerNav"],
    queryFn: getfooterItem,
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      {fNav?.data.map((item) => (
        <Link key={item.id} to={item.url} className="link link-hover">
          {item.label}
        </Link>
      ))}
    </>
  );
};
const Footer = () => {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <FooterItem />
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to="/">
              <X />
            </Link>
            <Link to="/">
              <ClosedCaption />
            </Link>
            <Link to="/">
              <Smile />
            </Link>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Md.
            Atikul Islam
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
