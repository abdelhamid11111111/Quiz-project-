import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-gray-950/70 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <svg
              className="h-8 w-8 text-[#4ade8a]"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_330)">
                <path
                  clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_330">
                  <rect fill="white" height="48" width="48" />
                </clipPath>
              </defs>
            </svg>
            <h2 className="text-xl text-white font-bold">Quiz App</h2>
          </div>

          {/* Nav (centered) */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8">
            <Link
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              href="/quiz"
            >
              Quizze
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
