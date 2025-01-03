import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="text-purple-600  body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center flex-col">
          <h1 className="md:text-4xl text-2xl font-bold font-serif title-font text-purple-800 ">
            About Us
          </h1>
          <div className="w-[15%] h-1 bg-gradient-to-r from-violet-800 mb-4 via-purple-500 to-pink-500"></div>
          </div>
          <p className=" leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-4 text-purple-800 text-opacity-90">
          At BitLinks, we simplify the web by transforming long, complex URLs into short, shareable links. Our mission is to make sharing seamless, fast, and efficient for individuals and businesses alike.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-8 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-purple-800 font-mono font-semibold text-lg title-font mb-3">
              Simplify Sharing
              </h2>
              <p className="leading-relaxed text-base">
              Convert lengthy URLs into compact, easy-to-share links perfect for social media, emails, and more.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-purple-800 font-mono font-semibold text-lg title-font  mb-3">
              Track Performance
              </h2>
              <p className="leading-relaxed text-base">
              Gain insights with real-time analytics, including click counts and user demographics, to optimize your link-sharing strategy.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-purple-800 font-mono font-semibold text-lg title-font  mb-3">
              Boost Brand Identity
              </h2>
              <p className="leading-relaxed text-base">
              Create custom-branded links to enhance trust, visibility, and recognition for your business or personal brand 
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
         <Link href="/shorten" className=" flex  w-fit mt-14 text-white bg-gradient-to-r font-sans from-purple-800 to-violet-700 hover:bg-gradient-to-l border-0 
              py-2 px-8 focus:outline-none hover:bg-purple-600 rounded-md text-lg">
        Try Now
        </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
