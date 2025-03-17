"use client";

import Image from "next/image";
import i1 from "../../../public/body/icon-1.png";
import i2 from "../../../public/body/icon-2.png";
import i3 from "../../../public/body/icon-3.png";
import bg from "../../../public/head/background-black.jpeg";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import ApplicationForm from "../components";

export default function B5() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsOpen(false);
  };
  return (
    <div className=" flex flex-col items-center justify-center p-6 my-16">
      <h1 className="text-4xl text-black font-bold mb-10">How to Apply</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-20 max-w-4xl">
        {/* Card 1 */}
        <div className="bg-[#DDDDDD] shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src={bg}
              alt=""
              fill
              priority
              className="object-cover opacity-90"
            />
            <div className="relative text-white p-4 px-10 flex items-center justify-between">
              <Image
                src={i1}
                alt=""
                width={1000}
                height={1000}
                className="w-12 h-full"
              />

              <span className="text-5xl font-bold">01</span>
            </div>
          </div>
          <div className=" bg-[#DDDDDD] text-black">
            <h2 className="text-xl font-semibold mb-2 bg-white border-y border-black px-6 py-3">
              Application
            </h2>
            <div className="px-6 pb-5 pr-10 text-base">
              <div className="flex flex-row gap-3 mt-3">
                + Provide your project details, including team info and project
                category.
              </div>
              <div className="flex flex-row gap-3 mt-3">
                + Select the funding size.
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#DDDDDD] shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src={bg}
              alt=""
              fill
              priority
              className="object-cover opacity-90"
            />
            <div className="relative text-white p-4 px-10 flex items-center justify-between">
              <Image
                src={i2}
                alt=""
                width={1000}
                height={1000}
                className="w-12 h-full"
              />
              <span className="text-5xl font-bold">02</span>
            </div>
          </div>
          <div className=" bg-[#DDDDDD] text-black">
            <h2 className="text-xl font-semibold mb-2 bg-white border-y border-black px-6 py-3">
              Evaluation
            </h2>
            <div className="px-6 pb-5 pr-10 text-base">
              <div className="flex flex-row gap-3 mt-3">
                + After receiving your application, our team will review it and
                reach out for further discussions.
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#DDDDDD] shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src={bg}
              alt=""
              fill
              priority
              className="object-cover opacity-90"
            />
            <div className="relative text-white p-4 px-10 flex items-center justify-between">
              <Image
                src={i3}
                alt=""
                width={1000}
                height={1000}
                className="w-12 h-full"
              />
              <span className="text-5xl font-bold">03</span>
            </div>
          </div>
          <div className=" bg-[#DDDDDD] text-black">
            <h2 className="text-xl font-semibold mb-2 bg-white border-y border-black px-6 py-3">
              Decision
            </h2>
            <div className="px-6 pb-5 pr-10 text-base">
              <div className="flex flex-row gap-3 mt-3">
                + If approved, the grant will be awarded with the necessary
                support for your project&apos;s development.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <button className="mt-20 bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition">
            Apply Now
          </button>
        </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent
          className="max-w-[600px] max-h-[90vh] bg-black border border-black"
          showCloseButton={true}
        >
          <ApplicationForm onClose={handleCloseDialog} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
