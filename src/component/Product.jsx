import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Product() {
  const data = useLoaderData();
  return (
    <div className="my-8">
      <div className=" md:px-10 grid  md:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
        {data.map((d) => {
          const { petId, pet_name, image } = d;
          return (
            <div key={petId} className="card bg-base-100  shadow-xl">
              <figure>
                <img
                  className="h-60 w-full object-cover"
                  src={image}
                  alt="Photo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{pet_name}</h2>
                <div className="card-actions justify-end">
                  <Link to={`/user/${petId}`}>
                    <button className="btn btn-primary">
                      See More Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
