import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
export default function NotFound404() {
  return (
    <>
      <div className="text-center py-20 mb-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to={"/"}>
          <Button variant="destructive" className="hover:cursor-pointer">
            Back to home page
          </Button>
        </Link>
      </div>
    </>
  );
}
