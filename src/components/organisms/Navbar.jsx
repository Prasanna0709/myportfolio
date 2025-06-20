import React, { useState } from "react";
import { IterationCcw,Ellipsis } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navList = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "About", id: "about" },
    { name: "Myworks", id: "myWorks" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <div className="flex justify-between hidden lg:flex h-[17vh] items-center sticky top-0 z-[60] lg:px-16 xl:px-32 pt-3 pb-3">
      <div className="">
        <img
          src="/Prasanna_Logo.svg"
          alt="prasanna_logo"
          className="w-[60px] h-[60px]"
        />
      </div>
      <div className="ps-8">
        <div>
          <ul className="flex justify-around rounded-3xl bg-gray-900">
            {navList.map((link) => (
              <li className="py-2 px-7 text-lg flex items-center">
                <span className="pr-1 colorPr">
                  <IterationCcw size={17} />
                </span>
                <a href={`#${link.id}`} className="colorWh font-light">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button className="px-5 py-2 bg-white rounded-3xl text-black font-medium">
          Say hi..
        </button>
      </div>
    </div>

    <div className="flex justify-center lg:hidden items-center h-[17vh] sticky top-0 z-[60]">
        <div className="relative flex justify-between items-center px-7 sm:px-10 md:px-20 rounded-[500px] py-2 w-[80%] bg-gray-800">
          <div className="w-[30px] h-[30px] flex items-center">
            <img src="./Prasanna_Logo.svg" alt="logo" />
          </div>
          <div>
            <Ellipsis className="w-[30px] h-[30px] text-purple-600 cursor-pointer" onClick={()=>setIsOpen(isOpen?false:true)}/>
          </div>
          {isOpen && (<div className="rounded-md absolute bottom-[-250px] sm:bottom-[-280px] right-0 w-[180px] h-[240px] sm:w-[300px] sm:h-[270px] bg-gray-800">
              <ul className="flex flex-col h-[100%] justify-center">
                {navList.map((link,index)=>(
                  <li className="py-1 my-1 px-6 sm:px-10">
                    <a href={`#${link.id}`} className="text-[14px] sm:text-[18px] text-white cursor pointer" >{link.name}</a>
                  </li>
              ))}
              <div className="flex py-1 px-5 sm:px-9">
                <button className="px-2 sm:px-3 cursor-pointer py-1 rounded-md border-none bg-white text-black w-[80px] sm:w-[100px]">Say hi ...</button>
              </div>
              </ul>
         </div>)}
        </div>
    </div>
    </>
  );
};

export default Navbar;
