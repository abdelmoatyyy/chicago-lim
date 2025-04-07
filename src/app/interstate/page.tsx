"use client";
// app/services/airport/page.tsx
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const airportServiceImages = [
  "/inter2.jpg",
  "/inter3.jpg",
  "/interstateee.jpg",
];

export default function AirportServicePage() {
  return (
    <div className="min-h-screen pt-20 relative  text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center ">
            {/* Service Description */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Interstate Transportation
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Travel with confidence and ease through our exclusive Interstate
                Transportation service. Designed for individuals and groups
                seeking luxury and reliability, our service ensures that your
                journey is as seamless and comfortable as your destination.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-white">
                    Punctual and Efficient Long-Distance Travel
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-white">
                    Professional Drivers with Extensive Experience
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-white">
                    Spacious and Well-Equipped Vehicles for Every Journey
                  </span>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/book-now"
                  className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300 text-lg font-semibold shadow-lg"
                >
                  Book Your Interstate Service{" "}
                </Link>
              </div>
            </div>
            {/* Image Carousel */}
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                className="h-[500px] md:h-[600px] w-full"
              >
                {airportServiceImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={img}
                      alt={`Airport Service ${index + 1}`}
                      fill
                      className="object-cover w-full h-full"
                      priority={index === 0}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row items-center">
          <div className="container mx-auto px-4  lg:py-12 ">
            <div className="max-w-4xl mx-auto  shadow-xl rounded-2xl overflow-hidden">
              <div className="p-8 md:p-12 space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 border-b-4 border-amber-600 pb-4">
                  Our Dedication to Your Long-Distance Journey{" "}
                </h2>

                <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-amber-600 first-letter:mr-3 first-letter:float-left">
                    offers convenient and luxurious transportation between
                    Chicago O'Hare and Midway airports to Indiana, Michigan,
                    Wisconsin, and Iowa. Whether you are traveling for business
                    or pleasure, our experienced drivers will ensure a smooth
                    and comfortable journey to your destination
                  </p>

                  <p>
                    With our reliable service, you can sit back, relax, and
                    enjoy the ride while we take care of the rest. Our
                    commitment to customer satisfaction and attention to detail
                    sets us apart, making us the preferred choice for travelers
                    looking for a hassle-free and stylish
                  </p>

                  <p>
                    transportation option in the Midwest region. Book your
                    shuttle or limousine service with us today and experience
                    the difference.
                  </p>

                  <div className=" border-l-4 border-amber-500 p-4 mt-6">
                    <p className="italic font-bold text-white">
                      From the moment you book until the end of your journey,
                      our team works tirelessly to deliver exceptional service.
                      Let us redefine your expectations of interstate travel.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href="/book-now"
                    className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300 text-lg font-semibold shadow-lg"
                  >
                    Book Your Interstate Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="container mx-auto px-4">
              <div className="flex flex-col  gap-12">
                <div className="bg-gray-900 p-6 rounded-xl shadow-md text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-4 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Timely Arrival
                  </h3>
                  <p className="text-gray-300">
                    Ensure on-time departures and arrivals with our reliable
                    scheduling system.
                  </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl shadow-md text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-4 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Route Optimization
                  </h3>
                  <p className="text-gray-300">
                    Benefit from expert planning and real-time adjustments for
                    the fastest, smoothest journeys.
                  </p>
                </div>
                <div className=" p-6 bg-gray-900 rounded-xl shadow-md text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-4 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-300">
                    Enjoy fair and upfront pricing with no hidden fees for peace
                    of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Detailed Service Description */}

        {/* Additional Service Details */}
      </div>
    </div>
  );
}
