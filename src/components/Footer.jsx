import React from "react";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <>
      <BackToTop />
      <div className="p-8 px-8 bg-black -bottom-1">
        <div className="text-center text-white font-Roboto xl:text-[1vw]">
          <p>
            &#169; Criado e desenvolvido por{" "}
            <span className="underline underline-offset-2">Lucas Stevanin</span>{" "}
            - 2023 🌌
          </p>
        </div>
      </div>
    </>
  );
}
