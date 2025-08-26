import React, { useState } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XCircleIcon, CheckCircle2Icon } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
export default function Account() {
  const [selectedItem, setSelectedItem] = useState("My Profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [alert, setAlert] = useState({
    visible: false,
    bgColor: "bg-green-300",
    title: "",
    icon: <></>,
  });
  const user = JSON.parse(localStorage.getItem("token"));
  const [formValues, setFormValues] = useState({
    firstname: user.name.firstname || "",
    lastname: user.name.lastname || "",
    email: user.email || "",
    address: [user.address.city, user.address.street].join(", ") || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const menu = [
    {
      title: "Manage My Account",
      subItems: ["My Profile", "Address Book", "My Payment Options"],
    },
    {
      title: "My Orders",
      subItems: ["My Returns", "My Cancellations"],
    },
    { title: "My WishList" },
  ];
  const inputs = [
    {
      type: "text",
      name: "firstname",
      label: "First Name",
      placeholder: "",
      readOnly: false,
    },
    {
      type: "text",
      name: "lastname",
      label: "Last Name",
      placeholder: "",
      readOnly: false,
    },
    {
      type: "email",
      name: "email",
      label: "Email",
      placeholder: "",
      readOnly: true,
    },
    {
      type: "text",
      name: "address",
      label: "Address",
      placeholder: "Country, City, Street",
      readOnly: false,
    },
    {
      type: "password",
      name: "currentPassword",
      label: "Password Changes",
      placeholder: "Current Password",
      readOnly: false,
    },
    {
      type: "password",
      name: "newPassword",
      placeholder: "New Password",
      readOnly: false,
    },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      readOnly: false,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const cleanForm = function (updateduser = user) {
    setFormValues({
      firstname: updateduser.name.firstname || "",
      lastname: updateduser.name.lastname || "",
      email: updateduser.email || "",
      address:
        [updateduser.address.city, updateduser.address.street].join(", ") || "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const profileChangesHandler = async function (buttonType) {
    // 0 for cancel
    if (buttonType === 0) {
      cleanForm();
    }
    // 1 for save changes
    if (buttonType === 1) {
      try {
        if (
          formValues.newPassword !== formValues.confirmPassword ||
          (formValues.currentPassword &&
            formValues.newPassword &&
            user.password !== formValues.currentPassword)
        ) {
          throw new Error("Passwords don't match");
        }
        const [city, street] = (formValues.address || "")
          .split(", ")
          .map((s) => s.trim());
        const updatedUser = {
          ...user,
          name: {
            firstname: formValues.firstname,
            lastname: formValues.lastname,
          },
          address: {
            ...user.address,
            city: city || user.address.city,
            street: street || user.address.street,
          },
          password: formValues.newPassword
            ? formValues.newPassword
            : user.password,
        };
        localStorage.setItem("token", JSON.stringify(updatedUser));

        await axios.put(
          `https://fakestoreapi.com/users/${user.id}`,
          updatedUser
        );
        setAlert({
          visible: true,
          bgColor: "bg-green-300",
          icon: <CheckCircle2Icon />,
          title: `Profile updated successfully.`,
        });
        cleanForm(updatedUser);
      } catch (error) {
        setAlert({
          visible: true,
          bgColor: "bg-red-300",
          icon: <CheckCircle2Icon />,
          title: `Failed to update profile. ${error.message}`,
        });
        cleanForm();
      }
      setTimeout(() => {
        setAlert({ visible: false });
      }, 2000);
    }
  };
  const generateMenu = function () {
    return menu.map((item, index) => (
      <div key={index} className="flex flex-col gap-2 mb-4">
        <h4 className="font-medium">{item.title}</h4>
        {item.subItems?.map((subItem, ind) => (
          <a
            key={ind}
            className={`hover:text-[#DB4444] cursor-pointer pl-4 ${
              selectedItem === subItem ? "text-[#DB4444]" : "text-gray-500"
            }`}
            onClick={() => {
              setSelectedItem(subItem);
              setSidebarOpen(false);
            }}
          >
            {subItem}
          </a>
        ))}
      </div>
    ));
  };
  return (
    <section className="w-7xl px-4 sm:px-8 lg:px-16">
      <button
        className="md:hidden hover:cursor-pointer"
        onClick={() => setSidebarOpen(true)}
      >
        <MenuIcon />
      </button>

      {sidebarOpen && (
        <aside className="fixed inset-0 z-50 md:hidden">
          <div className="bg-white w-64 h-full p-4 shadow-lg flex flex-col">
            <button className="self-end" onClick={() => setSidebarOpen(false)}>
              <XCircleIcon />
            </button>
            {generateMenu()}
          </div>
        </aside>
      )}

      <h2 className="text-right mb-10">
        Welcome! <span className="text-[#DB4444]">{user.name.firstname}</span>
      </h2>

      <div className="flex gap-10">
        <div className="hidden md:flex md:flex-col lg:gap-3 w-1/3">
          {generateMenu()}
        </div>
        <div className="w-full md:w-3/4 grid gap-x-10 gap-y-4 grid-cols-2 shadow-md p-5">
          <h3 className="font-medium text-[#DB4444] text-2xl col-span-2">
            Edit Your Profile
          </h3>
          {inputs.map((input, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                input.type === "password" ? "col-span-2 gap-3" : "col-span-1"
              } `}
            >
              {input.label && <label htmlFor={input.name}>{input.label}</label>}

              <input
                type={input.type}
                name={input.name}
                className="bg-[#F5F5F5] rounded-md p-2"
                placeholder={input.placeholder}
                value={formValues[input.name] || ""}
                onChange={handleChange}
                readOnly={input.readOnly}
              />
            </div>
          ))}
          <div className="flex justify-end col-span-2 w-full">
            {Array(2)
              .fill(null)
              .map((_, index) => (
                <button
                  key={index}
                  className={`p-1 md:p-3 rounded-md cursor-pointer ${
                    index === 1 ? "bg-[#DB4444] text-white w-4/12" : ""
                  }`}
                  onClick={() => profileChangesHandler(index)}
                >
                  {index === 0 ? "Cancel" : "Save Changes"}
                </button>
              ))}
          </div>
        </div>
      </div>
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
