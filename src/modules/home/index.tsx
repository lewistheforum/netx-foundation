"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import B1 from "../b1";
import B2 from "../b2";
import B3 from "../b3";
import B4 from "../b4";
import B5 from "../b5";
import B6 from "../b6";

export default function HomeClient() {
  return (
    <div className="mx-auto min-h-screen max-w-[1990px]">
      <Header />
      <B1 />
      <B2 />
      <B3 />
      <B4 />
      <B5 />
      <B6 />
      <Footer />
    </div>
  );
}
