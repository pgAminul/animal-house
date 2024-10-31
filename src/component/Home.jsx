import React from "react";
import "../app.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="header  ">
      <div className=" banner-bg h-[100vh] w-full  items-center flex justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-yellow-500">
            Welcome To Animal House
          </h2>
          <Link to={"/product"}>
            <button className="btn mt-10 btn-primary">
              Explore All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
