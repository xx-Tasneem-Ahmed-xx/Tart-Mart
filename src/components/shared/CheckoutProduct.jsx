import React from "react";
import womanphoto from "@/assets/images/woman.jpg";
export default function CheckoutProduct() {
  return (
    <div className="flex flex-col w-full items-start">
      <div className="flex justify-between items-center w-full">
        <div className="flex">
          <img src={womanphoto} alt="" width={50} height={50} />
          <p className="p-2">LCD Monitor</p>
        </div>
        <p>$650</p>
      </div>
    </div>
  );
}
