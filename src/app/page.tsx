import React from "react";
import Navbar from "./components/Navbar";
import Fouter from "./components/Fouter";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111714] dark group/design-root "
      style={
        {
          fontFamily: '"Spline Sans", "Noto Sans", sans-serif',
          "--select-button-svg": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' fill='rgb(158,183,168)' viewBox='0 0 256 256'%3e%3cpath d='M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z'%3e%3c/path%3e%3c/svg%3e")`,
        } as React.CSSProperties & Record<string, string>
      }
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <Navbar/>

        {/* Main */}
        <main className="flex-1 px-10 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-white tracking-tight text-5xl font-bold leading-tight pb-4">
                Welcome to the Ultimate Quiz Challenge
              </h1>
              <p className="text-white/70 text-lg font-normal leading-normal max-w-2xl mx-auto">
                Test your knowledge across various categories and difficulty
                levels. Choose your challenge and start the quiz!
              </p>
            </div>

            {/* Quiz Selection */}
            <div className=" rounded-2xl p-8 w-[18rem] mx-auto ">
              <button className="w-full flex items-center cursor-pointer justify-center rounded-full h-14 px-6 bg-[#38e07b] text-[#111714] text-lg font-bold hover:opacity-90 transition-opacity">
                <Link href='/quiz/questions'>
                  <span className="truncate">Start Quiz</span>
                </Link>
              </button>
            </div>

            {/* Featured Quizzes */}
            <div className="mt-20">
              <h2 className="text-white text-3xl font-bold tracking-tight mb-8 text-center">
                Or try our Featured Quizzes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "General Knowledge",
                    desc: "Test your general knowledge with a wide range of questions.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ2BUVmEmElMd8miB_Ezd19Fg69YP9Xd_MHHibxI3dmWj9HBuowApdG5Imvjx44Zo-b1yiNzCqmxuD9LUeUwx-ehU8MgGGpLaItBQISKvsz9PTh3a3eYtKkJRtBGRp6sSzDM169qpq_mAMuk-cZ_zqLjcyrekgHzhw06z4GMmWXemuQ_lpkyTu7_4oGal_u42gQqQXygCfym9HmTbRfe59gtsKNuVjeaeVXdx7MfsVUsJks35h0f-o8qvmsxVmrYfHv_emNPppn-bA",
                  },
                  {
                    title: "Science & Nature",
                    desc: "Explore the wonders of science and the natural world.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzl1WND-Gf_vRD_caQxhTQjk1E1lW1MxKz6ZRxGZWFHlt1sgmXAtQU44MmvOQiqm5bXWl1KAoMUdAs8zY-Bmdyy4_5Mao8DwINL99s33GQOBh5kbRNbDUeJJ1EAR0bBS9a4JmKBrUmgTsQEBGLKQ9ZSXthSXbH1EFpIONPnqjhyD22MLI_sbNv3mi2gWpEb3rSXgEZhBQX5Fr9eJ_7Aly264mkcR4JlipgCuEJiSvXKjezIMlLX06tfKvx2Dphw9kkXAw0oAaMS7Lt",
                  },
                  {
                    title: "History",
                    desc: "Journey through time with questions about historical events.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXfqIddz3kEeUU4AzttFWpsMtfmrngUx3Yi8nHvTeKKRZzeDaFGp70fIH10D02z3rEd1sKvAkoXBgbhNCwNim_3VI41UFwxf1Cm1xXJDGjfW350zuxrCi_VAcLYtqiHJRx5DFrzG30KyEYBwFzhwcXTbkmsh2G2TVemgBtkwL_gGQOYLprvZ_jVuK4tB2WRuOnZuadXV2COW467LvUeNIjVC8tJaAzQQ50LUAG7VXQ1_nM0tU4rh_0fn4gEtR4ffO1kgy06H2BbVLu",
                  },
                ].map((quiz, i) => (
                  <div key={i} className="flex flex-col gap-4 rounded-xl group">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col overflow-hidden transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url("${quiz.img}")` }}
                    />
                    <div className="text-center">
                      <p className="text-white text-lg font-semibold">
                        {quiz.title}
                      </p>
                      <p className="text-white/60 text-sm">{quiz.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <Fouter/>
      </div>
    </div>
  );
}
