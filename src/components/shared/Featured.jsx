import React from "react";
import Speaker from "@/assets/images/soundspeakers.png";
import Guccie from "@/assets/images/guccie.png";
import Woman from "@/assets/images/woman.jpg";
import PlayStation from "@/assets/images/playstation.png";

export default function Featured() {
  const features = [
    {
      image: PlayStation,
      title: "PlayStation 5",
      paragraph: "Black and White version of the PS5 coming out on sale.",
      gridSpan: "col-span-2 row-span-4",
    },
    {
      image: Woman,
      title: "Women’s Collections",
      paragraph: "Featured woman collections that give you another vibe.",
      gridSpan: "col-span-2 row-span-2",
    },
    {
      image: Speaker,
      title: "Speakers",
      paragraph: "Amazon wireless speakers",
      gridSpan: "col-span-1 row-span-2",
    },
    {
      image: Guccie,
      title: "Perfume",
      paragraph: "GUCCI INTENSE OUD EDP",
      gridSpan: "col-span-1 row-span-2",
    },
  ];

  return (
    <section className="grid grid-cols-4 grid-rows-4 gap-5 w-full my-5 ">
      {features.map((feat, index) => (
        <div
          key={index}
          className={`${feat.gridSpan} bg-black relative rounded-sm`}
        >
          <div className="flex items-center justify-center h-full w-full">
            <img src={feat.image} alt={feat.image} />
          </div>
          <div className="flex flex-col gap-y-1 text-white absolute bottom-3 left-4 w-3/4 md:w-1/2 text-[10px] sm:text-sm md:text-xl">
            <h4 className="font-bold">{feat.title}</h4>
            <p className="font-light ">{feat.paragraph}</p>
            <a className="font-medium underline">Shop Now</a>
          </div>
        </div>
      ))}
    </section>
  );
}
