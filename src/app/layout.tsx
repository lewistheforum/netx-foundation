import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { Toaster } from "react-hot-toast";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NetX Foundation",
  description: "Fueling the Future of DePIN and AI Innovation",
  openGraph: {
    title: "NetX Foundation",
    description: "Fueling the Future of DePIN and AI Innovation",
    url: "https://netxfoundation.io/",
    images: [
      {
        url: "https://res.cloudinary.com/dx1ejni0o/image/upload/v1742200762/test/vklxpmtggddwbvkm9zg0.png",
        width: 1200,
        height: 630,
        alt: "NetX Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NetX Foundation",
    description: "Fueling the Future of DePIN and AI Innovation",
    images: [
      "https://res.cloudinary.com/dx1ejni0o/image/upload/v1742200762/test/vklxpmtggddwbvkm9zg0.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
