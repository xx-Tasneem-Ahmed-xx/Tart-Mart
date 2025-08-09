import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Phone from "@/assets/images/phone.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(false);

  const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const signUpSchema = z
    .object({
      name: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(6),
      confirmPassword: z.string().min(6),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const formSchema = isSignIn ? signUpSchema : signInSchema;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: isSignIn
      ? {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }
      : {
          email: "",
          password: "",
        },
  });

  const onSubmit = (values) => {
    console.log("Form submitted with:", values);
    //TODO Handle sign-in logic here
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {!isSignIn && (
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Tamtam Anderson" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Confirm Password (Sign Up only) */}
              {!isSignIn && (
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
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
                    variant="destructive"
                    className="sm:w-full mr-4"
                  >
                    Sign up with google
                  </Button>
                  <p>
                    Already have an account?{" "}
                    <button
                      className="underline hover:cursor-pointer"
                      onClick={() => setIsSignIn(true)}
                    >
                      Log in
                    </button>
                  </p>
                </div>
              )}
            </form>
          </Form>
        </div>
      </section>
    </>
  );
}
