"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { Apple, AppleIcon } from "lucide-react";
import Image from "next/image";

const BookNow = () => {
  return (
    <div
      id="book-now"
      className="py-16 relative bg-cover bg-center"
      style={{ backgroundImage: 'url("/limo-bg.jpg")' }}
    >
      {/* Add dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70 z-0"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-10 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
          <p className="text-base font-semibold uppercase tracking-wide text-[#FFD700] dark:text-[#FFD700] mb-2">
            Experience Excellence
          </p>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl">
            BOOK NOW
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-200">
            Book Your Premium Ride With Us Today
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Comfort and luxury at competitive rates",
                "Impeccable customer service",
                "First-class experience",
                "Professional chauffeurs",
                "Punctuality and reliability",
                "Personalized service",
                "Exclusive reward program",
                "Wide range of luxury vehicles",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm p-5 rounded-lg border border-gray-700 hover:border-[#FFD700] transition-all duration-300 hover:bg-black/50"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-[#FFD700]">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 leading-tight text-gray-200 font-medium">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 w-full">
              <Link
                href="https://book.mylimobiz.com/v4/(S(iyhgctydwk54dkz0us3bwvlp))/chicagotrans"
                className="inline-block w-full py-4 px-6 text-center text-black font-bold bg-gradient-to-r from-[#FFD700] to-[#FFC800] rounded-lg shadow-lg hover:shadow-xl hover:from-[#FFC800] hover:to-[#FFD700] transition-all duration-300"
              >
                <div className="flex items-center justify-center">
                  <span className="mr-2">
                    Using iPhone or Safari? Reserve Here
                  </span>
                  <Image
                    src="/apple.png"
                    alt="Apple Icon"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 w-full mt-8 md:mt-0 bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
            <Link
              href="https://book.mylimobiz.com/v4/chicagotrans"
              data-ores-widget="quickres"
              data-ores-alias="chicagotrans"
              data-redirect-url="https://book.mylimobiz.com/v4/chicagotrans"
              className="block w-full h-full min-h-[400px]"
            ></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
