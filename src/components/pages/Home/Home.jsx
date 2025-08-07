import React, { useState, useEffect } from "react";
import Hero from "@/components/shared/Hero";
import ProductCarousel from "@/components/shared/ProductCarousel";
import Speaker from "@/assets/images/speaker.png";
import Highlights from "@/components/shared/Highlights";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setCategories([
          ...new Set(products.map((product) => product.category)),
        ]);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [products]);

  return (
    <>
      <section className="flex flex-col items-center w-7xl gap-y-16 px-4 sm:px-8 lg:px-16">
        <Hero />
        <ProductCarousel
          products={products}
          index={0}
          title1="Today's"
          title2="Flash Sale"
          timer={true}
          sale={true}
          sectionType="products"
        />
        <ProductCarousel
          products={products}
          categories={categories}
          title1="Categories"
          title2="Browse By Category"
          timer={false}
          sectionType="category"
        />
        <ProductCarousel
          products={products}
          index={6}
          title1="This Month"
          title2="Best Selling Products"
          timer={false}
          sectionType="products"
        />
        <div className="hover:cursor-pointer">
          <img src={Speaker} alt="speaker" />
        </div>
        <ProductCarousel
          products={products}
          index={12}
          title1="Our Products"
          title2="Explore Our Products"
          sectionType="products"
        />
        <ProductCarousel
          products={products}
          index={12}
          title1="Featured"
          title2="New Arrival"
          sectionType="Featured"
        />
        <Highlights />
      </section>
    </>
  );
}
