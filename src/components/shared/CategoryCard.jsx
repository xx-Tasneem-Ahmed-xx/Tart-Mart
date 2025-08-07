import React from "react";
import { Cable, Shirt, Gem } from "lucide-react";
export default function CategoryCard({ category }) {
  return (
    <div className="flex flex-col items-center border-2 rounded-md gap-y-3 w-9/12 py-3 hover:bg-[#DB4444] hover:text-white hover:cursor-pointer">
      {category.includes("clothing") && <Shirt size={40} strokeWidth={1} />}
      {category.includes("jewelery") && <Gem size={40} strokeWidth={1} />}
      {category.includes("electronics") && <Cable size={40} strokeWidth={1} />}
      <h4 className="m-1">{category}</h4>
    </div>
  );
}
