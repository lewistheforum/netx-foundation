"use client";

import Image from "next/image";
import frame from "../../../public/body/frame.png";

export default function B1() {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 p-4 sm:p-6 md:p-10 lg:px-44 py-16 sm:py-20 md:py-24">
        {/* Left Section with Image and Text */}
        <div className="relative col-span-12 lg:col-span-7 border border-[#E9E9E9] border-b lg:border-r-0">
          <Image
            src={frame}
            alt="NetX Frame"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover"
          />
          <div className="absolute left-0 sm:left-6 md:left-8 bottom-0 sm:bottom-10 md:bottom-12 flex flex-col justify-end p-4 sm:p-5 gap-2 sm:gap-3">
            <div className="text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              About NetX
            </div>
            <div className="text-black text-sm sm:text-base md:text-lg w-full sm:w-3/4">
              NetX is driving the revolution in decentralized internet
              infrastructure. We identify and support innovative projects that
              are revolutionizing how digital resources are shared, managed, and
              monetized.
            </div>
          </div>
        </div>

        {/* Right Section with Text */}
        <div className="relative col-span-12 lg:col-span-5 border border-[#E9E9E9] border-t-0 lg:border-t lg:border-l-0 h-72 lg:h-auto">
          <div className="absolute bottom-5 sm:bottom-10 md:bottom-0 flex flex-col justify-end p-4 sm:p-5 gap-2 sm:gap-3">
            <div className="text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Our Mission
            </div>
            <div className="text-black text-sm sm:text-base md:text-lg">
              We aim to decentralize internet services, enabling a peer-to-peer
              economy where every individual can share unused bandwidth and
              computing power for a reward. The future of the internet
              isn&apos;t just about connecting people; it&apos;s about
              empowering them to contribute to its evolution.
              <br />
              (Include a call to action to explore Flow3 Network)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
