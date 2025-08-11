import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { signInSchema, signUpSchema } from "@/features/auth/authSchema";
import { onSubmitHandler } from "@/features/auth/authHandlers";
import Phone from "@/assets/images/phone.png";
import { XCircleIcon } from "lucide-react";
import GoogleIcon from "@/assets/icons/google.svg?react";

export default function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [alert, setAlert] = useState({
    visible: false,
    title: <></>,
    icon: "",
  });

  const formSchema = isSignIn ? signInSchema : signUpSchema;
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: isSignIn
      ? {
          email: "",
          password: "",
        }
      : {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
  });
  const handleToggleForm = () => {
    form.reset();
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <section className="flex flex-col gap-y-6 sm:gap-y-0 sm:flex-row flex-wrap justify-start my-5 gap-x-10 sm:gap-x-64 ">
        <img
          src={Phone}
          alt="phone resting on a shopping cart"
          className="w-3/4 sm:w-6/12"
        />

        <div className="flex flex-col self-center justify-start gap-y-7 sm:w-1/5">
          <div>
            <h1 className="font-semibold text-3xl mb-2">
              {isSignIn ? "Log in to Tart Mart" : "Create an account"}
            </h1>
            <p>Enter your details below</p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((values) =>
                onSubmitHandler(values, isSignIn, navigate, setAlert)
              )}
              className="space-y-4"
            >
              {!isSignIn && (
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!isSignIn && (
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {isSignIn && (
                <div>
                  <Button
                    type="submit"
                    variant="destructive"
                    className="w-1/2 mr-4"
                  >
                    Log In
                  </Button>
                  <a className="text-[#E7000B]" href="">
                    Forgot Password?
                  </a>
                </div>
              )}
              {!isSignIn && (
                <div className="flex flex-col gap-y-4 items-center">
                  <Button
                    type="submit"
                    variant="destructive"
                    className="w-full mr-4"
                  >
                    Create Account
                  </Button>
                  <Button
                    type="submit"
                    variant="secondary"
                    className="sm:w-full mr-4"
                  >
                    <GoogleIcon />
                    Sign up with google
                  </Button>
                  <p>
                    Already have an account?{" "}
                    <button
                      className="underline hover:cursor-pointer"
                      onClick={() => handleToggleForm()}
                    >
                      Log in
                    </button>
                  </p>
                </div>
              )}
            </form>
          </Form>
          {alert.visible && (
            <Alert className=" flex fixed top-0 right-0 bg-green-300 w-fit">
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
          )}
        </div>
      </section>
    </>
  );
}
