import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CardDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const imageSrc = queryParams.get("src");

  // Check if the imageSrc is correctly decoded and if the file exists
  const isValidImageSrc =
    imageSrc &&
    imageSrc.startsWith("/") &&
    imageSrc.match(/\/assets\/[a-zA-Z0-9._-]+\.(jpg|jpeg|png|gif)$/i);

  // Function to handle the button click to navigate back to the gallery
  const handleBackToGallery = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-300">
      {/* Button to return to the gallery */}
      <div className="w-full text-left p-4 mt-3">
        <button
          onClick={handleBackToGallery}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          ← Back to Gallery
        </button>
      </div>

      {/* Image display */}
      <div className="flex justify-center items-center flex-grow">
        {isValidImageSrc ? (
          <img
            src={imageSrc}
            alt="Full size"
            className="w-full h-full object-contain rounded-lg shadow-lg"
            onError={(e) => (e.target.src = "/path-to-default-image.jpg")}
          />
        ) : (
          <div className="text-white">Image not found.</div>
        )}
      </div>
    </div>
  );
};

export default CardDetail;
