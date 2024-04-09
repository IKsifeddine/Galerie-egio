import React from "react";

const Gallery = ({ data }) => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-serif text-center py-8 text-blue-600">Welcome To Your Gallery🪐</h1>
        <div className="container mx-auto">
          {data.map((category) => (
            <div key={category.category} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.vehicles.map((vehicle) => (
                  <div key={vehicle.src} className="transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img
                        src={vehicle.src}
                        alt={vehicle.description}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4  bg-blue-400">
                        <p className="text-lg font-semibold text-center">{vehicle.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
