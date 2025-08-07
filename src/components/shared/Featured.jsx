import React from "react";
import Speaker from "@/assets/images/soundspeakers.png";
import Guccie from "@/assets/images/guccie.png";
import Woman from "@/assets/images/woman.jpg";
import PlayStation from "@/assets/images/playstation.png";

export default function Featured() {
  return (
    <section className="grid grid-cols-4 grid-rows-4 gap-5 w-full my-5 ">
      <div className="col-span-2 row-span-4 bg-black relative rounded-sm">
        <div className="flex items-center justify-center h-full w-full">
          <img src={PlayStation} alt="Playstaion" />
        </div>
        <div className="flex flex-col gap-y-1 text-white absolute bottom-3 left-4 w-1/2 ">
          <h4 className="text-xl font-bold">PlayStation 5</h4>
          <p className="font-light">
            Black and White version of the PS5 coming out on sale.
          </p>
          <a className="font-medium underline">Shop Now</a>
        </div>
      </div>
      <div className="col-span-2 row-span-2 bg-black relative rounded-sm">
        <div>
          <img src={Woman} alt="Woman" />
        </div>
        <div className="flex flex-col gap-y-1 text-white absolute bottom-3 left-4 w-1/2 ">
          <h4 className="text-xl font-bold">Women’s Collections</h4>
          <p className="font-light">
            Featured woman collections that give you another vibe.
          </p>
          <a className="font-medium underline">Shop Now</a>
        </div>
      </div>
      <div className="col-span-1 row-span-2 bg-black relative rounded-sm">
        <div className="flex items-center justify-center h-full w-full">
          <img src={Speaker} alt="speakers" />
        </div>
        <div className="flex flex-col gap-y-1 text-white absolute bottom-3 left-4 w-1/2 ">
          <h4 className="text-xl font-bold">Speakers</h4>
          <p className="font-light">Amazon wireless speakers</p>
          <a className="font-medium underline">Shop Now</a>
        </div>
      </div>
      <div className="col-span-1 row-span-2 bg-black relative rounded-sm">
        <div className="flex items-center justify-center h-full w-full">
          <img src={Guccie} alt="guccie perfume" />
        </div>
        <div className="flex flex-col gap-y-1 text-white absolute bottom-3 left-4 w-1/2 ">
          <h4 className="text-xl font-bold">Perfume</h4>
          <p className="font-light">GUCCI INTENSE OUD EDP </p>
          <a className="font-medium underline">Shop Now</a>
        </div>
      </div>
    </section>
  );
}
