import React, { useState } from "react";
import { LogIn, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Mood Tracker",
    "AI Therapist",
    "Quiz",
    "Anonymous Sharing",
    "About Us",
  ];

  return (
    <div className="flex justify-between items-center max-w-11/12 mx-auto mt-6 px-4 font-semibold">
      {/* Logo */}
      <div className="text-xl font-bold">Logo <span className='text-sm '>(স্যার আপনে একটা লোগো ঠিক করে দিতে পারেন)</span></div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex justify-center items-center gap-6">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-blue-500 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Login Button */}
      <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-blue-600">
        <p>Log in</p>
        <LogIn />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-transparent shadow-md md:hidden mb-11">
          <ul className="flex flex-col items-center gap-2 py-3">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-blue-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            ))}
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <p>Log in</p>
              <LogIn />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
