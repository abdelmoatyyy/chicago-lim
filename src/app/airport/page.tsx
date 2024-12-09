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

const airportServiceImages = ["/ohare.jpg", "/ohare2.jpg", "/midway.jpg"];

export default function AirportServicePage() {
  return (
    <div className="min-h-screen mt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          {/* Service Description */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Airport Transportation
            </h1>
            <p className="text-lg text-black leading-relaxed">
              Experience unparalleled luxury and convenience with our premier
              airport transportation service. Our meticulously maintained fleet
              of high-end vehicles ensures a seamless, comfortable journey to
              and from the airport.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
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
                <span className="text-black">Punctual and Reliable Pickup</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
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
                <span className="text-black">
                  Professional and Courteous Drivers
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
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
                <span className="text-black">
                  Comfortable and Luxurious Vehicles
                </span>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/#book-now"
                className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300 text-lg font-semibold shadow-lg"
              >
                Book Your Airport Service
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-b-4 border-amber-600 pb-4">
                Our Commitment to Your Journey
              </h2>

              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-amber-600 first-letter:mr-3 first-letter:float-left">
                  Our Airport Limousine service is designed to provide a safe
                  and secure transportation experience for families and business
                  people alike. We understand the importance of feeling
                  comfortable and at ease while traveling, especially to and
                  from the airport.
                </p>

                <p>
                  That is why we only hire professional drivers who are trained
                  to provide the highest level of service and care to our
                  customers. Unlike other transportation services, our drivers
                  are not strangers - they are experienced professionals who
                  have been thoroughly screened and vetted to ensure your safety
                  and security.
                </p>

                <p>
                  You can rest assured that you and your loved ones will be in
                  good hands when you choose our Airport Limousine service.
                  Whether you are traveling for business or pleasure, our goal
                  is to make your journey as smooth and stress-free as possible.
                </p>

                <div className=" border-l-4 border-amber-500 p-4 mt-6">
                  <p className="italic font-bold text-black">
                    From the moment you book with us to the moment you arrive at
                    your destination, our team will go above and beyond to
                    ensure your satisfaction. So sit back, relax, and enjoy the
                    ride with our Airport Limousine service.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 flex-col md:flex-row">
                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href="https://www.flychicago.com/ohare/home/pages/default.aspx"
                    className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300 text-lg font-semibold shadow-lg"
                  >
                    Midway Airport
                  </Link>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href="https://www.flychicago.com/midway/home/pages/default.aspx"
                    className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300 text-lg font-semibold shadow-lg"
                  >
                    O'Hare Airport
                  </Link>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href="/#book-now"
                    className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300 text-lg font-semibold shadow-lg"
                  >
                    Book Your Airport Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container mx-auto px-4">
            <div className="flex flex-col  gap-12">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4 text-amber-600"
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
                <h3 className="text-xl font-semibold mb-3">Timely Arrival</h3>
                <p className="text-gray-600">
                  We guarantee on-time pickup and drop-off, ensuring you never
                  miss a flight.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4 text-amber-600"
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
                <h3 className="text-xl font-semibold mb-3">Flight Tracking</h3>
                <p className="text-gray-600">
                  We monitor your flight in real-time to adjust pickup times
                  accordingly.
                </p>
              </div>
              <div className=" p-6 rounded-xl shadow-md text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4 text-amber-600"
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
                <h3 className="text-xl font-semibold mb-3">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600">
                  No hidden fees. Upfront, competitive pricing for all airport
                  transfers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Detailed Service Description */}

      {/* Additional Service Details */}
    </div>
  );
}
