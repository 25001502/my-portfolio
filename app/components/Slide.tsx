"use client";


import React from 'react'

const techStack = [
  'MySQL',
  'Git',
  'GitHub',
  'VS Code',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'PHP',
  'JavaScript',
  'Python',
  'HTML5',
  'CSS3',
  'SQL',
  'Next.js',
  'React.js',
  'Supabase',
  'Firebase',
  'Tailwind CSS',
  'Yii2',
  'CodeIgniter',
  'React Native',
    'Figma',
    'daisyUI',
]


const Slide = () => {

  const renderRow = (direction: 'left' | 'right') => {
    const animation =
      direction === 'right'
        ? 'animate-marquee-right'
        : 'animate-marquee-left'

    return (
     <>
        <style jsx global>{`
          @keyframes marquee-right {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes marquee-left {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .animate-marquee-right {
            animation: marquee-right 30s linear infinite;
          }

          .animate-marquee-left {
            animation: marquee-left 30s linear infinite;
          }
        `}</style>

        <div className="">
          <div
            className={`flex w-max gap-4 ${animation}`}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <span
                key={`${direction}-${tech}-${index}`}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </>
    )
  }



    return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff08_30%,transparent_31%),radial-gradient(circle_at_bottom_right,#ffffff08_30%,transparent_31%)] bg-size-[6em_6em]" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <p className="mb-2 text-sm text-[#FF3154] font-medium">Technologies</p>
        <h2 className="mb-12 text-4xl font-bold text-white">
          Tech Stack
        </h2>

        <div className="space-y-6">
          {renderRow('right')}
          {renderRow('left')}
        </div>
      </div>
    </section>
  )

}

export default Slide