import React from "react";
import StarRating from "./StarRating";
import { Heart } from "lucide-react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, sale = 0 }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="flex flex-col gap-2 relative p-1 hover:cursor-pointer transition-transform hover:-translate-y-2"
      >
        <div className="h-48 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.description}
            className="h-full w-full object-contain border p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
          />
          {sale !== 0 ? (
            <div className="bg-[#DB4444] absolute top-4 left-4 rounded-md py-1 px-2 text-white font-light">
              {product.rating.rate * 10}%
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-col gap-y-2 absolute top-2 right-1/12">
            <Heart className="bg-white rounded-full size-7" />
            <Eye className="bg-white rounded-full size-7" />
          </div>
        </div>
        <h4 className="text-lg font-semibold max-w-fit line-clamp-2">
          {product.title}
        </h4>
        <div className="flex justify-start items-baseline gap-x-3">
          <p className="text-[#DB4444] text-lg font-semibold">
            ${product.price}
          </p>
          <StarRating
            value={product.rating.rate}
            totalStars={5}
            ratingsNumber={product.rating.count}
          />
        </div>
      </div>
    </>
  );
}
