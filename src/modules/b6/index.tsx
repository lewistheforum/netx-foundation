"use client";

import Image from "next/image";
import main2 from "../../../public/body/main-logo-2.png";
import Link from "next/link";

export default function B6() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 space-y-4 my-32">
      <div className="text-black text-[30px] lg:text-[60px] font-extralight">
        FEATURED PROJECT
      </div>
      <div className="flex">
        <Image
          src={main2}
          alt=""
          width={1000}
          height={1000}
          className=" w-72 lg:w-[450px] h-full"
        />
      </div>
      <div className="w-5/6 lg:w-1/2 text-center text-black">
        Flow3 Network is a leading DePIN project that allows users to monetize
        unused internet bandwidth and computing power. By sharing these
        resources, users earn rewards while contributing to a decentralized,
        smarter internet ecosystem. It’s a new way to empower individuals and
        drive AI innovation through decentralized infrastructure.
      </div>
      <Link
        href={process.env.NEXT_PUBLIC_EMAIL || "#"}
        target="_blank"
        className="bg-black px-7 py-2 flex flex-row justify-center items-center gap-3"
      >
        <div className="text-white font-medium text-lg">
          Visit Flow3 Network{" "}
        </div>
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 1C13.5 0.447715 13.0523 2.00008e-07 12.5 -5.28728e-08L3.5 7.47917e-07C2.94771 4.10743e-07 2.5 0.447716 2.5 1C2.5 1.55228 2.94772 2 3.5 2L11.5 2L11.5 10C11.5 10.5523 11.9477 11 12.5 11C13.0523 11 13.5 10.5523 13.5 10L13.5 1ZM2.20711 12.7071L13.2071 1.70711L11.7929 0.292894L0.792893 11.2929L2.20711 12.7071Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
}
