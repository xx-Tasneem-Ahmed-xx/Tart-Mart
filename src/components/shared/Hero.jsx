import React, { useState } from "react";
import banner from "@/assets/images/frame.png";
import { ChevronRight, MenuIcon, XCircleIcon } from "lucide-react";
export default function Hero() {
  const categories = [
    "Women’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const generateMenu = function () {
    return categories.map((category, index) => (
      <li className="flex items-center" key={index}>
        <button className="hover:cursor-pointer text-left w-full px-2 py-1 hover:bg-gray-200 rounded-md">
          {category}
        </button>
        {category.includes("Fashion") && (
          <ChevronRight className="hover:cursor-pointer" />
        )}
      </li>
    ));
  };
  return (
    <section className="flex items-start md:items-center w-full h-full gap-5 md:gap-8">
      <button
        className="md:hidden hover:cursor-pointer"
        onClick={() => setSidebarOpen(true)}
      >
        <MenuIcon />
      </button>
      {sidebarOpen && (
        <aside className="fixed inset-0 z-50 md:hidden">
          <div className="bg-white w-64 h-full rounded-md p-4 shadow-lg flex flex-col">
            <button className="self-end" onClick={() => setSidebarOpen(false)}>
              <XCircleIcon />
            </button>
            {generateMenu()}
          </div>
        </aside>
      )}
      <aside className="hidden md:flex md:flex-col w-64 mt-6">
        <ul className="space-y-2 w-full">{generateMenu()}</ul>
      </aside>
      <div className="w-px h-full bg-gray-400"></div>
      <div className="w-full mt-6">
        <img
          src={banner}
          alt="banner for a 10% voucher on iphone"
          className="size-full"
        />
      </div>
    </section>
  );
}
