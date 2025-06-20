import React from "react";

const ContactUs = () => {
  return (
    <div className="h-[100vh] flex flex-col relative" id="contact">
      {/* Header Section */}
      <div className="flex items-center w-full h-[13vh] ps-24">
        <h2 className="text-[33px] font-medium mr-5 text-white">
          <span className="colorPr"># </span>Get In Touch
        </h2>
        <div className="h-[2px] bg-white w-[73%] opacity-50"></div>
      </div>

      {/* Body Section */}
      <div className="flex justify-center items-center px-5 h-[87vh]">
        {/* Left: Form */}
        <div className="flex justify-center ps-16 items-center w-[50%] h-full">
          <form>
            <div className="flex flex-col mb-6">
              <label htmlFor="name" className="py-1 text-white text-[17px]">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-[450px] px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="py-1 text-white text-[17px]">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-[450px] px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="phone" className="py-1 text-white text-[17px]">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone number"
                className="w-[450px] px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="flex flex-col mb-8">
              <label htmlFor="message" className="py-1 text-white text-[17px]">Message</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Your message..."
                className="w-[450px] px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>

            <div className="text-center">
              <button className="w-[200px] py-3 rounded-full bg-white text-purple-700 font-semibold text-[17px] shadow-md hover:bg-yellow-100 transition-all duration-300">
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Right: Image */}
        <div className="w-[50%] h-full flex justify-center items-center">
          <img
            src="./Prasanna_getintouch.svg"
            alt="getInTouch"
            className="w-[600px] h-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
