import React from "react";
import Navbar from "../components/Navbar";
import Fouter from "../components/Fouter";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const StartQuiz = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#111714] text-white font-sans">
      {/* Header */}
      <Navbar/>
      
      {/* Main */}
      <main className="flex-grow flex items-start justify-center min-h-0 pt-18">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-full">

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-400)] to-[var(--primary-600)]">
            Ready to Test Your Knowledge?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Challenge yourself with our collection of fun and engaging quizzes.
            See how you rank on the leaderboard!
          </p>
          <div className="mt-10">
            <button className="group text-black inline-flex items-center justify-center rounded-full cursor-pointer bg-[#38e07b] transition-all duration-300 font-bold py-4 px-8 text-lg shadow-lg hover:shadow-[var(--primary-500)]/50 focus:outline-none focus:ring-4 focus:ring-[var(--primary-500)]/50">
              <Link href='/quiz/questions'>
                <span>Get Started</span>
              </Link>
              <span className="material-symbols-outlined ml-2 transition-transform duration-300 group-hover:translate-x-1">
                <FaArrowRight/>
              </span>
            </button>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Fouter/>
    </div>
  );
};

export default StartQuiz;