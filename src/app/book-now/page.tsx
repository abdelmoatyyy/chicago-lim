"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const BookNow = () => {
  return (
    <div className="w-full h-screen flex flex-col pt-24">
      {/* Header Section */}
      <div className="px-4 pt-8 max-w-3xl mx-auto text-center">
        <div className="my-6">
          <Link
            className="py-2 px-4 bg-[#CD9900] text-black font-bold rounded-xl hover:shadow-lg transition-shadow duration-300"
            href="https://book.mylimobiz.com/v4/(S(iyhgctydwk54dkz0us3bwvlp))/chicagotrans"
          >
            Using iPhone Or Safari? Reserve Here
          </Link>
        </div>
      </div>
      {/* Iframe Section */}
      <div className="flex-1">
        <iframe
          src="https://book.mylimobiz.com/v4/chicagotrans"
          frameBorder={0}
          scrolling="auto"
          allow="geolocation"
          className="ores4iframe w-full h-full"
          id="iFrameResizer0"
        />
      </div>
    </div>
  );
};

export default BookNow;
