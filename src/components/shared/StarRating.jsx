import React from "react";

export default function StarRating({
  value = 0,
  totalStars = 5,
  ratingsNumber = 0,
}) {
  const fullStars = Math.floor(value);
  const halfStar = value % 1 !== 0;
  return (
    <>
      <div className="flex space-x-1 text-yellow-500 text-xl">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i}>★</span>
        ))}
        {halfStar && <span>☆</span>}
        {[...Array(totalStars - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
          <span key={i + fullStars + 1}>☆</span>
        ))}{" "}
        <span className="text-gray-500 text-lg">({ratingsNumber})</span>
      </div>
    </>
  );
}
