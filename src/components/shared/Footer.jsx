import React from "react";
import { Input } from "../ui/input";
import SendIcon from "@/assets/icons/send.svg?react";
import GoogleIcon from "@/assets/icons/googleplay.svg?react";
import AppleStoreIcon from "@/assets/icons/applestore.svg?react";
import QrCode from "@/assets/icons/qrcode.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";
import TwitterIcon from "@/assets/icons/twitter.svg?react";
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import LinkedInIcon from "@/assets/icons/linkedin.svg?react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-4 py-16 mt-20">
      <div className="flex flex-col content-center md:flex-row gap-6 flex-wrap justify-around ">
        <section className="flex flex-col justify-center self-start gap-y-2">
          <h3 className="text-xl font-medium mb-4">Exclusive</h3>
          <p className="text-l font-medium">Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="relative w-full max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              className="pr-12"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800">
              <SendIcon className="h-5 w-5" />
            </button>
          </div>
        </section>
        <section className="flex flex-col justify-center self-start gap-y-2">
          <h3 className="text-xl font-medium mb-4">Support</h3>
          <p>
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <a>exclusive@gmail.com</a>
          <a>+88015-88888-9999</a>
        </section>
        <section className="flex flex-col justify-center self-start gap-y-2">
          <h3 className="text-xl font-medium mb-4">Account</h3>
          <a>My Account</a>
          <a>Login / Register</a>
          <a>Cart</a>
          <a>Wishlist</a>
          <a>Shop</a>
        </section>
        <section className="flex flex-col justify-center self-start gap-y-2">
          <h3 className="text-xl font-medium mb-4">Quick Link</h3>
          <a>Privacy Policy</a>
          <a>Terms Of Use</a>
          <a>FAQ</a>
          <a>Contact</a>
        </section>
        <section className="flex flex-col justify-center self-start gap-y-2">
          <h3 className="text-xl font-medium mb-4">Download App</h3>
          <p className="text-[#FAFAFA] font-light">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-x-1.5 items-center sm:-mt-8">
            <QrCode className="md:relative md:right-4" />

            <div>
              <GoogleIcon className="-mb-16" />
              <AppleStoreIcon />
            </div>
          </div>
          <div className="flex gap-x-10 ">
            <FacebookIcon className="-mt-1 -mr-3.5" />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </section>
      </div>
      <hr className="mt-10 border-[#F9F9F933]" />
      <p className="text-[#F9F9F933] text-center mt-8">
        ©️ Copyright Rimel {new Date().getFullYear()}. All rights reserved
      </p>
    </footer>
  );
}
