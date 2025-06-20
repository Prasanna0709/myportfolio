import React from "react";
import { Play } from "lucide-react";

const AboutMe = () => {
  const worksList = [
    "Full Stack Development",
    "Devops Enginner",
    "Software Development",
  ];

  return (
    <div className="flex flex-col justify-center px-24 items-center h-screen w-full bg-black z-50 relative text-white" id="about">
      <div className="flex items-center w-full px-4 mb-8">
        <h2 className="text-[33px] font-medium mr-5">
          <span className="colorPr"># </span>about-me
        </h2>
        <div className="h-[2px] bg-white w-[73%] opacity-50"></div>
      </div>
      <div className="flex justify-around items-center">
        <div className="flex justify-center h-[500px] w-[35%] mr-5">
          <img
            src="/Prasanna-pof.jpg"
            alt="Prasanna-picture"
            className="h-[500px] w-[450px] rounded-lg"
          />
        </div>
        <div className="flex flex-col item-center w-[62%] py-3 px-3">
          <div className="py-5 px-3 border-purple rounded-md my-3">
            <p className="text-[17px] tracking-normal">
              <span className="float-left colorPr">Hi!</span>&nbsp; I'm
              Prasanna, a Full-Stack Developer and DevOps Engineer from Tamil
              Nadu, India. I build scalable applications and explore new
              technologies to grow my skills."
            </p>
          </div>
          <div className="flex justify-between my-3">
            <div className="w-[48%] border-purple rounded-md py-3 px-3">
              <h3 className="text-[21px] font-medium colorPr tracking-wide mb-3">
                # Skills
              </h3>
              <ul>
                {worksList.map((value) => (
                  <li className="flex items-center">
                    <span className="mr-1">
                      <Play size={15} color="var(--color-purple)" />
                    </span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[50%] border-purple rounded-md py-3 ps-4">
              <h3 className="text-[21px] font-medium mb-3 colorPr tracking-wide">
                # My Journey
              </h3>
              <p>
                BE ECE student from Tamil Nadu, diving into Full-Stack
                Development and DevOps. I craft smart, creative digital
                solutions.
              </p>
            </div>
          </div>
          <div className="w-full border-purple rounded-md my-3 px-4 py-5">
            <h3 className="text-[21px] font-medium mb-1 colorPr tracking-wide">
              # Passion
            </h3>
            <p>
              I’ve been building front-end stacks and exploring DevOps and
              backend systems, passionate about solving real-world problems with
              technology.
            </p>
          </div>
          <div className="w-full border-purple rounded-md my-3 py-5 px-5">
            <p>
              Once you stop learning, you start dying. &nbsp;&nbsp;
              <span className="colorPr">- Albert Einstein </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
