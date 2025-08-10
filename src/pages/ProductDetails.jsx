import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotFound404 from "@/pages/NotFound404";
import SectionModule from "@/components/shared/SectionModule";
import Loader from "@/components/shared/Loader";
import { fetchSingleProduct } from "@/store/singleProductSlice";
import { fetchProducts } from "@/store/productsSlice";
import StarRating from "@/components/shared/StarRating";
import { Heart, Repeat, Truck } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: singleProduct, status: singleStatus } = useSelector(
    (state) => state.singleProduct
  );
  const { data: products, status: allStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSingleProduct(id));
    dispatch(fetchProducts());
  }, [dispatch, id]);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCount, setSelectedCount] = useState(1);
  const colors = [
    "bg-red-400",
    "bg-blue-300",
    "bg-slate-700",
    "bg-green-800",
    "bg-violet-400",
    "bg-black",
    "bg-orange-300",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "2XL"];

  if (singleStatus === "loading" || allStatus === "loading" || !singleProduct)
    return <Loader />;
  if (singleStatus === "failed" || allStatus === "failed")
    return <NotFound404 />;

  const count = Math.floor(singleProduct.rating.rate);
  const availableColors = colors.slice(0, count);
  const availabeleSizes = sizes.slice(0, count);

  return (
    <>
      <section className="flex flex-col items-center w-7xl gap-y-16 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-[1fr_3fr_3fr] grid-rows-4 gap-4 size-10/12">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className={`col-start-1 col-span-1 row-span-1 `}>
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className=" bg-[#5c5c5c10] rounded-md p-5 object-contain w-full h-full"
              />
            </div>
          ))}
          <div className="col-start-2 col-span-1 row-start-1 row-span-4 w-md">
            <img
              src={singleProduct.image}
              alt={singleProduct.title}
              className=" bg-[#5c5c5c10] rounded-md p-5 object-contain w-full h-full"
            />
          </div>
          {console.log(singleProduct)}
          <div className="flex flex-col gap-2 items-start row-start-1 col-start-3 row-span-4 ml-12">
            <h3 className="font-medium text-2xl">{singleProduct.title}</h3>
            <StarRating
              ratingsNumber={singleProduct.rating.count}
              value={singleProduct.rating.rate}
            />
            <h5 className="text-xl">${singleProduct.price}</h5>
            <p>{singleProduct.description}</p>
            <div className="w-full bg-gray-400 h-[0.2px] my-5"></div>
            <div className="flex gap-4 h-10 ">
              <p>Colours:</p>
              {console.log(availableColors)}
              {availableColors.map((color, index) => (
                <button
                  key={index}
                  className={`w-5 h-5 rounded-full hover:cursor-pointer ${color}  ${
                    selectedColor === index ? "ring-2 ring-black" : ""
                  }`}
                  onClick={() => {
                    setSelectedColor(index);
                  }}
                ></button>
              ))}
            </div>
            <div className="flex gap-4 justify-center">
              Size:
              {availabeleSizes.map((size, index) => (
                <button
                  key={index}
                  className={`border-2 w-8 h-8 rounded-md hover:cursor-pointer ${
                    selectedSize === index
                      ? "bg-[#DB4444] text-white border-[#DB4444]"
                      : ""
                  } `}
                  onClick={() => {
                    setSelectedSize(index);
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex mt-4 gap-4 items-center">
              <div className="flex gap-7 border-[1px] font-medium rounded-md text-2xl items-center">
                <button
                  className="border-r-[1px] px-3 py-1 rounded-md hover:bg-[#DB4444] hover:text-white"
                  onClick={() => setSelectedCount(selectedCount + 1)}
                >
                  +
                </button>
                <div className="text-xl">{selectedCount}</div>
                <button
                  className="border-l-[1px] px-3 py-1 rounded-md hover:bg-[#DB4444] hover:text-white"
                  onClick={() =>
                    setSelectedCount(
                      selectedCount === 0 ? 0 : selectedCount - 1
                    )
                  }
                >
                  -
                </button>
              </div>
              <button className="bg-[#DB4444] text-white px-4 h-10 rounded-md w-28 hover:cursor-pointer">
                Buy Now
              </button>
              <button className="border-[1px] p-2 rounded-md hover:bg-[#DB4444] cursor-pointer hover:text-white">
                <Heart />
              </button>
            </div>
            <div className="flex flex-col mt-4 border-[1px] rounded-md py-5 px-3 font-medium">
              <div className="flex">
                <Truck size={40} />
                <p className="ml-4">
                  Free Delivery
                  <br />
                  <a href="" className="underline text-sm">
                    Enter your postal code for Delivery Availability
                  </a>
                </p>
              </div>
              <div className="w-full bg-gray-300 h-[1px] my-3"></div>
              <div className="flex">
                <Repeat size={30} />
                <p className="ml-5">
                  Return Delivery
                  <br />
                  <p className="text-sm">
                    Free 30 Days Delivery Returns.
                    <span className="pl-1 underline">Details</span>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <SectionModule
          title1="Related"
          products={products}
          sectionType="products"
        />
      </section>
    </>
  );
}
