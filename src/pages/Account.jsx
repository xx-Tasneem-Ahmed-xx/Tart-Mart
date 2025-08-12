import React, { useState } from "react";

export default function Account() {
  const [selectedItem, setSelectedItem] = useState("My Profile");
  const user = JSON.parse(localStorage.getItem("token"));
  const [formValues, setFormValues] = useState({
    firstname: user.name.firstname || "",
    lastname: user.name.lastname || "",
    email: user.email || "",
    address: user.address || "",
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

  const profileChangesHandler = function (buttonType) {
    // 0 for cancel
    if (buttonType === 0) {
      setFormValues({
        firstname: user.name.firstname || "",
        lastname: user.name.lastname || "",
        email: user.email || "",
        address: user.address || "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
    // 1 for save changes
    if (buttonType === 1) {
      //TODO send to api new data and replace the ones in local storage
    }
  };
  return (
    <section className="w-7xl px-4 sm:px-8 lg:px-16">
      <h2 className="text-right">
        Welcome! <span className="text-[#DB4444]">{user.name.firstname}</span>
      </h2>
      <div className="flex gap-56">
        <div className="flex flex-col gap-3">
          {menu.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h4 key={index} className="font-medium ">
                {item.title}
              </h4>
              {item.subItems?.map((subItem, ind) => (
                <a
                  key={ind}
                  className={`hover:text-[#DB4444] hover:cursor-pointer pl-6 ${
                    selectedItem === subItem
                      ? "text-[#DB4444]"
                      : "text-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedItem(subItem);
                  }}
                >
                  {subItem}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="grid gap-x-10 gap-y-4 grid-cols-2 size-1/2 shadow-md p-5">
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
                  className={`p-4 rounded-md cursor-pointer ${
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
    </section>
  );
}
