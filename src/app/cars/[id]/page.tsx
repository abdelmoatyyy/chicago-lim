"use client";

import { useParams } from "next/navigation";
import React from "react";
import {
  ChevronRight,
  Users,
  Plane,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import carData from "./carsdata";
import Link from "next/link";

export default function CarDetailsPage() {
  const { id } = useParams();
  const idd = id ? +id : null;
  console.log(idd);
  const car = carData[idd!];
  const [activeImage, setActiveImage] = React.useState(car?.images[0]);

  if (!car) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Car not found</h1>
        <p>Please check the URL and try again.</p>
      </div>
    );
  }

  return (
    <div className="relative p-4 pt-10 md:p-20">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-gray-900 dark:text-gray-200">
        <div className="container mx-auto px-4 py-8 pt-20">
          {/* Header Section */}
          <div className="mb-12 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-[#CD9900] dark:text-blue-200">
              Explore
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-2xl sm:text-3xl md:text-5xl">
              {car.name}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-gray-200 dark:text-slate-400">
              {car.overview}
            </p>
          </div>

          {/* Image Gallery Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mb-12 z-20">
            <div className="md:col-span-8 z-20">
              <div className="relative rounded-2xl overflow-hidden shadow-lg z-20">
                <img
                  src={activeImage}
                  alt={car.name}
                  className="w-full h-64 sm:h-80 md:h-[500px] object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 z-20">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(image)}
                    className={`rounded-lg z-20 overflow-hidden transition-all ${
                      activeImage === image
                        ? "ring-2 ring-[#CD9900]"
                        : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-16 sm:h-24 object-cover z-20"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing and Details Section */}
            <div className="md:col-span-4 space-y-6">
              {/* Quick Features */}
              <div className="bg-gray-900 rounded-xl shadow-md p-4 sm:p-6 text-white">
                <h2 className="text-lg sm:text-2xl font-semibold mb-4">
                  Quick Info
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#CD9900]" />
                    <span>{car.passengers}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#CD9900]" />
                    <span>{car.interior}</span>
                  </div>
                </div>
              </div>

              <Link href="/book-now">
                <button className="w-full bg-[#CD9900] text-white py-3 sm:py-4 rounded-xl font-semibold hover:bg-black transition-colors">
                  Book Now
                </button>
              </Link>
            </div>
          </div>

          {/* Features and Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-gray-900 text-white rounded-xl shadow-md p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-semibold mb-4">
                Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#CD9900]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-xl shadow-md p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-semibold mb-4">
                Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                {car.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#CD9900]" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
