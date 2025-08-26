import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { XCircleIcon, CheckCircle2Icon } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      icon: <Phone />,
      title: "Call Us",
      description: "We are available 24/7, 7 days a week.",
      contactMethods: ["Phone: +8801611112222"],
    },
    {
      icon: <Mail />,
      title: "Write To Us",
      description: "Fill out our form and we will contact you within 24 hours.",
      contactMethods: [
        "Emails: customer@exclusive.com",
        "Emails: support@exclusive.com",
      ],
    },
  ];
  const inputs = [
    {
      type: "text",
      name: "name",
      placeholder: "Your Name",
      required: true,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Your Email",
      required: true,
    },
    {
      type: "number",
      name: "phonenumber",
      placeholder: "Your Phone",
      required: true,
    },
  ];
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("contactForm");
    return saved
      ? JSON.parse(saved)
      : { name: "", email: "", phonenumber: "", message: "" };
  });

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formData));
  }, [formData]);

  const [alert, setAlert] = useState({
    visible: false,
    bgColor: "bg-green-300",
    title: "",
    icon: <></>,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // TODO validation for required fields
      // TODO send data to API or backend here
      // TODO localStorage.removeItem("contactForm");
      console.log("Form submitted:", formData);
      setAlert({
        visible: true,
        bgColor: "bg-green-300",
        icon: <CheckCircle2Icon />,
        title: `Thank you for contacting us!`,
      });
    } catch (error) {
      setAlert({
        visible: true,
        bgColor: "bg-red-300",
        icon: <CheckCircle2Icon />,
        title: `Failed to update profile. ${error.message}`,
      });
    }
    setTimeout(() => {
      setAlert({ visible: false });
    }, 2000);
  };

  return (
    <section className="w-full flex flex-col gap-y-20  md:flex-row justify-around px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col shadow-lg p-5 rounded-lg">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex flex-col items-start gap-y-1 mb-12">
            <div className="flex items-center gap-x-3 mb-4">
              <div className="bg-[#DB4444] rounded-full p-2 text-white">
                {detail.icon}
              </div>
              <h3 className="font-medium text-xl">{detail.title}</h3>
            </div>
            <div>
              {detail.description}
              {detail.contactMethods.map((method, index) => (
                <p key={index}>
                  <br />
                  {method}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-3 gap-5 grid-rows-4 p-5 shadow-lg"
      >
        {inputs.map((input) => (
          <input
            key={input.name}
            id={input.name}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={formData[input.name]}
            onChange={handleChange}
            required={input.required}
            className={`p-3 leading-normal align-top focus:outline-none focus:ring-1 focus:ring-black rounded-md bg-[#F5F5F5] h-fit col-span-1`}
          />
        ))}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 bg-[#F5F5F5] col-span-3 row-span-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
        <button
          type="submit"
          className="bg-[#DB4444] h-fit p-3 text-white rounded-md hover:cursor-pointer col-start-3 hover:bg-[#db4444e3] transition"
        >
          Send Message
        </button>
      </form>
      <AnimatePresence>
        {alert.visible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-4"
          >
            <Alert className={`flex ${alert.bgColor} w-fit`}>
              {alert.icon}
              <AlertTitle>{alert.title}</AlertTitle>
              <button
                className="hover:cursor-pointer"
                onClick={() =>
                  setAlert({
                    visible: false,
                  })
                }
              >
                <XCircleIcon size={22} />
              </button>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
