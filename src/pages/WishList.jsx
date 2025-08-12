import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/store/productsSlice";
import SectionModule from "@/components/shared/SectionModule";

export default function WishList() {
  const wishlistItems = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  return (
    <section className="flex flex-col items-center w-9/12 gap-y-16 px-4 sm:px-8 lg:px-16">
      <div className="w-full">
        <div className="flex justify-between items-center font-medium">
          <h3>Wishlish ({wishlistItems.length})</h3>
          <button className="p-4 border-[2px] rounded-md cursor-pointer">
            Move All To Bag
          </button>
        </div>
        <SectionModule products={wishlistItems} sectionType="wishlist" />
      </div>
      <SectionModule
        title1="Just For You"
        products={products}
        sectionType="products"
        wishlist={true}
      />
    </section>
  );
}
