import React from "react";

export default function PriceSummary({ details }) {
  return details.map((detail, index) => (
    <div
      key={index}
      className="flex justify-between my-1 border-b-1 pb-3 border-[#9f9f9f]"
    >
      <p>{detail.title}</p>
      <p>
        {isNaN(detail.value)
          ? `${detail.value}`
          : `$${detail.value.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
      </p>
    </div>
  ));
}
