import React from "react";
import banner from "@/assets/images/frame.png";
import { ChevronRight } from "lucide-react";
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
  return (
    <section className="flex items-start w-full h-full gap-8">
      <aside className="flex flex-col w-64 mt-6">
        <ul className="space-y-2 w-full">
          {categories.map((category, index) => (
            <li className="flex items-center" key={index}>
              <button className="hover:cursor-pointer text-left w-full px-2 py-1 hover:bg-gray-200 rounded-md">
                {category}
              </button>
              {category.includes("Fashion") && (
                <ChevronRight className="hover:cursor-pointer" />
              )}
            </li>
          ))}
        </ul>
      </aside>
      <div className="w-px h-full bg-gray-400"></div>
      <div className="w-full mt-6">
        <img
          src={banner}
          alt="banner for a 10% voucher on iphone"
          className="size-auto"
        />
      </div>
    </section>
  );
}
