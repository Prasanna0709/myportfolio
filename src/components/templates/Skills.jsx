import React from "react";

const Skills = () => {
  const frontend = [
    "/Prasanna_React.png",
    "/Prasanna_Bootstrap.png",
    "/Prasanna_Tailwind.png",
    "/Prasanna_JS.png",
    "Prasanna_Sass.svg"
  ];

  const backend = [
    "/Prasanna_Nodejs.svg",
    "/Prasanna_Express.png",
    "/Prasanna_Java.png",
    "/Prasanna_Springboot.png",
    "/Prasanna_Mongodb.svg",
    "/Prasanna_Mysql.png",
    "/Prasanna_Jwt.png",
  ];

  const devops = [
    "/aws.svg",
    "/jenkins-original.svg",
    "/docker.svg",
    "/Prasanna_Graphana.svg",
    "/logo.svg",
    "/Prasanna_Prometheus.png",
  ];

  return (
    <div className="px-24 pt-2 flex justify-between flex-col h-screen w-full relative z-50 text-white bg-black" id="skills">
      <div className="mb-8">
        <div className="flex items-center w-full px-4 mb-4">
          <h2 className="text-[33px] font-medium mr-5">
            <span className="colorPr"># </span>Skills
          </h2>
          <div className="h-[2px] bg-white w-[80%] opacity-50"></div>
        </div>
        <div className="px-14 text-[19px]">
          <p>Expert in Full Stack Development , Software Development and Devops .</p>
        </div>
      </div>
      <div className="ps-28">
        <div className="flex flex-col mb-3">
          <div className="flex items-center w-full px-4">
            <h3 className="text-[24px] font-medium mr-5">
              <span className="colorPr">#</span> Frontend
            </h3>
            <div className="h-[2px] bg-white w-[20%] opacity-50"></div>
          </div>
          <div className="h-[150px] flex items-center justify-center">
            {frontend.map((item) => (
              <div className="h-[90px] w-[90px] flex justify-center items-center mr-12">
                <img src={item} alt="" className=""/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <div className="flex items-center w-full px-4">
            <h3 className="text-[24px] font-medium mr-5">
              <span className="colorPr">#</span> Backend
            </h3>
            <div className="h-[2px] bg-white w-[20%] opacity-50"></div>
          </div>
          <div className="h-[150px] flex items-center justify-center">
            {backend.map((item) => (
              <div className="h-[90px] w-[90px] flex justify-center items-center mr-12 overflow-hidden">
                <img src={item} alt="" className=""/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <div className="flex items-center w-full px-4">
            <h3 className="text-[24px] font-medium mr-5">
              <span className="colorPr">#</span> Devops
            </h3>
            <div className="h-[2px] bg-white w-[20%] opacity-50"></div>
          </div>
          <div className="h-[150px] flex items-center justify-center">
            {devops.map((item) => (
              <div className="h-[90px] w-[90px] flex justify-center items-center mr-12 overflow-hidden">
                <img src={item} alt="" className=""/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
