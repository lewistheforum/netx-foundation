"use client";

import Image from "next/image";
import bg from "../../../public/head/background-white.jpeg";

export default function B3() {
  return (
    <div className="text-white my-32">
      <div className="relative">
        <Image
          src={bg}
          alt=""
          fill
          priority
          className="object-cover opacity-10 scale-x-[-1]"
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 px-5 lg:px-44">
          <div className="col-span-7 flex flex-col justify-center gap-0 lg:gap-6">
            <div className="text-black text-3xl font-semibold">
              NetX Innovation Grant
            </div>
            <div className="text-black text-base w-full text-justify lg:text-left lg:w-5/6 py-10">
              NetX is dedicated to empowering the innovators shaping the future
              of decentralized internet technologies. Our goal is to support
              projects that improve global connectivity, bridge digital gaps,
              and contribute to the advancement of AI-powered decentralized
              networks. With grants of up to $5M, we aim to fuel innovation and
              accelerate the development of next-generation solutions.
            </div>
            <div className="flex">
              <div className="bg-black text-lg font-bold text-white px-10 py-2">
                Apply Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
