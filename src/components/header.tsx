import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-yellow-500 text-white p-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Car World</h1>
      <nav className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/cars" className="hover:underline">
          Cars
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <FaShoppingCart className="text-2xl" />
      </nav>
    </header>
  );
};

export default Header;