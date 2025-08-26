import React, { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/store/productsSlice";
import Hero from "@/components/shared/Hero";
import SectionModule from "@/components/shared/SectionModule";
import Speaker from "@/assets/images/speaker.png";
import Highlights from "@/components/shared/Highlights";
import { Truck, Headset, ShieldCheck } from "lucide-react";

export default function Home() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  const serviceHighlights = [
    {
      icon: <Truck size={30} />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <Headset size={30} />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
    },
  ];
  return (
    <>
      <section className="flex flex-col items-center w-7xl gap-y-16 px-4 sm:px-8 lg:px-16">
        <Hero />
        <SectionModule
          products={products}
          index={0}
          title1="Today's"
          title2="Flash Sale"
          timer={true}
          sale={true}
          sectionType="products"
        />
        <SectionModule
          products={products}
          categories={categories}
          title1="Categories"
          title2="Browse By Category"
          timer={false}
          sectionType="category"
        />
        <SectionModule
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
        <SectionModule
          products={products}
          index={12}
          title1="Our Products"
          title2="Explore Our Products"
          sectionType="products"
        />
        <SectionModule
          products={products}
          index={12}
          title1="Featured"
          title2="New Arrival"
          sectionType="Featured"
        />
        <Highlights services={serviceHighlights} />
      </section>
    </>
  );
}
