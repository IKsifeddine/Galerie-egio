import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Gallery = ({ data }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories from the data
  const categories = ["all", ...new Set(data.map((item) => item.category))];

  // Function to handle category selection
  // updates the selectedCategory state variable to the selected category.
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Filter data based on selected category
  const filteredData =
    selectedCategory === "all"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  // Handle click event to navigate to CardDetail
  const handleImageClick = (vehicleSrc) => {
    // Navigate to the CardDetail component with the image src in the URL
    navigate(`/card-detail?src=${encodeURIComponent(vehicleSrc)}`);
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <h1 className="text-4xl font-serif text-center py-8 text-blue-950">
        Welcome To Your Gallery🌌
      </h1>
      <div className="container mx-auto mb-8">
        
        {/* Render filter buttons */}



        <div className="flex justify-center mb-6 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-white ${
                category === selectedCategory ? "bg-blue-600" : "bg-blue-400"
              } hover:bg-blue-500 focus:outline-none`}
              onClick={() => handleCategorySelect(category)}
            >
              {/* Capitalize the first letter of the category name */}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>





        {/* Render filtered data */}
        {filteredData.map((category) => (
          <div key={category.category} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.vehicles.map((vehicle, index) => (
                <div
                  key={index} // Use the index as the key
                  className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => handleImageClick(vehicle.src)} // Use the vehicle's src for navigation
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={vehicle.src}
                      alt={vehicle.description}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-blue-400">
                      <p className="text-lg font-semibold text-center">
                        {vehicle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
