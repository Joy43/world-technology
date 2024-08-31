import React, { useState } from "react";
import { MdCategory, MdProductionQuantityLimits } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Homeiphonecard = ({ product }) => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleSeeDetailsClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { name, price, image, brand, rating, category, description, stock } = product;

  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
      <div className="relative h-64 w-full rounded-lg overflow-hidden">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <ClipLoader color="#4285F4" size={50} />
          </div>
        )}
        <img
          className={`h-full w-72 object-cover transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
          src={image}
          alt={name}
          onLoad={handleImageLoad}
        />
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h2>
         
        </div>
        {/* <div className="flex items-center">
            <MdCategory className="text-blue-800 text-lg" />
            <p className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">{brand}</p>
          </div> */}
        <div className="flex justify-between mt-2">
        
          <div className="flex justify-between ">
           <div> <p className="text-3xl font-extrabold text-blue-800">${price}</p></div>
            <div className="flex items-center ml-2">
              <p className="text-3xl font-extrabold text-blue-800">{rating}</p>
              <svg
                className="w-4 h-4 text-yellow-300 ml-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center text-center space-y-2 md:space-y-0 md:space-x-2">
        <NavLink to="/product">
          <button
            type="button"
            className="text-white font-semibold bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-800 transition-all duration-300"
          >
            Show All Products
          </button>
        </NavLink>
        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-800 transition-all duration-300"
          onClick={handleSeeDetailsClick}
        >
          See Details
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center transition-all duration-300">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform scale-95 opacity-0 transition-all duration-300 lg:p-8"
            style={{ transform: isModalOpen ? 'scale-100' : 'scale-95', opacity: isModalOpen ? 1 : 0 }}>
            <div className="mb-3 text-right">
              <button
                className="text-gray-50 hover:text-red-600 transition-all duration-300"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-x-4">
              <img className="aspect-square w-48 rounded-lg" src={image} alt={name} />
              <div>
                <h3 className="text-xl font-bold text-gray-50">{brand}</h3>
                <span className="text-xs text-gray-300">New location, USA</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-medium text-gray-200">{name}</h3>
              <div className="flex flex-wrap gap-2 text-sm font-medium mt-2">
                <span className="inline-block text-blue-500">{rating}</span>
                <span className="inline-block text-pink-500">Technology</span>
                <span className="inline-block text-yellow-500">${price}</span>
                <span className="inline-block text-blue-500">{brand}</span>
              </div>
              <div className="mt-2 text-sm text-gray-400">
                {description} this day offer
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium text-gray-50">Stock: {stock}</span>
              <a className="font-medium text-blue-500 transition-all duration-300 hover:text-blue-400">
                {category}
              </a>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={closeModal}
                type="button"
                className="focus:outline-none text-red-600 text-sm py-2.5 px-5 rounded-md border border-red-600 hover:bg-red-50 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homeiphonecard;
