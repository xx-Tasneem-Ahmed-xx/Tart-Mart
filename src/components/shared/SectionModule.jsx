import React from "react";
import Timer from "./Timer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";
import Featured from "./Featured";
export default function ProductCarousel({
  title1 = "",
  title2 = "",
  timer = false,
  products,
  index = 0,
  sale,
  categories = [],
  sectionType,
}) {
  return (
    <section className="flex flex-col w-full justify-start  ">
      <div className="flex items-center">
        <div className="bg-[#DB4444] w-7 mr-5 rounded-md h-10"></div>
        <p className="text-[#DB4444] font-bold">{title1}</p>
      </div>
      <div className="mt-3 flex items-end justify-between">
        <h4 className="text-4xl font-medium mb-6">{title2}</h4>
        {timer && <Timer days={3} hours={16} minutes={43} seconds={12} />}
      </div>
      {sectionType !== "Featured" && (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full place-self-center mt-6"
        >
          <CarouselContent>
            {sectionType === "products" &&
              products.slice(index, index + 6).map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <ProductCard key={product.id} product={product} sale={sale} />
                </CarouselItem>
              ))}
            {sectionType === "category" &&
              categories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <CategoryCard category={category} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
      {sectionType === "products" && (
        <button className="bg-[#DB4444] w-fit self-center mt-7 p-4 rounded-md text-white hover:cursor-pointer">
          View All Products
        </button>
      )}
      {sectionType === "Featured" && <Featured />}
    </section>
  );
}
