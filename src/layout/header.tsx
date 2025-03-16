"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/head/title-b5.png";
import x from "../../public/head/x.png";
import bg from "../../public/head/background-white.jpeg";
import main from "../../public/head/logo-main.png";
// import hamburger from "../../public/hamburger.svg";
// import { useCopyToClipboard } from "usehooks-ts";
// import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ApplicationForm from "@/modules/components";

export default function Header() {
  const [open, setOpen] = useState(false);
  // const [, copy] = useCopyToClipboard();
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className="text-white">
      <div className="bg-black flex flex-row justify-between items-center p-5 px-5 lg:px-44">
        <div className="flex w-full">
          <Image
            src={logo}
            alt=""
            width={1000}
            height={1000}
            className="w-44 h-10"
          />
        </div>
        <Link href={process.env.NEXT_PUBLIC_X_URL || "#"} target="_blank">
          <Image
            src={x}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-5"
          />
        </Link>
      </div>
      <div className="relative border-b border-black">
        <Image
          src={bg}
          alt=""
          fill
          priority
          className="object-cover opacity-10"
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 px-5 lg:px-44">
          <div className="lg:col-span-7 flex flex-col justify-center gap-6 ">
            <div className="text-black text-5xl font-semibold">
              Fueling the Future of DePIN and AI Innovation
            </div>
            <div className="text-black text-xl w-full lg:w-1/2">
              Join the movement to build a smarter, more equitable digital
              ecosystem.
            </div>
            <div className="flex">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger>
                  <div className="bg-black text-white px-10 py-3">
                    Apply For Funding
                  </div>
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
          </div>
          <div className="lg:col-span-5">
            {" "}
            <Image
              src={main}
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full scale-x-[-1] float-in-space1"
            />
          </div>
        </div>
      </div>
      {/* <div
        onClick={() => setOpen(!open)}
        className="md:hidden flex justify-end"
      >
        <Image src={hamburger} height={25} width={25} alt="Hamburger Menu" />
      </div> */}
      {/* onClick=
      {() => {
        copy("0x2858E541f108161aC2A9ba301f52F515BeEBa3C3");
        toast.success("Copied!");
      }} */}
      {open && (
        <div className="fixed top-0 left-0 bottom-0 right-0 h-full w-full bg-white shadow-md z-20">
          <div
            onClick={() => setOpen(!open)}
            className="text-black text-2xl flex justify-end pr-10 pt-5"
          >
            <p>X</p>
          </div>
          <ul className="flex flex-col space-y-10 py-10 px-5">
            <li className="font-normal text-xl text-black">
              <Link
                href={process.env.NEXT_PUBLIC_DEXS_URL || "#"}
                target="_blank"
              >
                Discovery
              </Link>
            </li>
            <li className="font-normal text-xl text-black">
              <Link
                href={process.env.NEXT_PUBLIC_DEX_URL || "#"}
                target="_blank"
              >
                About $BMoney
              </Link>
            </li>
            <li className="font-normal text-xl text-black">
              <Link
                href={process.env.NEXT_PUBLIC_TELE_URL || "#"}
                target="_blank"
              >
                TELEGRAM
              </Link>
            </li>

            <li className="font-normal text-xl text-black">
              <Link href={process.env.NEXT_PUBLIC_X_URL || "#"} target="_blank">
                TWITTER
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
