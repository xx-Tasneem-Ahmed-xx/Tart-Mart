import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "@/components/shared/ProductCard";
import { fetchProducts } from "@/store/productsSlice";
import Loader from "@/components/shared/Loader";
export default function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading" || !products) return <Loader />;
  if (status === "failed") return <NotFound404 />;
  return (
    <>
      <div className="p-6 w-7xl">
        <h1 className="text-3xl font-medium mb-4">All Products</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
