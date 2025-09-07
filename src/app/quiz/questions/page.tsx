'use client'

import Fouter from "@/app/components/Fouter";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { quizQuestions } from "../quizData";


const QuizPage = () => {

  const [curentIndex, setCurentIndex] = useState(0)
  const [selected, setSelected] = useState(""); // track selected option
  const router = useRouter()
  const [score, setScore] = useState(0)
  const [widthValue, setWidthValue] = useState(20)

  const question = quizQuestions[curentIndex]

  // NEXT QUESTION
  const handleNext = () => {

    if(selected === question.answer){
        setScore(score + 1)
    }

    setSelected("");

    if(curentIndex + 1< quizQuestions.length){
        setCurentIndex(curentIndex + 1) 
        setWidthValue(widthValue + 20)
    } else{
        router.push(`/results?score=${score + (selected === question.answer ? 1 : 0)}`);
    }
  }

  // PREV QUESTION
  const handlePrev = () => {

    if(curentIndex >= 0){
        if(curentIndex - 1< quizQuestions.length){
            setCurentIndex(curentIndex - 1) 
            setWidthValue(widthValue - 20)
    }
    } else{
        router.push('/results')
    }
  }


  return (
    <div
      className="relative flex size-full bg-[#111714] min-h-screen flex-col dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      {/* Style on top */}
      <style type="text/tailwindcss">
        {`
          :root {
            --primary-color: #38e07b;
          }
        `}
      </style>

      <div className="flex h-full grow flex-col">
        <Navbar />

        {/* Main */}
        <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="w-full max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-white/80 text-lg font-medium leading-normal">
                Question {curentIndex + 1} of {quizQuestions.length}
              </p>
              <div className="mt-2 w-full bg-[#29382f] rounded-full h-2.5">
                <div
                  className="bg-[#38e07b] h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${widthValue}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-[#1a231d] p-8 rounded-2xl shadow-lg">
              <h2 className="text-white text-3xl font-bold leading-tight text-center mb-8">
                {question.question}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {question.options.map((answer) => (
                  <label
                    key={answer}
                    onClick={() => setSelected(answer)}
                    className={`flex items-center gap-4 rounded-xl border border-solid p-4 cursor-pointer transition-all hover:bg-[#29382f] ${
                      selected === answer
                        ? "border-[#38e07b] bg-[#29382f]"
                        : "border-[#3d5245]"
                    }`}
                  >
                    {/* Hidden radio input */}
                    <input
                      type="radio"
                      name="capital"
                      value={answer}
                      checked={selected === answer}
                      onChange={() => setSelected(answer)}
                      className="sr-only"
                    />

                    {/* Custom radio */}
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                        selected === answer
                          ? "border-[#38e07b]"
                          : "border-[#3d5245]"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 bg-[#38e07b] rounded-full transform transition-transform ${
                          selected === answer ? "scale-100" : "scale-0"
                        }`}
                      />
                    </div>

                    <span className="text-white text-lg font-medium">{answer}</span>
                  </label>
                ))}
              </div>

              <div className="flex justify-between mt-10">
                <button
                  onClick={handlePrev}
                  className="flex items-center cursor-pointer justify-center gap-2 rounded-full h-12 px-6 bg-[#29382f] text-white/80 hover:text-white text-lg font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={curentIndex === 0}
                >
                  <FaArrowLeft size={20} />
                  <span>Previous</span>
                </button>
                <button 
                  onClick={handleNext}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full h-12 px-6 bg-[#38e07b] text-[#111714] text-lg font-bold hover:bg-opacity-90 transition-opacity">
                  <span>
                    {curentIndex === 4 ? 'Finish' : 'Next'}
                  </span>
                  <FaArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </main>

        <Fouter />
      </div>
    </div>
  );
};

export default QuizPage;
