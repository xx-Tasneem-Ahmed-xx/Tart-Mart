import React from "react";
import LanguageToggle from "./LanguageToggle";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/assets/icons/search.svg?react";
import HeartIcon from "@/assets/icons/heart.svg?react";
import CartIcon from "@/assets/icons/cart.svg?react";
import ProfileIcon from "@/assets/icons/profile.svg?react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <p className="bg-black text-white text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className="font-bold underline m-4">
          <a href="">ShopNow</a>
        </span>
        <LanguageToggle />
      </p>
      <nav className="sm:flex justify-evenly w-full mt-10 mb-2 items-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Tart Mart</h1>
        <div className="sm:w-2/5">
          <ul className="flex gap-x-4  mt-4 justify-evenly items-center self-start font-medium">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"#"}>About</Link>
            </li>
            <li>
              <Link to={"/signup"}>Sign Up</Link>
            </li>
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
          <HeartIcon />
          <CartIcon />
          <ProfileIcon />
        </div>
      </nav>
      <hr />
    </header>
  );
}
