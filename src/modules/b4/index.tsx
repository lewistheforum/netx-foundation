"use client";

import Image from "next/image";
import frame from "../../../public/body/frame-b3-2.png";
import i1 from "../../../public/body/b4-i1.png";
import i2 from "../../../public/body/b4-i2.png";
import i3 from "../../../public/body/b4-i3.png";
import i4 from "../../../public/body/b4-i5.png";

export default function B4() {
  return (
    <div className="text-white mb-20">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-14">
          <div className="text-black text-[36px] font-bold px-5 lg:px-0 text-center">
            Who are we looking for?
          </div>
          <div className="text-black text-[20px] px-5 lg:px-0 text-center">
            NetX is seeking projects and innovators in the following areas:
          </div>
        </div>
      </div>
      <div className="hidden lg:flex relative">
        <Image
          src={frame}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-full"
        />
        {/* ITEM 1  */}
        <div className="absolute -top-[6%] xl:-top-[3%] 2xl:top-[0%] left-[20%] flex flex-col justify-between items-center gap-5 pr-20 py-14">
          <Image
            src={i1}
            alt=""
            width={1000}
            height={1000}
            className="w-16 h-full updown-animation delay-0"
          />
          <div className="text-black text-base xl:text-xl font-bold w-2/3 text-center">
            Decentralized Internet Infrastructure
          </div>
        </div>
        {/* ITEM 2  */}
        <div className="absolute -top-[3%] xl:-top-[0%] 2xl:top-[3%] right-[15%] flex flex-col justify-between items-center gap-5 pr-20 py-14">
          <Image
            src={i2}
            alt=""
            width={1000}
            height={1000}
            className="w-12 h-full updown-animation delay-1"
          />
          <div className="text-black text-base xl:text-xl font-bold w-2/3 text-center">
            Blockchain & Smart Contract Development
          </div>
        </div>
        {/* ITEM 3  */}
        <div className="absolute -bottom-[10%] xl:-bottom-[4%] 2xl:bottom-[0%] left-[20%] flex flex-col justify-between items-center gap-5 pr-20 py-14">
          <Image
            src={i3}
            alt=""
            width={1000}
            height={1000}
            className="w-16 h-full updown-animation delay-2"
          />
          <div className="text-black text-base xl:text-xl font-bold w-2/3 text-center">
            AI-Driven Connectivity & Data Models
          </div>
        </div>
        {/* ITEM 4  */}
        <div className="absolute -bottom-[4%] xl:-bottom-[0%] 2xl:bottom-[4%] right-[19%] flex flex-col justify-between items-center gap-5 pr-20 py-14">
          <Image
            src={i4}
            alt=""
            width={1000}
            height={1000}
            className="w-16 h-full updown-animation delay-3"
          />
          <div className="text-black text-base xl:text-xl font-bold w-full text-center">
            Global Connectivity Solutions
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col justify-center items-center gap-14">
        {/* ITEM 1  */}
        <div className="flex flex-col justify-between items-center gap-5 pr-0 lg:pr-20 py-14">
          <Image
            src={i1}
            alt=""
            width={1000}
            height={1000}
            className="w-16 h-full updown-animation delay-0"
          />
          <div className="text-black text-xl font-bold w-2/3 text-center">
            Decentralized Internet Infrastructure
          </div>
        </div>
        {/* ITEM 2  */}
        <div className="flex flex-col justify-between items-center gap-5 pr-0 lg:pr-20 py-14">
          <Image
            src={i2}
            alt=""
            width={1000}
            height={1000}
            className="w-12 h-full updown-animation delay-1"
          />
          <div className="text-black text-xl font-bold w-2/3 text-center">
            Blockchain & Smart Contract Development
          </div>
        </div>
        {/* ITEM 3  */}
        <div className="flex flex-col justify-between items-center gap-5 pr-0 lg:pr-20 py-14">
          <Image
            src={i3}
            alt=""
            width={1000}
            height={1000}
            className="w-16 h-full updown-animation delay-2"
          />
          <div className="text-black text-xl font-bold w-2/3 text-center">
            AI-Driven Connectivity & Data Models
          </div>
        </div>
        {/* ITEM 4  */}
        <div className="flex flex-col justify-between items-center gap-5 pr-0 lg:pr-20 py-14">
          <Image
            src={i4}
            alt=""
            width={1000}
            height={1000}
            className="w-16 h-full updown-animation delay-3"
          />
          <div className="text-black text-xl font-bold w-full text-center">
            Global Connectivity Solutions
          </div>
        </div>
      </div>
    </div>
  );
}
