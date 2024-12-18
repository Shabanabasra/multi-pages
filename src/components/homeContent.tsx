import React from "react";

const HomeContent = () => {
  return (
    <section
      className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-start p-8"
      style={{ backgroundImage: "url('/images/car-hero.jpg')" }}
    >
      <h1 className="text-5xl font-extrabold mb-4">Welcome to Car World</h1>
      <p className="text-xl mb-6">Your one-stop shop for the best cars</p>
      <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-yellow-300">
        Shop Now
      </button>
    </section>
  );
};

export default HomeContent;
