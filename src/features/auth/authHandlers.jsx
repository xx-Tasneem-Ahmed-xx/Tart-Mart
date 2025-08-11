import axios from "axios";
import { CheckCircle2Icon, MessageSquareWarning } from "lucide-react";

const navigateHandler = function (user, navigate, setAlert, message) {
  localStorage.setItem("token", JSON.stringify(user));

  setAlert({
    visible: true,
    icon: <CheckCircle2Icon />,
    title: `${message} Welcome ${user.name.firstname}.`,
  });
  setTimeout(() => {
    navigate("/");
  }, 1500);
};

export const signInHandler = async (formData, navigate, setAlert) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/users");
    const allUsers = response.data;
    const user = allUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (!user) throw new Error("invalid credentials");
    navigateHandler(user, navigate, setAlert, "Signed in successfully!");
  } catch (error) {
    setAlert({
      visible: true,
      icon: <MessageSquareWarning />,
      title: `Error: ${error.message}.`,
    });
  }
};
export const signUpHandler = async (formData, navigate, setAlert) => {
  try {
    const { confirmPassword: _confirmPassword, name, ...user } = formData;
    user.name = {
      firstname: name.trim().split()[0],
      lastname: name?.trim().split()[1] || "",
    };
    const response = await axios.post("https://fakestoreapi.com/users", user);
    if (response.status !== 201) throw new Error(response.statusText);
    console.log(user);
    navigateHandler(user, navigate, setAlert, "Account created successfully!");
  } catch (error) {
    setAlert({
      visible: true,
      icon: <MessageSquareWarning />,
      title: `Error: ${error.message}.`,
    });
  }
};

export const onSubmitHandler = async (
  formData,
  isSignIn,
  navigate,
  setAlert
) => {
  isSignIn
    ? signInHandler(formData, navigate, setAlert)
    : signUpHandler(formData, navigate, setAlert);
};
