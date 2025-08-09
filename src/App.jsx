import React from "react";
import MainLayout from "./components/layout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "@/routes";

export default function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              ></Route>
            ))}
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}
