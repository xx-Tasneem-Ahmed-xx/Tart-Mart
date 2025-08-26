import React from "react";
import { useNavigate } from "react-router-dom";
import Timer from "@/components/shared/Timer";
import ProductCard from "@/components/shared/ProductCard";
import CategoryCard from "@/components/shared/CategoryCard";
import Featured from "@/components/shared/Featured";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function SectionModule({
  title1 = "",
  title2 = "",
  timer = false,
  products,
  index = 0,
  sale,
  categories = [],
  sectionType,
}) {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col w-full justify-start  ">
      <div className="flex items-center">
        <div
          className={`${
            sectionType === "wishlist" ? "hidden" : ""
          } bg-[#DB4444] w-7 mr-5 rounded-md h-10`}
        ></div>
        <p className="text-[#DB4444] font-bold">{title1}</p>
      </div>
      <div className="mt-3 flex items-end justify-between">
        <h4 className="text-4xl font-medium mb-6">{title2}</h4>
        {timer && <Timer days={3} hours={16} minutes={43} seconds={12} />}
      </div>
      {sectionType !== "Featured" && sectionType !== "wishlist" && (
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
        <button
          className="bg-[#DB4444] w-fit self-center mt-7 p-4 rounded-md text-white hover:cursor-pointer"
          onClick={() => navigate("/products")}
        >
          View All Products
        </button>
      )}
      {sectionType === "wishlist" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:w-full gap-5 ">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              sale={sale}
              wishlist={true}
            />
          ))}
        </div>
      )}
      {sectionType === "Featured" && <Featured />}
    </section>
  );
}
