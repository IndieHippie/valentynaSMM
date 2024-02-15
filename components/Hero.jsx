import React from "react";
import Link from "next/link"; // Import Link from Next.js
import { FaTelegramPlane } from "react-icons/fa";

const Hero = ({ heading, message }) => {
  const handleBookClick = () => {
    // Handle the click event here if needed
  };

  return (
    <div className="flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <div>
          <h2 className="text-5xl font-bold">{heading}</h2>
          <p className="py-5 text-xl">{message}</p>
        </div>

        {/* Wrap the button with Link */}
        <Link href="https://t.me/slavinskaofficiall">
          <a
            className="inline-flex items-center px-4 py-2 border hover:border-blue-500 hover:text-blue-500 duration-500"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBookClick}
          >
            <span className="mr-2">Book</span>
            <FaTelegramPlane />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
