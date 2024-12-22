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
    <div className="container mx-auto px-4 py-8 mt-20">
      {/* Header Section */}
      <div className="mb-12 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
        <p className="text-base font-semibold uppercase tracking-wide text-[#CD9900] dark:text-blue-200">
          Explore
        </p>
        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
          {car.name}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
          {car.overview}
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="grid md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={activeImage}
              alt={car.name}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {car.images.map(
              (
                image: string | undefined,
                index: React.Key | null | undefined
              ) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(image)}
                  className={`rounded-lg overflow-hidden transition-all ${
                    activeImage === image
                      ? "ring-2 ring-[#CD9900]"
                      : "opacity-75 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-24 object-cover"
                  />
                </button>
              )
            )}
          </div>
        </div>

        {/* Pricing and Details Section */}
        <div className="md:col-span-4 space-y-6">
          {/* Rates */}
          {/* <div className="bg-[#FFFAF0] rounded-xl shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Rates</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#CD9900]" />
                <div>
                  <p className="text-gray-600">Hourly Rate</p>
                  <p className="font-semibold">{car.perHourRate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#CD9900]" />
                <div>
                  <p className="text-gray-600">Daily Rate</p>
                  <p className="font-semibold">{car.perDayRate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Plane className="w-5 h-5 text-[#CD9900]" />
                <div>
                  <p className="text-gray-600">Airport Transfer</p>
                  <p className="font-semibold">{car.airportTransfer}</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Quick Features */}
          <div className="bg-[#FFFAF0] rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Quick Info</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#CD9900]" />
                <span>{car.passengers}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#CD9900]" />
                <span>{car.interior}</span>
              </div>
            </div>
          </div>

          <Link href="/#book-now">
            <button className="w-full bg-[#CD9900] text-white py-4 rounded-xl font-semibold hover:bg-black transition-colors">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Features and Services Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#FFFAF0] rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {car.features.map(
              (
                feature:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined,
                index: React.Key | null | undefined
              ) => (
                <div key={index} className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-[#CD9900]" />
                  <span>{feature}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-[#FFFAF0] rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {car.services.map(
              (
                service:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined,
                index: React.Key | null | undefined
              ) => (
                <div key={index} className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-[#CD9900]" />
                  <span>{service}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
