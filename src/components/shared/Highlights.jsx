import React from "react";
export default function Highlights({ services, border = false }) {
  return (
    <section className="flex flex-wrap justify-around w-full items-center">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col gap-1 items-center rounded-md p-5 hover:bg-[#DB4444] group hover:shadow-md hover:text-white ${
            border ? "border-[1px]" : ""
          }`}
        >
          <div className="bg-[#7170734c] rounded-full w-fit p-2.5 mb-4 group-hover:bg-[#e5e2e25b]">
            <div className="bg-black rounded-full p-2 text-white group-hover:bg-white group-hover:text-black">
              {service.icon}
            </div>
          </div>
          <p className="font-bold text-xl">{service.title}</p>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
}
