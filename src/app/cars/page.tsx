import React from "react";
import Image from "next/image";

const Cars = () => {
  const carData = [
    {
      id: 1,
      name: "Lamborghini Aventador",
      price: 393000,
      desc: "Supercar with stunning performance",
      img: "/images/aventador.jpg",
    },
    {
      id: 2,
      name: "Ferrari Roma",
      price: 222000,
      desc: "Elegance meets performance",
      img: "/images/roma.jfif",
    },
    {
      id: 3,
      name: "Bugatti Chiron",
      price: 3000000,
      desc: "A masterpiece of speed and luxury",
      img: "/images/chiron.jpg",
    },
    {
      id: 4,
      name: "Porsche 911 Turbo S",
      price: 220000,
      desc: "Iconic sports car",
      img: "/images/911.jfif",
    },
    {
      id: 5,
      name: "McLaren 720S",
      price: 299000,
      desc: "A supercar that delivers thrilling performance",
      img: "/images/mclaren-720s.webp",
    },
    {
      id: 6,
      name: "Aston Martin DB11",
      price: 205000,
      desc: "Luxury grand tourer with timeless design",
      img: "/images/aston-martin-db11.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {carData.map((car) => (
        <div
          key={car.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        >
        
          <Image
            src={car.img}
            alt={car.name}
            width={500}
            height={300}
            className="object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{car.name}</h3>
            <p className="text-gray-600">{car.desc}</p>
            <div className="text-yellow-500 font-bold text-lg mt-2">
              ${car.price.toLocaleString()}
            </div>
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cars;
