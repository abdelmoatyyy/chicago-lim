"use client";

import { useState, useEffect } from "react";
import { scanMylimobizWidgets } from "@/lib/mylimobiz-widget";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const frame = requestAnimationFrame(() => {
      scanMylimobizWidgets();
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      className="relative w-full px-4 md:px-12 pt-24 pb-4 min-h-screen font-sans overflow-hidden flex items-center"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.65)), url("/ChatGPT Image Apr 7, 2025, 12_11_10 PM.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF37] via-[#f5e7b8] to-[#D4AF37]"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Left Content - Takes 3 columns on large screens */}
        <div
          className={`space-y-8 text-white lg:col-span-3 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className=" hidden md:inline-block px-3 py-1  md:mt-0 bg-[#D4AF37]/20 rounded-full border border-[#D4AF37]/30 mb-2">
            <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">
              Premium Transportation
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
            title="Luxury Limousine Services"
          >
            Experience <span className="text-[#D4AF37]">Luxury</span> in the
            Heart of Chicago
          </h1>

          <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl">
            Ride in style with
            <span className="text-[#D4AF37] font-medium">
              {" "}
              Chicago Translimo
            </span>
            . We combine exceptional comfort, punctuality, and professionalism
            to deliver the premium transportation experience you deserve.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="/book-now" className="group">
              <button className="px-6 py-3 bg-[#D4AF37] text-black rounded-lg shadow-lg group-hover:bg-[#e5c24c] transition-all duration-300 text-base font-semibold flex items-center gap-2">
                Book Your Ride
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </a>
            <a
              href="#services"
              className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 text-base font-medium"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Right Reservation Form - Takes 2 columns on large screens */}
        <div
          className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-2xl">
            <h3 className="text-[#D4AF37] text-xl font-semibold mb-4">
              Reserve Your Luxury Experience
            </h3>
            <div className="w-full overflow-hidden rounded-lg">
              <a
                href="https://book.mylimobiz.com/v4/chicagotrans"
                data-ores-widget="quickres"
                data-ores-alias="chicagotrans"
                data-redirect-url="https://www.chicagotranslimo.com/book-now"
                rel="noopener noreferrer"
                id="chicagotrans-link"
                className="flex min-h-[300px] w-full flex-col items-center justify-center text-center text-sm text-white/60"
              >
                Loading reservation form…
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
