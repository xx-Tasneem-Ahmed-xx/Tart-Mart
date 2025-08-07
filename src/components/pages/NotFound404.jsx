import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Button } from "../ui/button";
export default function NotFound404() {
  return (
    <>
      <div className="text-center py-20 mb-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        {/* <Link to="/" className="text-blue-500 underline">
            Go back to Home
          </Link> */}

        <Button variant="destructive">Back to home page</Button>
      </div>
    </>
  );
}
