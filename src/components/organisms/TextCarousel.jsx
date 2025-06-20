import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Button from "../atoms/Button";
import SocialMedia from "./SocialMedia";

const TextCarousel = () => {
  return (
    <div className="colorWh pb-[120px] sm:pb-[0px] z-50 relative h-[400px] sm:h-[420px] md:h-[550px] flex flex-col justify-center items-center mt-6 sm:mt-12">
      <div className="mb-6">
        <p className="text-[24px] md:text-[34px] font-semibold">Code. Deploy. Repeat. 🔁</p>
      </div>
      <div className="mb-5 sm:mb-7">
        <h1 className="text-[32px] md:text-[68px] font-bold">Hi 👋, I'm Prasanna</h1>
      </div>
      <div className="mb-8 sm:mb-12">
        <TypeAnimation
          sequence={[
            "Backend Developer 🔗",
            500,
            "Devops & Cloud Infra ☁️",
            500,
            "CI/CD Enthusiast ⚙️",
            500,
          ]}
          repeat={Infinity}
          className="font-semibold text-[20px] md:text-[38px]"
        />
      </div>
      <div className="py-1 sm:py-2 px-2">
        <Button name={"Resume"} custStyle={"mr-6 sm:mr-10"}/>
        <Button name={"Github"}/>
      </div>
      <SocialMedia/>
    </div>
  );
};

export default TextCarousel;
