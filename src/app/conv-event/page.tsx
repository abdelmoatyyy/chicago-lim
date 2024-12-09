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
  "/WhatsApp Image 2024-12-05 at 4.58.30 AM (4).jpeg",
  "/WhatsApp Image 2024-12-05 at 4.58.30 AM (5).jpeg",
  "/WhatsApp Image 2024-12-05 at 4.58.29 AM (2).jpeg",
  "/WhatsApp Image 2024-12-05 at 4.58.30 AM (6).jpeg",
  "/WhatsApp Image 2024-12-05 at 4.58.30 AM.jpeg",
  "/WhatsApp Image 2024-12-05 at 4.58.30 AM (7).jpeg",
  "/WhatsApp Image 2024-12-05 at 4.58.30 AM (10).jpeg",
  "/WhatsApp Image 2024-12-05 at 4.58.30 AM (3).jpeg",
  "/WhatsApp Image 2024-12-05 at 4.58.29 AM (7).jpeg",
];

export default function AirportServicePage() {
  return (
    <div className="min-h-screen mt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          {/* Service Description */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conventions & Event Transportation
            </h1>
            <p className="text-lg text-black leading-relaxed">
              Elevate your event experience with our exclusive Conventions &
              Event Transportation service. Designed for corporate and private
              events, we offer seamless logistics, ensuring you and your
              attendees arrive in style, comfort, and on schedule.
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
                <span className="text-black">
                  Reliable and Coordinated Event Logistics
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
                  Professional Drivers with Extensive Event Experience
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
                  Spacious and Versatile Vehicles for Groups of All Sizes
                </span>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/#book-now"
                className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300 text-lg font-semibold shadow-lg"
              >
                Book Your Event Service
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
                Our Commitment to Event Excellence
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-amber-600 first-letter:mr-3 first-letter:float-left">
                  Your event deserves flawless execution, and our Conventions &
                  Event Transportation service is here to provide just that.
                  Whether you're attending a corporate convention, a grand gala,
                  or a private celebration, we focus on delivering unmatched
                  professionalism and efficiency.
                </p>

                <p>
                  Our team understands the importance of punctuality and
                  coordination in large-scale events. That’s why we meticulously
                  plan every detail of your transportation, ensuring a smooth
                  and stress-free experience from start to finish.
                </p>

                <p>
                  At our transportation service, we specialize in providing
                  top-notch limo and car services for conventions and meetings
                  at McCormick Place in Chicago. We offer a range of vehicles,
                  including sedans, SUVs, vans, and buses, to cater to the
                  transportation needs of all attendees.
                </p>

                <div className=" border-l-4 border-amber-500 p-4 mt-6">
                  <p className="italic font-bold text-black">
                    From small gatherings to large-scale conventions, we are
                    dedicated to exceeding your expectations with top-notch
                    service and attention to detail. Trust us to make your event
                    transportation seamless and memorable.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <Link
                  href="/#book-now"
                  className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300 text-lg font-semibold shadow-lg"
                >
                  Book Your Event Service
                </Link>
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
                <h3 className="text-xl font-semibold mb-3">On-Time Service</h3>
                <p className="text-gray-600">
                  Perfectly timed pickups and drop-offs to keep your event
                  schedule on track.
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
                <h3 className="text-xl font-semibold mb-3">
                  Customizable Logistics
                </h3>
                <p className="text-gray-600">
                  Tailored plans to meet the unique demands of your event.
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
                  Luxury and Comfort
                </h3>
                <p className="text-gray-600">
                  Ensure a premium experience for attendees with our high-end
                  fleet.
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
