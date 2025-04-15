"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with real submission or redirect logic
    console.log("Reservation submitted:", formData);
  };

  return (
    <section className="relative w-full px-4 md:px-12 pt-32 pb-4 min-h-screen font-sans overflow-hidden">
      <Image
        fill
        src="/ChatGPT Image Apr 7, 2025, 12_11_10 PM.png"
        alt="Hero Image"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-white px-4 md:px-8">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#D4AF37] leading-tight tracking-tight font-serif"
            title="Luxury Limousine Services"
          >
            Luxury Limousine Services <br /> in the Heart of Chicago
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed tracking-wide">
            Ride in style with
            <span className="text-[#D4AF37] font-semibold">
              {" "}
              Chicago Translimo
            </span>
            . Exceptional comfort, punctuality, and professionalism—your premium
            ride awaits.
          </p>
          <Link href="/book-now">
            <button className="mt-2 p-3 bg-[#D4AF37] text-black rounded-xl shadow-md hover:shadow-lg transition duration-300 text-sm sm:text-base lg:text-lg font-semibold tracking-wide">
              Book Now
            </button>
          </Link>
        </div>

        {/* Right Reservation Form */}
        <div className="h-full bg-transparent p-4 sm:p-8 lg:p-12 mx-auto lg:mx-0">
          <div className="h-full p-2">
            <div className="w-full h-full overflow-hidden rounded-lg">
              <a
                href="https://book.mylimobiz.com/v4/chicagotrans"
                data-ores-widget="quickres"
                data-ores-alias="chicagotrans"
                data-redirect-url="https://www.chicagotranslimo.com/book-now"
                rel="noopener noreferrer"
                id="chicagotrans-link"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <Script id="safari-booking-fix" strategy="afterInteractive">
        {`
          document.addEventListener("DOMContentLoaded", function () {
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (isSafari) {
              var link = document.getElementById("chicagotrans-link");
              if (link) {
                link.href = "https://book.mylimobiz.com/v4/chicagotrans";
                link.textContent = "Book Now (Safari)";
                link.removeAttribute("data-ores-widget");
                link.removeAttribute("data-ores-alias");
                link.removeAttribute("data-redirect-url");
              }
            }
          });
        `}
      </Script>
      {/* External Script */}
      <Script
        src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
