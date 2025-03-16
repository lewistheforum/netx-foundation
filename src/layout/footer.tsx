"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black">
      <main className="flex flex-col items-center w-full px-5 lg:px-44 p-4 mb-20">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact us</h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="mt-1 block w-full border-black border px-10 py-4"
              />
            </div>
            <div className="pt-3 lg:pt-7">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your messages"
                rows={1}
                className="mt-1 block w-full border-black border px-10 py-4"
              />
            </div>
            <div className="flex justify-center items-center pt-6">
              <button
                type="submit"
                className="w-1/2 lg:w-1/4 text-lg font-semibold bg-black text-white py-2 px-4 hover:bg-gray-800"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="mt-20 text-center">
          <p className="text-xl font-semibold mb-7">
            Follow us for the latest news and insights!
          </p>
          <Link
            href={process.env.NEXT_PUBLIC_X_URL || "#"}
            target="_blank"
            className="flex justify-center items-center gap-4 mt-4"
          >
            <svg
              width="37"
              height="34"
              viewBox="0 0 37 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.695703 0L15.0008 18.5448L0 34H3.19748L16.4178 20.3797L26.9241 34H37L22.0306 14.5954L36.1982 0H33.0027L20.6156 12.7605L10.7716 0H0.695703Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </main>
      <footer className="w-full mt-auto border-t border-gray-300 py-4 text-center text-sm lg:text-base">
        <p>Copyright 2025 by NetX Foundation. All rights reserved</p>
        <p className="mt-1">
          <a href="#" className="hover:underline">
            Privacy Statement
          </a>{" "}
          -{" "}
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
