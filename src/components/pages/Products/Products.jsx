import React, { useState, useEffect } from "react";
import ProductCard from "@/components/shared/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">All Products</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      );
    </>
  );
}
