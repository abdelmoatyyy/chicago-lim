"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Script from "next/script";

const BookNow = () => {
  return (
    <div className="w-full h-[3000px] md:h-[1600px] flex flex-col pt-24">
      {/* Header Section */}
      <div className="px-4 pt-8 max-w-3xl mx-auto text-center">
        <div className="my-6">
          <Link
            className="py-2 px-4 bg-[#CD9900] text-black font-bold rounded-xl hover:shadow-lg transition-shadow duration-300"
            href="https://book.mylimobiz.com/v4/(S(iyhgctydwk54dkz0us3bwvlp))/chicagotrans"
          >
            Using iPhone Or Safari? Reserve Here.
          </Link>
        </div>
      </div>
      {/* Iframe Section */}
      <div className="p-12 mb-24 block  ">
        <a
          href="https://book.mylimobiz.com/v4/chicagotrans"
          data-ores-widget="website"
          data-ores-alias="chicagotrans"
          rel="noopener noreferrer"
          id="chicagotrans-widget-link"
        >
          Online Reservations
        </a>
      </div>
      <Script id="safari-widget-fix" strategy="afterInteractive">
        {`
          document.addEventListener("DOMContentLoaded", function () {
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

            if (isSafari) {
              var link = document.getElementById("chicagotrans-widget-link");
              if (link) {
                link.href = "https://book.mylimobiz.com/v4/chicagotrans";
                link.textContent = "Book Now (Safari)";
                link.removeAttribute("data-ores-widget");
                link.removeAttribute("data-ores-alias");
              }
            }
          });
        `}
      </Script>

      {/* External Widget Loader */}
      <Script
        src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default BookNow;
