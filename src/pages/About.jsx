import React from "react";
import {
  Store,
  CircleDollarSign,
  Gift,
  HandCoins,
  Truck,
  Headset,
  ShieldCheck,
} from "lucide-react";

import Girls from "@/assets/images/girls.png";
import Highlights from "@/components/shared/Highlights";
import StaffSection from "@/components/shared/StaffSection";
import Staff1 from "@/assets/images/staff1.png";
import Staff2 from "@/assets/images/staff2.png";
import Staff3 from "@/assets/images/staff3.png";
export default function About() {
  const serviceHighlights = [
    {
      icon: <Store size={30} />,
      title: "10.5k",
      description: "Sallers active our site",
    },
    {
      icon: <CircleDollarSign size={30} />,
      title: "33k",
      description: "Mopnthly Produduct Sale",
    },
    {
      icon: <Gift size={30} />,
      title: "45.5k",
      description: "Customer active in our site",
    },
    {
      icon: <HandCoins size={30} />,
      title: "25k",
      description: "Anual gross sale in our site",
    },
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
  const staff = [
    { image: Staff1, name: "Tom Hanks", title: "Founder & Chairman" },
    { image: Staff2, name: "Sandra Bullock", title: "Managing Director" },
    { image: Staff3, name: "Anthony Hopkins", title: "Product Designer" },
    { image: Staff1, name: "Tom Hanks", title: "Founder & Chairman" },
    { image: Staff2, name: "Sandra Bullock", title: "Managing Director" },
    { image: Staff3, name: "Anthony Hopkins", title: "Product Designer" },
  ];
  return (
    <section className="w-full flex flex-col items-center gap-y-36 px-4 sm:px-8 lg:px-0">
      <div className="flex flex-col-reverse md:flex-row w-full md:justify-end gap-x-28 items-center relative">
        <div className="w-full md:w-2/5 ">
          <h1 className="font-medium text-5xl mb-7">Our Story</h1>
          <p className="text-base leading-relaxed">
            Launced in 2025, Tart Mart is Africa’s premier online shopping
            makterplace with an active presense in Egypt. Supported by wide
            range of tailored marketing, data and service solutions, Tart Mart
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
            <br />
            <br />
            Tart Mart has more than 1 Million products to offer, growing at a
            very fast. Tart Mart offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img
          src={Girls}
          alt="two girls with shopping bags"
          className="w-full md:w-2/5"
        />
      </div>
      <div className="flex flex-col gap-y-36 lg:px-16 w-9/12">
        <Highlights services={serviceHighlights.slice(0, 4)} border={true} />
        <StaffSection staff={staff} />
        <Highlights services={serviceHighlights.slice(-3)} />
      </div>
    </section>
  );
}
