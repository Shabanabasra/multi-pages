import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white text-center py-6">
      <p className="text-lg">&copy; {new Date().getFullYear()} Car World. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
