import React from "react";
import LanguageToggle from "./LanguageToggle";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/assets/icons/search.svg?react";
import HeartIcon from "@/assets/icons/heart.svg?react";
import CartIcon from "@/assets/icons/cart.svg?react";
import ProfileIcon from "@/assets/icons/profile.svg?react";
import { Link } from "react-router-dom";
export default function Header() {
  const links = ["Home", "Contact", "About", "SignUp"];
  const icons = [
    { link: "/wishlist", tag: <HeartIcon /> },
    { link: "/cart", tag: <CartIcon /> },
    { link: "/account", tag: <ProfileIcon /> },
  ];
  return (
    <header className="mb-15">
      <div className="bg-black text-white text-center flex justify-center items-center relative p-2">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="font-bold underline m-4">
            <a href="">ShopNow</a>
          </span>
        </p>
        <div className="md:absolute md:right-12">
          <LanguageToggle />
        </div>
      </div>
      <nav className="sm:flex flex-wrap justify-evenly w-full mt-4 mb-2 items-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Tart Mart</h1>
        <div className="sm:w-2/5">
          <ul className="flex gap-x-4  mt-4 justify-evenly items-center self-start font-medium">
            {links.map((link, index) => (
              <li
                key={index}
                className="hover:bg-[#db4444b2] rounded-md p-1 transition-transform hover:-translate-y-1"
              >
                <Link to={link === "Home" ? "" : link}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mt-4 gap-x-6">
          <div className="relative w-1/2 sm:w-80">
            <Input
              type="text"
              placeholder="What are you looking for?"
              className="pl-10 pr-4 h-12 text-base"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </div>
          </div>
          <div className="flex gap-3 items-center ">
            {icons.map((icon, index) => (
              <Link
                key={index}
                to={icon.link}
                className="hover:bg-[#db4444b2] rounded-md p-1 transition-transform hover:-translate-y-1 "
              >
                {icon.tag}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
}
