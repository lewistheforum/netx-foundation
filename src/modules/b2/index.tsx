"use client";

import Image from "next/image";
import avt1 from "../../../public/body/avt1.png";
import avt2 from "../../../public/body/avt2.png";
import avt3 from "../../../public/body/avt3.png";
import avt4 from "../../../public/body/avt4.png";

export default function B2() {
  return (
    <div className="text-white">
      <div className="flex flex-col justify-center items-center px-5 lg:px-44">
        <div className="flex flex-col justify-center items-center mb-14">
          <div className="text-black text-[36px] font-bold">Founding Team</div>
          <div className="text-black text-[20px] text-center">
            Meet the dynamic team leading NetX, pioneers in decentralized
            internet infrastructure.
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-full">
          {/* ITEM 1  */}
          <div className="flex flex-col justify-center gap-5">
            <div className="w-full h-96 lg:w-64 lg:h-64 border border-gray-400">
              <Image
                src={avt1}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-2">
              <div className="flex flex-row items-center gap-2">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6C0 5.44772 0.447715 5 1 5H5C5.55228 5 6 5.44772 6 6V9C6 9.55228 5.55228 10 5 10H1C0.447715 10 0 9.55228 0 9V6Z"
                    fill="#343434"
                  />
                  <path
                    d="M5 2C5 3.10457 4.10457 4 3 4C1.89543 4 1 3.10457 1 2C1 0.89543 1.89543 0 3 0C4.10457 0 5 0.89543 5 2Z"
                    fill="#343434"
                  />
                </svg>
                <div className="text-black text-lg lg:text-lg font-bold">
                  John Carter
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="5" height="5" rx="1" fill="#343434" />
                </svg>
                <div className="text-black text-lg lg:text-lg">
                  Founder & CEO
                </div>
              </div>
              <div className="flex flex-row items-start gap-2">
                <svg
                  width="5"
                  height="7"
                  viewBox="0 0 5 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2"
                >
                  <path
                    d="M1.7893 1.26142C2.00787 0.565926 2.99213 0.565926 3.2107 1.26142C3.32667 1.63043 3.70576 1.8493 4.08332 1.76522C4.79492 1.60677 5.28705 2.45916 4.79402 2.99619C4.53243 3.28113 4.53243 3.71887 4.79402 4.00381C5.28705 4.54084 4.79492 5.39323 4.08332 5.23478C3.70576 5.1507 3.32667 5.36957 3.2107 5.73858C2.99213 6.43407 2.00787 6.43407 1.7893 5.73858C1.67333 5.36957 1.29424 5.1507 0.916679 5.23478C0.205081 5.39323 -0.287046 4.54084 0.205979 4.00381C0.467567 3.71887 0.467567 3.28113 0.205979 2.99619C-0.287046 2.45916 0.205081 1.60677 0.916679 1.76522C1.29424 1.8493 1.67333 1.63043 1.7893 1.26142Z"
                    fill="#343434"
                  />
                </svg>
                <div className="text-black w-full lg:w-64">
                  A visionary leader with over 10 years of experience in
                  blockchain, decentralized networks, and fintech. John has been
                  pivotal in leading several successful startups focused on
                  decentralized infrastructure.
                </div>
              </div>
            </div>
          </div>
          {/* ITEM 2  */}
          <div className="flex flex-col justify-center gap-5">
            <div className="w-full h-96 lg:w-64 lg:h-64 border border-gray-400">
              <Image
                src={avt2}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-2">
              <div className="flex flex-row items-center gap-2">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6C0 5.44772 0.447715 5 1 5H5C5.55228 5 6 5.44772 6 6V9C6 9.55228 5.55228 10 5 10H1C0.447715 10 0 9.55228 0 9V6Z"
                    fill="#343434"
                  />
                  <path
                    d="M5 2C5 3.10457 4.10457 4 3 4C1.89543 4 1 3.10457 1 2C1 0.89543 1.89543 0 3 0C4.10457 0 5 0.89543 5 2Z"
                    fill="#343434"
                  />
                </svg>
                <div className="text-black text-lg lg:text-lg font-bold">
                  Sophie Miller
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="5" height="5" rx="1" fill="#343434" />
                </svg>
                <div className="text-black text-lg lg:text-lg">Co-Founder</div>
              </div>
              <div className="flex flex-row items-start gap-2">
                <svg
                  width="5"
                  height="7"
                  viewBox="0 0 5 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2"
                >
                  <path
                    d="M1.7893 1.26142C2.00787 0.565926 2.99213 0.565926 3.2107 1.26142C3.32667 1.63043 3.70576 1.8493 4.08332 1.76522C4.79492 1.60677 5.28705 2.45916 4.79402 2.99619C4.53243 3.28113 4.53243 3.71887 4.79402 4.00381C5.28705 4.54084 4.79492 5.39323 4.08332 5.23478C3.70576 5.1507 3.32667 5.36957 3.2107 5.73858C2.99213 6.43407 2.00787 6.43407 1.7893 5.73858C1.67333 5.36957 1.29424 5.1507 0.916679 5.23478C0.205081 5.39323 -0.287046 4.54084 0.205979 4.00381C0.467567 3.71887 0.467567 3.28113 0.205979 2.99619C-0.287046 2.45916 0.205081 1.60677 0.916679 1.76522C1.29424 1.8493 1.67333 1.63043 1.7893 1.26142Z"
                    fill="#343434"
                  />
                </svg>
                <div className="text-black w-full lg:w-64">
                  A visionary leader with over 10 years of experience in
                  blockchain, decentralized networks, and fintech. John has been
                  pivotal in leading several successful startups focused on
                  decentralized infrastructure.
                </div>
              </div>
            </div>
          </div>
          {/* ITEM 3  */}
          <div className="flex flex-col justify-center gap-5">
            <div className="w-full h-96 lg:w-64 lg:h-64 border border-gray-400">
              <Image
                src={avt3}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="ml-2">
              <div className="flex flex-row items-center gap-2">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6C0 5.44772 0.447715 5 1 5H5C5.55228 5 6 5.44772 6 6V9C6 9.55228 5.55228 10 5 10H1C0.447715 10 0 9.55228 0 9V6Z"
                    fill="#343434"
                  />
                  <path
                    d="M5 2C5 3.10457 4.10457 4 3 4C1.89543 4 1 3.10457 1 2C1 0.89543 1.89543 0 3 0C4.10457 0 5 0.89543 5 2Z"
                    fill="#343434"
                  />
                </svg>
                <div className="text-black text-lg lg:text-lg font-bold">
                  Ethan Blackwood
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="5" height="5" rx="1" fill="#343434" />
                </svg>
                <div className="text-black text-lg lg:text-lg">
                  General Partner
                </div>
              </div>
              <div className="flex flex-row items-start gap-2">
                <svg
                  width="5"
                  height="7"
                  viewBox="0 0 5 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2"
                >
                  <path
                    d="M1.7893 1.26142C2.00787 0.565926 2.99213 0.565926 3.2107 1.26142C3.32667 1.63043 3.70576 1.8493 4.08332 1.76522C4.79492 1.60677 5.28705 2.45916 4.79402 2.99619C4.53243 3.28113 4.53243 3.71887 4.79402 4.00381C5.28705 4.54084 4.79492 5.39323 4.08332 5.23478C3.70576 5.1507 3.32667 5.36957 3.2107 5.73858C2.99213 6.43407 2.00787 6.43407 1.7893 5.73858C1.67333 5.36957 1.29424 5.1507 0.916679 5.23478C0.205081 5.39323 -0.287046 4.54084 0.205979 4.00381C0.467567 3.71887 0.467567 3.28113 0.205979 2.99619C-0.287046 2.45916 0.205081 1.60677 0.916679 1.76522C1.29424 1.8493 1.67333 1.63043 1.7893 1.26142Z"
                    fill="#343434"
                  />
                </svg>
                <div className="text-black w-full lg:w-64">
                  A visionary leader with over 10 years of experience in
                  blockchain, decentralized networks, and fintech. John has been
                  pivotal in leading several successful startups focused on
                  decentralized infrastructure.
                </div>
              </div>
            </div>
          </div>
          {/* ITEM 4  */}
          <div className="flex flex-col justify-center gap-5">
            <div className="w-full h-96 lg:w-64 lg:h-64 border border-gray-400">
              <Image
                src={avt4}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-2">
              <div className="flex flex-row items-center gap-2">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6C0 5.44772 0.447715 5 1 5H5C5.55228 5 6 5.44772 6 6V9C6 9.55228 5.55228 10 5 10H1C0.447715 10 0 9.55228 0 9V6Z"
                    fill="#343434"
                  />
                  <path
                    d="M5 2C5 3.10457 4.10457 4 3 4C1.89543 4 1 3.10457 1 2C1 0.89543 1.89543 0 3 0C4.10457 0 5 0.89543 5 2Z"
                    fill="#343434"
                  />
                </svg>
                <div className="text-black text-lg lg:text-lg font-bold">
                  Isabelle Wong
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="5" height="5" rx="1" fill="#343434" />
                </svg>
                <div className="text-black text-lg lg:text-lg">
                  General Partner
                </div>
              </div>
              <div className="flex flex-row items-start gap-2">
                <svg
                  width="5"
                  height="7"
                  viewBox="0 0 5 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2"
                >
                  <path
                    d="M1.7893 1.26142C2.00787 0.565926 2.99213 0.565926 3.2107 1.26142C3.32667 1.63043 3.70576 1.8493 4.08332 1.76522C4.79492 1.60677 5.28705 2.45916 4.79402 2.99619C4.53243 3.28113 4.53243 3.71887 4.79402 4.00381C5.28705 4.54084 4.79492 5.39323 4.08332 5.23478C3.70576 5.1507 3.32667 5.36957 3.2107 5.73858C2.99213 6.43407 2.00787 6.43407 1.7893 5.73858C1.67333 5.36957 1.29424 5.1507 0.916679 5.23478C0.205081 5.39323 -0.287046 4.54084 0.205979 4.00381C0.467567 3.71887 0.467567 3.28113 0.205979 2.99619C-0.287046 2.45916 0.205081 1.60677 0.916679 1.76522C1.29424 1.8493 1.67333 1.63043 1.7893 1.26142Z"
                    fill="#343434"
                  />
                </svg>
                <div className="text-black w-full lg:w-64">
                  A visionary leader with over 10 years of experience in
                  blockchain, decentralized networks, and fintech. John has been
                  pivotal in leading several successful startups focused on
                  decentralized infrastructure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
