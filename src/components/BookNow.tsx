"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { Apple, AppleIcon } from "lucide-react";
import Image from "next/image";

const BookNow = () => {
  return (
    <div id="book-now" className="py-12 relative">
      {/* Add dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10">
        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
          <p className="text-base font-semibold uppercase tracking-wide text-[#FFD700] dark:text-[#FFD700]">
            Try Us
          </p>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl">
            BOOk NOW
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-300">
            Book Your Ride Now
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-16">
          <div>
            <ul className="mt-8 space-y-6 font-medium">
              <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#FFD700]"
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
                <p className="ml-3 leading-5 text-gray-200 text-xl">
                  Comfort and luxury Competitive Rates
                </p>
              </li>
              <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#FFD700]"
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
                <p className="ml-3 leading-5 text-gray-200 text-xl">
                  Impeccable customer service
                </p>
              </li>
              <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#FFD700]"
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
                <p className="ml-3 leading-5 text-gray-200 text-xl">
                  First-class experience
                </p>
              </li>
              <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#FFD700]"
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
                <p className="ml-3 leading-5 text-gray-200 text-xl">
                  Professional chauffeurs Sit back, relax, and enjoy the ride .
                </p>
              </li>
              <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#FFD700]"
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
                <p className="ml-3 leading-5 text-gray-200 text-xl">
                  Punctuality and reliability Wide Range of Vehicles
                </p>
              </li>
              <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#FFD700]"
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
                <p className="ml-3 leading-5 text-gray-200 text-xl">
                  Personalized service from professional Chauffeur & vehicle
                </p>
              </li>
              <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#FFD700]"
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
                <p className="ml-3 leading-5 text-gray-200 text-xl">
                  Get benefit from Our reward program
                </p>
              </li>
            </ul>
            <div className="mt-16 w-full">
              <Link
                className="mb-5 mx-2 px-8 py-5 w-full text-md md:text-xl text-center text-black font-bold bg-[#FFD700] rounded-xl hover:shadow-lg transition-shadow duration-300"
                href="https://book.mylimobiz.com/v4/(S(iyhgctydwk54dkz0us3bwvlp))/chicagotrans"
              >
                Using Iphone Or Safari ? Reserve Here{" "}
                <Image
                  className="inline"
                  src="/apple.png"
                  alt="Apple Icon"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <Link
              href="https://book.mylimobiz.com/v4/chicagotrans"
              data-ores-widget="quickres"
              data-ores-alias="chicagotrans"
              data-redirect-url="https://book.mylimobiz.com/v4/chicagotrans"
            ></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
