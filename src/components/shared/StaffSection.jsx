import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Twitter from "@/assets/icons/twitter.svg?react";
import Instagram from "@/assets/icons/instagram.svg?react";
import LinkedIn from "@/assets/icons/linkedin.svg?react";

export default function StaffSection({ staff }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 12 },
      },
    },

    detailsChanged(s) {
      const pv = getPerView(s);
      const totalPages = Math.max(1, Math.ceil(s.slides.length / pv));
      setPages(totalPages);
      setCurrentPage(Math.floor(s.track.details.rel / pv));
    },

    optionsChanged(s) {
      const pv = getPerView(s);
      const totalPages = Math.max(1, Math.ceil(s.slides.length / pv));
      setPages(totalPages);
    },

    loop: false,
  });

  function getPerView(slider) {
    const pv = slider.options?.slides?.perView;
    return typeof pv === "number" ? pv : 1;
  }

  function goToPage(pageIdx) {
    const slider = instanceRef.current;
    if (!slider) return;
    const pv = getPerView(slider);
    const targetIdx = Math.min(pageIdx * pv, slider.track.details.maxIdx);
    slider.moveToIdx(targetIdx);
  }

  const icons = [
    <Twitter key="twitter" className="size-6" />,
    <Instagram key="instagram" className="size-5" />,
    <LinkedIn key="linkedin" className="size-5" />,
  ];

  return (
    <section className="w-full flex flex-col items-center">
      <div ref={sliderRef} className="keen-slider w-full px-4">
        {staff.map((person, index) => (
          <div
            key={index}
            className="keen-slider__slide p-6 flex flex-col items-start"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-60 h-60 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{person.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{person.title}</p>
            <div className="flex gap-4 text-black">
              {icons.map((icon, idx) => (
                <div key={idx} className="hover:cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {pages > 1 && (
        <div className="flex gap-2 mt-6">
          {Array.from({ length: pages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              aria-label={`Go to page ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-colors hover:cursor-pointer ${
                currentPage === idx ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
