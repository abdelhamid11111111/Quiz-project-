'use client'
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FiXCircle } from "react-icons/fi";
import { LiaQuestionSolid } from "react-icons/lia";
import Fouter from "../components/Fouter";
import { GoHome } from "react-icons/go";
import { MdOutlineReplay } from "react-icons/md";
import Link from "next/link";
import { useSearchParams } from "next/navigation";





const QuizResults = () => {

  const searchParams = useSearchParams()
  const scoreParam = searchParams.get("score")

  // Convert safely
  const score = Number(scoreParam ?? 0);
  const total = 5

  const incorrect = total - score;

  const persontageScore = ( score / total ) * 100

  return (
    <div
      className="flex flex-col min-h-screen bg-[#111714] text-white"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      <Navbar/>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Quiz Results
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Great job! Here is how you did.
          </p>
        </div>

        {/* Score and Breakdown */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Score Circle */}
          <div className="bg-[#1a231d] rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="relative size-48">
              <svg
                className="size-full"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="stroke-gray-700"
                  cx="18"
                  cy="18"
                  fill="none"
                  r="16"
                  strokeWidth="3"
                />
                <circle
                  className="stroke-[#38e07b]"
                  cx="18"
                  cy="18"
                  fill="none"
                  r="16"
                  strokeDasharray={`${persontageScore} 100`}
                  strokeLinecap="round"
                  strokeWidth="3"
                  transform="rotate(-90 18 18)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-white">{persontageScore}%</span>
                <span className="text-gray-400">Score</span>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-[#1a231d] rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Performance Breakdown</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center size-12 rounded-full bg-green-500/10 mr-4">
                  <span className="material-symbols-outlined text-green-400">
                    <IoCheckmarkCircleOutline size={30}/>
                  </span>
                </div>
                <div>
                  <p className="font-semibold">Correct Answers</p>
                  <p className="text-2xl font-bold">{score}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center size-12 rounded-full bg-red-500/10 mr-4">
                  <span className="material-symbols-outlined text-red-400">
                    <FiXCircle size={30}/>
                  </span>
                </div>
                <div>
                  <p className="font-semibold">Incorrect Answers</p>
                  <p className="text-2xl font-bold">{incorrect}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center size-12 rounded-full bg-gray-500/10 mr-4">
                  <span className="material-symbols-outlined text-gray-400">
                    <LiaQuestionSolid size={30}/>
                  </span>
                </div>
                <div>
                  <p className="font-semibold">Total Questions</p>
                  <p className="text-2xl font-bold">{total}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Buttons */}
        <div className="mt-12 w-lg mx-auto flex flex-col sm:flex-row justify-center gap-4">
          <Link href={'/quiz/questions'}>
          <button className="flex-1 cursor-pointer inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-gray-950 bg-[#38e07b] focus:outline-none focus:ring-2 focus:ring-[var(--primary-400)] focus:ring-offset-2 focus:ring-offset-gray-950 transition-colors">
            <span className="material-symbols-outlined mr-2">
                <MdOutlineReplay size={30}/>
            </span>
            Retry Quiz
          </button>
          </Link>
          <Link href={'/'}>
          <button className="flex-1 cursor-pointer inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-[#1a231d] hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950 transition-colors">
            <span className="material-symbols-outlined mr-2">
                <GoHome size={30}/>
            </span>
            Return Home
          </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Fouter/>
    </div>
  );
};

export default QuizResults;
