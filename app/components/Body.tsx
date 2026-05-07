"use client";

import Image from "next/image";

const Body = () => {
  return (
    <section id="body"
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
            <p className="text-[#FF3154] text-sm font-medium mb-2 ">
              About Me
            </p>

            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Full Stack Developer
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Results-driven software engineer with five years of hands-on
                experience, bridging enterprise environments and high-impact
                freelance engagements. At Gradiate.co.za, I own development,
                maintenance, and technical rebranding initiatives for specific
                webs and mobile applications.
              </p>

              <p>
                My technical skillset covers React, Next.js, and React Native
                across web and mobile, complemented by Figma Designing including
                Firebase and Supabase for scalable backend architectures. I’ve
                delivered applications such as{" "}
                <a
                  href="https://gradiate.co.za"
                  className="underline decoration-indigo-500/40 text-white"
                >
                  Gradiate.
                </a>
              </p>

              <p>
                Self-taught programmer currently pursuing a BSc in Computer
                Sciences at UNIVEN, focusing on Software Engineering and
                Networking.
              </p>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold text-[#FF3154]">Experience</h3>
                <div className="flex gap-4 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 text-red mt-2 shrink-0 animate-pulse"></div>
                  <div>
                    <p className="font-medium text-white">Web Developer</p>
                    <p className="text-muted-foreground">
                      Gradiate • Jun 2024 – Present
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 text-red mt-2 shrink-0 animate-pulse"></div>
                  <div>
                    <p className="font-medium text-white">Full Stack Developer</p>
                    <p className="text-muted-foreground">
                      Next.Js  • Sep 2024 – Present
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 text-red mt-2 shrink-0 animate-pulse"></div>
                  <div>
                    <p className="font-medium text-white">Freelance Developer</p>
                    <p className="text-muted-foreground">
                      Self-Employed • 2022 – Present
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1 w-full max-w-xl animate-right">

            <div className="hover-3d cursor-none rounded-xl border-none  flex-1 w-full max-w-xl  mt-6 animate-fade-up border border-border">
              <div className="card rounded-xl">
                <figure className=" rounded-xl ">
                  <Image
                    src="https://cdn.dribbble.com/userupload/9602981/file/original-e6f9ef9e2c570d0d612b1775155a4d63.png"
                    alt="Next.js project preview"
                    width={1200}
                    height={675}
                    className="h-auto w-full rounded-xl"
                    unoptimized
                  />

                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Next.Js Project
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>I use Next.js to build fast, SEO-focused web applications using server-side rendering, static generation, and API routes.</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline rounded-xl">Top Skill</div>
                    <div className="badge badge-outline rounded-xl">Library</div>
                  </div>
                </div>
              </div>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>


            </div>


          </div>






        </div>
      </div>
    </section>
  );
};

export default Body;
