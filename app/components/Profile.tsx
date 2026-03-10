"use client";

import { useEffect } from "react";
import Image from "next/image";
import Stats from "./Stats";

export default function Profile() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "neon-cursor";
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <section
      id="profile"
      data-theme="black"
      className="min-h-screen bg-[radial-gradient(circle_at_top_left,#ffffff08_30%,transparent_31%),radial-gradient(circle_at_bottom_right,#ffffff08_30%,transparent_31%)] bg-size-[6em_6em]"
    >
      {/* Neon cursor */}
      <style jsx global>{`
        body {
          cursor: none;
        }
        .neon-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          pointer-events: none;
          z-index: 9999;
          background: rgba(99, 102, 241, 0.9);
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.9),
            0 0 20px rgba(99, 102, 241, 0.7), 0 0 40px rgba(99, 102, 241, 0.5);
          transform: translate(-50%, -50%);
          transition: transform 0.05s linear;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        .animate-fade-up {
          animation: fadeUp 4s ease-out both;
        }

        .animate-left {
          animation: slideLeft 3s ease-out both;
        }

        .animate-right {
          animation: slideRight 3s ease-out both;
        }

        .typing {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #8b5cf6;
          width: 0;
          animation: typing 2.2s steps(12, end) forwards,
            blink 0.8s step-end infinite;
        }
      `}</style>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-14">
          {/* LEFT COLUMN */}
          <div className="flex-1 text-center md:text-left animate-left">
            <div className="avatar flex justify-center md:justify-start mb-6 animate-fade-up relative">
              <div className="ring-primary ring-offset-indigo-500 rounded-full ring-2 w-35 ring-offset-2">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/my-univen-project.firebasestorage.app/o/gemini-2.5-flash-image_make_me_look_profetional_for_a_portfolio_profile_picture_and_make_the_suit_black-0.jpg?alt=media&token=7a85f9f2-d8cc-47f1-be49-7684677b2522"
                  alt="Thandululo Nengovhela profile picture"
                  width={140}
                  height={140}
                  className="rounded-full"
                />
              </div>

              {/* Right-side vertical stack */}
              <div className="flex flex-col items-center ml-6 ">
                <span className="btn btn-dash btn-sm text-indigo-500 rounded-full rotate-[0] mb-2 cursor-none ">
                  Available for work
                </span>

                <p className="text-neutral-400 text-sm ">
                  <span className="text-green-400 animate-pulse ">●</span> Based in South Africa 

                </p>
              </div>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight animate-fade-up ">
              Hi, I&apos;m Thandululo
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold animate-fade-up ">
              Nengovhela
            </h2>

            <p className="mt-4 text-xl md:text-2xl font-bold text-violet-600  ">
              Full Stack Developer
            </p>

            <span className="mt-6 max-w-xl mx-auto md:mx-0 text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
              <Stats />
            </span>

            <span className="max-w-xs text-sm  md:gap-4 lg:gap-6 grid-cols-5 ">
              <ul>
                <li className=" btn btn-sm border-b-indigo-500 cursor-none mr-1 text-white rounded-xl mt-6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                  React.Js
                </li>
                <li className=" btn btn-sm border-b-indigo-500 cursor-none mr-1 text-white rounded-xl mt-6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                  Next.Js
                </li>
                <li className=" btn btn-sm border-b-indigo-500 cursor-none mr-1 text-white rounded-xl mt-6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                  Figma
                </li>
                <li className=" btn btn-sm border-b-indigo-500 cursor-none mr-1 text-white rounded-xl mt-6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                  JAVA
                </li>
                <li className=" btn btn-sm border-b-indigo-500 cursor-none mr-1 text-white rounded-xl mt-6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                  Firebase
                </li>
              </ul>
            </span>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1 w-full max-w-xl animate-right">
            <div className="rounded-xl cursor-none border w-full border-border  bg-card/30 p-4 animate-pulse  animate-fade-up bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
              <a
                href="https://github.com/ThandululoNengovhela"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold block cursor-none"
              >
                @Thandululo-N
                <span className="ml-2 font-light font-mono text-neutral-500 text-sm">
                  • GitHub
                </span>
              </a>

              <Image
                src="https://ghchart.rshah.org/7c3aed/ThandululoNengovhela"
                alt="GitHub Contribution Graph"
                width={720}
                height={100}
                className="mt-4 w-full rounded-lg "
                unoptimized
              />
            </div>

            <div className="flex-1 w-full max-w-xl grid grid-cols-3 gap-4 mt-6 animate-fade-up">
              <div className="p-4 rounded-xl border border-border bg-card/30 text-center">
                <p className="text-2xl font-bold text-violet-600">4+</p>
                <p className="text-xs text-muted-foreground">Years Exp</p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/30 text-center">
                <p className="text-2xl font-bold text-violet-600">10+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/30 text-center ">
                <p className="text-2xl font-bold text-violet-600">1</p>
                <p className="text-xs text-muted-foreground">Company</p>
              </div>
            </div>

            <a className="hover-3d cursor-none rounded-xl border-indigo-600  flex-1 w-full max-w-xl  mt-6 animate-fade-up border border-border">
              {/* content */}
              <div className="card rounded-xl  border-white bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
                <div className="card-body ">
                  <div className="flex justify-between mb-10">
                    <div className="font-bold">QUALIFIED DEVELOPER</div>
                    <div className="text-5xl opacity-10">❁</div>
                  </div>
                  <div className="text-lg mb-4 opacity-40">
                    OWNER OF GRADIATE
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-xs opacity-20">
                        CERTIFICATE HOLDER
                      </div>
                      <div>NENGOVHELA T.</div>
                    </div>
                    <div>
                      <div className="text-xs opacity-20">FROM</div>
                      <div>25/06/2024</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8 empty divs needed for the 3D effect */}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
