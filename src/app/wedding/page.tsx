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

const airportServiceImages = ["/wed.avif", "/wed2.avif", "/wed3.jpg"];

export default function AirportServicePage() {
  return (
    <div className="relative text-white min-h-screen pt-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center ">
            {/* Service Description */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                Wedding
              </h1>
              <p className="text-lg text-gray-100 leading-relaxed">
                Make your special day even more magical with our premier Wedding
                Transportation service. From the ceremony to the reception, our
                luxurious fleet and professional drivers ensure you and your
                guests arrive in style, comfort, and on time.
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
                  <span className="text-gray-100">
                    Elegant and Stylish Vehicles for Every Occasion
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
                      d="M9 12l2 2 4-4m6 2a9 9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-100">
                    Professional and Courteous Chauffeurs
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
                      d="M9 12l2 2 4-4m6 2a9 9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-100">
                    Customized Packages to Suit Your Wedding Needs
                  </span>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/book-now"
                  className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300 text-lg font-semibold shadow-lg"
                >
                  Book Your Wedding Service{" "}
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6 border-b-4 border-amber-600 pb-4">
                  Our Promise for Your Perfect Day
                </h2>

                <div className="text-lg text-gray-200 leading-relaxed space-y-4">
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-amber-600 first-letter:mr-3 first-letter:float-left">
                    Your wedding day deserves perfection, and our Wedding
                    Limousine service is here to deliver just that. We
                    understand the importance of every moment and detail, which
                    is why we prioritize impeccable timing, safety, and
                    elegance.
                  </p>

                  <p>
                    From the moment you step into one of our meticulously
                    maintained vehicles, you’ll experience unparalleled luxury
                    and care. Our professional chauffeurs are not just drivers;
                    they’re trained to provide exceptional service to complement
                    your day’s celebrations.
                  </p>

                  <p>
                    Trust us to make your wedding day transportation not only
                    convenient but also elegant and glamorous. Contact us today
                    to learn more about our personalized wedding packages and
                    let us help you create lasting memories on your special day.
                  </p>

                  <div className=" border-l-4 border-amber-500 p-4 mt-6">
                    <p className="italic font-bold text-gray-100">
                      Let us take the stress out of your wedding day
                      transportation, so you can focus on creating unforgettable
                      memories with your loved ones. Sit back, relax, and let us
                      make your journey as perfect as your destination.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href="/book-now"
                    className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300 text-lg font-semibold shadow-lg"
                  >
                    Book Your Wedding Service
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
                      d="M12 8v4l3 3m6-3a9 9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-3">Timely Arrival</h3>
                  <p className="text-gray-200">
                    Ensure seamless coordination for the bridal party and guests
                    with our punctual service.
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
                      d="M9 12l2 2 4-4m6 2a9 9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-3">
                    Luxurious Ambiance{" "}
                  </h3>
                  <p className="text-gray-200">
                    Enjoy premium comfort and elegance to complement the charm
                    of your wedding day.
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-3">
                    Customizable Options
                  </h3>
                  <p className="text-gray-200">
                    Tailor our service to match your wedding theme and
                    preferences.
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
