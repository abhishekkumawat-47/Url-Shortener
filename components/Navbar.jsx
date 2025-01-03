import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-white border-purple-200 dark:bg-violet-900">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
          width={34} height={24}
            src={"/logo.jpg"}
            className="h-auto rounded-full"
            alt="Flowbite Logo"
          />
          <span className="self-center font-serif text-2xl font-medium whitespace-nowrap dark:text-white">
            Bit Links
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-6">
          <Link
            href="/shorten"
            className="text-white font-sans bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300  rounded-lg text-sm px-4 py-2 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 font-medium"
          >
            Try Now
          </Link>
          <Link
            href="https://github.com/abhishekkumawat-47/Url-Shortener"
            className="text-white font-sans bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300  rounded-lg text-sm px-4 py-2 text-center 
            dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 font-medium"
          >
            Git Hub
          </Link>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-purple-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-purple-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-purple-800 md:dark:bg-violet-900 dark:border-purple-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 md:p-0 text-white bg-purple-700 font-semibold rounded md:bg-transparent md:text-purple-700 md:dark:text-purple-400"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-purple-100 md:hover:bg-transparent md:hover:text-purple-700 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-purple-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/shorten"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-purple-100 md:hover:bg-transparent md:hover:text-purple-700 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-purple-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Shorten
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-purple-100 md:hover:bg-transparent md:hover:text-purple-700 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-purple-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
