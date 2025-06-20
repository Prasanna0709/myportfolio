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
    // <div className="flex justify-between items-center sticky top-0 z-[60] bg-black bg-opacity-80 backdrop-blur-md lg:px-16 xl:px-32 pt-6">
    //   <div className="">
    //     <img
    //       src="/Prasanna_Logo.svg"
    //       alt="prasanna_logo"
    //       className="w-[60px] h-[60px]"
    //     />
    //   </div>
    //   <div className="ps-8">
    //     <div>
    //       <ul className="flex justify-around rounded-3xl bg-gray-900">
    //         {navList.map((link) => (
    //           <li className="py-2 px-7 text-lg flex items-center">
    //             <span className="pr-1 colorPr">
    //               <IterationCcw size={17} />
    //             </span>
    //             <a href={`#${link.id}`} className="colorWh font-light">
    //               {link.name}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    //   <div>
    //     <button className="px-5 py-2 bg-white rounded-3xl text-black font-medium">
    //       Say hi..
    //     </button>
    //   </div>
    // </div>
    <div className="relative z-[60] px-3 py-2 md:px-5 md:py-3">
        <div className="flex w-full items-center justify-between px-10 bg-gray-900 h-[40px] sm:h-[50px] rounded-[600px]">
            <div className="flex justify-center items-center h-[30px] w-[30px] sm:w-[40px] sm:h-[40px]  md:w-[50px] md:h-[50px]">
            <img src="./Prasanna_Logo.svg" alt="logo" />
        </div>
        <div>
            <Ellipsis className=" h-[30px] w-[30px] sm:w-[40px] sm:h-[40px] text-purple-700"/>
        </div>
        </div>
    </div>
  );
};

export default Navbar;
