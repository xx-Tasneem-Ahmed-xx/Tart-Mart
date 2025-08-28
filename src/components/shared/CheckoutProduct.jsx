import React from "react";
export default function CheckoutProduct({ product }) {
  return (
    <div className="flex flex-col w-full items-start">
      <div className="flex justify-between items-center w-full">
        <div className="flex">
          <img src={product.image} alt="" width={50} height={50} />
          <p className="p-2 line-clamp-1">{product.title}</p>
        </div>
        <p>
          $
          {product.price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
}
