import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex justify-center flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
