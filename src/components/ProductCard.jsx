import React from 'react';

export default function ProductCard({ product, onClick }) {
  if (!product) return null;

  const { name, description, price, image, features = [] } = product;

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-4 h-[450px] cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image || '/assets/logo192.png'}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{name}</h3>
      <p className="text-gray-600 mb-2 text-center">{description}</p>
      <p className="text-gray-900 font-bold mb-4">₹{price}</p>

      {features.length > 0 && (
        <ul className="text-gray-700 list-disc list-inside mt-auto text-left w-full">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
