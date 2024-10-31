import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function productDetails() {
  const navigate = useNavigate();

  const handleButtonToBackPage = () => {
    navigate(-1);
  };

  const data = useLoaderData();
  console.log(data);
  const { image, pet_name, price, gender, pet_details } = data.petData;
  return (
    <div>
      <div className="card mx-auto bg-base-100 py-5 w-10/12 md:w-96 shadow-xl mb-8">
        <figure>
          <img className="h-60 w-full object-cover" src={image} alt="Photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {pet_name}</h2>
          <h2 className="text-gray-800">Pirce: ${price}</h2>
          <h2 className="text-gray-800">Gender: {gender}</h2>
          <h2 className="text-gray-500">Details: {pet_details}</h2>
          <div className="card-actions justify-center my-3">
            <Link>
              <button
                onClick={() => handleButtonToBackPage()}
                className="btn btn-primary"
              >
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
