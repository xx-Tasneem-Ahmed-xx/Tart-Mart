import React from "react";
import { Truck, Headset, ShieldCheck } from "lucide-react";
export default function Highlights() {
  return (
    <section className="flex justify-around w-full items-center">
      <div className="flex flex-col gap-1 items-center">
        <div className="bg-[#7170734c] rounded-full w-fit p-2.5 mb-4">
          <div className="bg-black rounded-full p-2">
            <Truck size={40} color="white" />
          </div>
        </div>
        <p className="font-bold text-xl">FREE AND FAST DELIVERY</p>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <div className="bg-[#7170734c] rounded-full w-fit p-2.5 mb-4">
          <div className="bg-black rounded-full p-2">
            <Headset size={40} color="white" />
          </div>
        </div>
        <p className="font-bold text-xl">24/7 CUSTOMER SERVICE</p>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <div className="bg-[#7170734c] rounded-full w-fit p-2.5 mb-4">
          <div className="bg-black rounded-full p-2">
            <ShieldCheck size={40} color="white" />
          </div>
        </div>
        <p className="font-bold text-xl">MONEY BACK GUARANTEE</p>
        <p>We reurn money within 30 days</p>
      </div>
    </section>
  );
}
