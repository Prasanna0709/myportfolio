import React from "react";

const ProjectCards = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Header Section */}
      <div className="flex items-center w-full h-[13vh] ps-24">
        <h2 className="text-[33px] font-medium mr-5 text-white">
          <span className="colorPr"># </span>My Works
        </h2>
        <div className="h-[2px] bg-white w-[73%] opacity-50"></div>
      </div>
      {/* contents section */}
      <div className="flex flex-col justify-center h-[76vh]">
        <div className="flex justify-center">
          {/* Project-1 */}
          <div className="h-[300px] w-[400px] rounded-md mx-3 relative overflow-y-hidden group">
            {/* image section */}
            <div className="h-[100%]">
              <img src="project-1.png" alt="project-1" className="h-[300px] w-[100%] rounded-md"/>
            </div>
            {/* contents-section */}
            <div className="absolute bottom-[-200px] h-[240px] w-[100%] group-hover:bottom-0 transition-all duration-300">
              {/* heading */}
              <div className="h-[40px] w-[100%] bg-purple flex ps-5 items-center">
                <p className="text-[24px] font-semibold text-white">Project1</p>
              </div>
              {/* description */}
              <div className="h-[200px] bg-white text-black flex flex-col justify-between items-between">
                <div className="h-[60%]">
                  <p className="text-[16px] px-4 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium, nostrum tempore repellendus quam ullam dolor
                    blanditiis maxime
                  </p>
                </div>
                <div className="flex bg-white h-[40%] justify-around w-[100%] items-center">
                  <button className="py-2 px-5 bg-black text-white outline-none rounded boredr-none">
                    View
                  </button>
                  <button className="py-2 px-5 bg-black text-white outline-none rounded boredr-none">
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-[400px] mx-3 bg-green-300"></div>
          <div className="h-[300px] w-[400px] mx-3 bg-green-300"></div>
        </div>
      </div>
      <div className="py-2 pb-6 flex justify-center items-center">
        <button className="py-2 px-6 text-[17px] font-semibold rounded-md bg-white text-black">View All ...</button>
      </div>
    </div>
  );
};

export default ProjectCards;
