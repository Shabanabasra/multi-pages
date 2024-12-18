import React from "react";

const About = () => {
  return (
    <section
      className="h-screen bg-cover bg-center text-white flex items-center p-8"
      style={{ backgroundImage: "url('/images/about-car.jpg')" }}
    >
      <div className="bg-yellow-500 bg-opacity-80 p-8 rounded-lg max-w-lg text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg leading-relaxed">
          Welcome to Car World, where every car is more than just a
          vehicle—it&apos;s a symbol of luxury, performance, and design. Our
          mission is to curate a premium selection of top-tier cars from around
          the globe. Whether you&apos;re a car enthusiast or simply seeking
          elegance and speed, we&apos;ve got you covered.
        </p>
      </div>
    </section>
  );
};

export default About;
