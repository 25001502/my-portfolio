"use client";

import { useEffect, useState } from "react";

const descriptions = [
  "I'm a Web developer building clean, responsive, high-performance applications. I use React and Next.js, turning designs into scalable code. With 4 years experience of delivering scalable solutions at a young age.",
  "I craft modern, efficient web applications that scale seamlessly. Skilled in React and Next.js, I turn concepts into maintainable code. Delivering robust solutions with four years of hands-on experience.",
  "Passionate about building fast, user-friendly web applications. I leverage React and Next.js to transform designs into reliable, scalable code. Four years of experience delivering impactful solutions at a young age."
];

export default function DescriptionRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % descriptions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-6 h-24 md:h-28 max-w-2xl mx-auto md:mx-0 ">
      {descriptions.map((text, i) => (
        <p
          key={i}
          className={`
            absolute inset-0
            transition-all duration-700 ease-in-out
            text-center md:text-left
            text-sm md:text-base
            text-muted-foreground font-semibold leading-relaxed 
            ${
              index === i
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
