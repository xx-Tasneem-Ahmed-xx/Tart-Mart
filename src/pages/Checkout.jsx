import React, { useState } from "react";
import CheckoutProduct from "@/components/shared/CheckoutProduct";
import BkashIcon from "@/assets/icons/bkash.svg?react";
import VisaIcon from "@/assets/icons/visa.svg?react";
import MasterCardIcon from "@/assets/icons/masterCard.svg?react";
import PriceSummary from "@/components/shared/PriceSummary";
export default function Checkout() {
  const inputs = [
    {
      type: "text",
      name: "firstname",
      label: "First Name",
    },
    {
      type: "text",
      name: "companyname",
      label: "Company Name",
    },
    {
      type: "text",
      name: "streetaddress",
      label: "Street Address",
    },
    {
      type: "text",
      name: "apartment",
      label: "Apartment, floor, etc.(optional)",
    },
    {
      type: "text",
      name: "city",
      label: "Town/City",
    },
    {
      type: "number",
      name: "phonenumber",
      label: "Phone Number",
    },
    {
      type: "email",
      name: "email",
      label: "Email",
    },
    {
      type: "checkbox",
      name: "checkbox",
      label: "Save this information for faster check-out next time",
    },
    { type: "text", name: "coupon", placeholder: "Coupon Code" },
    {
      type: "radio",
      name: "payment",
      label: "Bank",
    },
    {
      type: "radio",
      name: "payment",
      label: "Cash on delivery",
    },
  ];
  const details = [
    { title: "Subtotal:", value: "150" },
    { title: "Shipping:", value: "50" },
    { title: "Total:", value: "200" },
  ];
  const [formValues, setFormValues] = useState({
    firstname: "",
    companyname: "",
    email: "",
    streetaddress: "",
    city: "",
    phonenumber: "",
    apartment: "",
    checkbox: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="w-9/12 gap-y-16 px-4 sm:px-8 lg:px-16">
      <h3 className="font-medium text-2xl mb-10">Billing Details</h3>
      <div className="flex justify-between w-full">
        <div className="flex flex-col ">
          {inputs.slice(0, -3).map((input, index) =>
            input.type === "checkbox" ? (
              <div key={index} className="flex items-center gap-2 my-2">
                <input
                  type="checkbox"
                  name={input.name}
                  checked={formValues[input.name] || false} // use checked for checkbox
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      [input.name]: e.target.checked, // use checked not value
                    }))
                  }
                  className="w-4 h-4 accent-[#db4444] "
                />
                <label htmlFor={input.name} className="text-gray-600">
                  {input.label}
                </label>
              </div>
            ) : (
              <div key={index} className="flex flex-col mb-4">
                <label htmlFor={input.name} className="text-gray-600 mb-1">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  name={input.name}
                  className="bg-[#F5F5F5] rounded-md p-2"
                  value={formValues[input.name] || ""}
                  onChange={handleChange}
                />
              </div>
            )
          )}
        </div>

        <div className="flex flex-col w-1/3 gap-y-4">
          {/* TODO: MAP ON each product in cart */}
          <CheckoutProduct />
          <PriceSummary details={details} />
          {inputs.slice(-2).map((input, index) => (
            <div key={index} className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <input
                  type={input.type}
                  name={input.name}
                  value={formValues[input.name] || ""}
                  onChange={handleChange}
                  className="accent-black size-5"
                />
                <label htmlFor={input.name} className="pl-3">
                  {input.label}
                </label>
              </div>
              {input.label === "Bank" ? (
                <div className="flex gap-x-2">
                  <BkashIcon />
                  <VisaIcon />
                  <MasterCardIcon />
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
          <div className="flex gap-x-2">
            <input
              type={inputs[8].type}
              name={inputs[8].name}
              placeholder={inputs[8]?.placeholder}
              className="rounded-md p-2 border-black border-1 w-3/5"
            />
            <button className="w-2/5 bg-[#db4444] rounded-sm p-2 text-white hover:cursor-pointer">
              Apply Coupon
            </button>
          </div>
          <button className="self-start bg-[#db4444] rounded-sm text-white w-1/2 p-2 mt-3 hover:cursor-pointer">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}
