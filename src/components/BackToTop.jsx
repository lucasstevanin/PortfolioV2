import React from "react";

export default function BackToTop() {
  return (
    <a href="#home">
      <button className="relative left-[70%] top-7 w-[5rem] h-[8vh] rounded-lg bg-[#803cff] flex justify-center items-center">
        <svg
          className="rotate-180"
          width="20vw"
          height="2.5vh"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path d="M0 7 L 20 7 L 10 16" />
        </svg>
      </button>
    </a>
  );
}
