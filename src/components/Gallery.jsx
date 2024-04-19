import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Gallery = ({ data }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Define the number of images per page
  const imagesPerPage = 12;

  // Get unique categories from the data
  const categories = ["all", ...new Set(data.map((item) => item.category))];

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Reset current page to 1 when the category changes
    setCurrentPage(1);
  };

  // Filter data based on selected category
  const filteredData =
    selectedCategory === "all"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  // Calculate the indices for images to display on the current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredData
    .reduce((acc, category) => acc.concat(category.vehicles), [])
    .slice(indexOfFirstImage, indexOfLastImage);

  // Calculate the total number of images in the filtered data
  const totalImages = filteredData.reduce(
    (acc, category) => acc + category.vehicles.length,
    0
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  // Handle click event to navigate to CardDetail
  const handleImageClick = (vehicleSrc) => {
    navigate(`/card-detail?src=${encodeURIComponent(vehicleSrc)}`);
  };

  // Function to handle the previous page button click
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle the next page button click
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
              } hover:bg-blue-500 focus:outline-none transition-transform transform hover:scale-105`}
              onClick={() => handleCategorySelect(category)}
            >
              {/* Capitalize the first letter of the category name */}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Render current images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 p-4 md:grid-cols-3 gap-4">
          {currentImages.map((vehicle, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleImageClick(vehicle.src)}
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

        {/* Pagination controls */}
        {totalImages > imagesPerPage && (
          <div className="flex justify-center mt-8">
            <button
              className={`px-4 py-2 mr-2 rounded-lg ${
                currentPage > 1 ? "bg-blue-400" : "bg-gray-400"
              } text-white hover:bg-blue-500 focus:outline-none transition-transform transform hover:scale-105`}
              disabled={currentPage === 1}
              onClick={handlePrevPage}
            >
              Previous
            </button>
            <button
              className={`px-4 py-2 ml-2 rounded-lg ${
                currentPage < totalPages ? "bg-blue-400" : "bg-gray-400"
              } text-white hover:bg-blue-500 focus:outline-none transition-transform transform hover:scale-105`}
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <footer className="bg-blue-500 text-white py-4 text-center  bottom-0 w-full">
        <p className="font-semibold text-lg">&copy; 2024 Gallery</p>
      </footer>
    </div>
  );
};

export default Gallery;
