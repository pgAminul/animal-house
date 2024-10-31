import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import ProductDetails from "./ProductDetail";
import Navbar from "./Navbar";
import axios from "axios";

function AppRouter() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://openapi.programming-hero.com/api/peddy/pets";
        const res = await axios.get(url);
        setData(res.data.pets);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/product",
      loader: async () => data,
      element: (
        <>
          <Navbar />
          <Product />
        </>
      ),
    },
    // {
    //   path: "/details/:userId",
    //   loader: async ({ params }) => {
    //     const url = `https://openapi.programming-hero.com/api/peddy/pet/${params.userId}`;
    //     const res = await axios.get(url);
    //     return res.data.pets;
    //   },
    //   element: (
    //     <>
    //       <Navbar />
    //       <ProductDetails />
    //     </>
    //   ),
    // },

    {
      path: "/user/:UserId",
      loader: ({ params }) =>
        fetch(
          `https://openapi.programming-hero.com/api/peddy/pet/${params.UserId}`
        ),
      element: <ProductDetails></ProductDetails>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRouter;
