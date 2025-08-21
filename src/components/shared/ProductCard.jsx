import React, { useState } from "react";
import StarRating from "./StarRating";
import { Heart } from "lucide-react";
import { Eye } from "lucide-react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "@/store/wishListSlice";
import { removeFromWishlist } from "@/store/wishListSlice";
import { addToCart } from "@/store/cartSlice";

export default function ProductCard({ product, sale = 0, wishlist = false }) {
  const [isFav, setIsFav] = useState(product.favourite || false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col gap-2 relative p-1 transition-transform hover:-translate-y-2">
        <div className="h-48 w-full relative overflow-hidden">
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
          {wishlist && (
            <>
              <button
                className="bg-black w-full absolute bottom-0 text-white text-center rounded-md p-2 hover:cursor-pointer hover:opacity-80"
                onClick={() => dispatch(addToCart({ productId: product.id }))}
              >
                Add To Cart
              </button>
            </>
          )}
          <div className="flex flex-col gap-y-2 absolute top-2 right-1/12 hover:cursor-pointer">
            {(wishlist && (
              <Trash2
                className="bg-white rounded-full size-6"
                onClick={() => dispatch(removeFromWishlist(product.id))}
              />
            )) || (
              <>
                <Heart
                  className={`bg-white rounded-full size-6 hover:fill-[#db4444ba] ${
                    isFav ? "fill-[#db4444ba]" : ""
                  }`}
                  onClick={() => {
                    setIsFav(!isFav);
                    dispatch(addToWishlist(product));
                  }}
                />
                <Eye className="bg-white rounded-full size-6" />
              </>
            )}
          </div>
        </div>
        <h4
          className="text-lg font-semibold max-w-fit line-clamp-2 hover:cursor-pointer hover:underline"
          onClick={() => navigate(`/product/${product.id}`)}
        >
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
