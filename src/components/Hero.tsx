"use client";

import { useState } from "react";
import Link from "next/link";

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
    <section className="relative w-full px-4 md:px-12 pt-32 pb-4 min-h-screen font-sans">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ChatGPT Image Apr 7, 2025, 12_11_10 PM.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />{" "}
      {/* Dark overlay for better readability */}
      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center space-y-12 md:space-y-0">
        {/* Left Content */}
        <div className="space-y-6 text-white">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] leading-tight tracking-tight font-serif"
            title="Luxury Limousine Services"
          >
            Luxury Limousine Services <br /> in the Heart of Chicago
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed tracking-wide">
            Ride in style with{" "}
            <span className="text-[#D4AF37] font-semibold">
              Chicago Translimo
            </span>
            . Exceptional comfort, punctuality, and professionalism—your premium
            ride awaits.
          </p>
          <Link href="/book-now">
            <button className="mt-2 bg-[#D4AF37] text-black rounded-xl shadow-md hover:shadow-lg transition duration-300 text-base md:text-lg font-semibold tracking-wide">
              Book Now
            </button>
          </Link>
        </div>

        {/* Right Reservation Form */}
        <div className="h-full bg-transparent p-8 md:p-24 mx-auto md:mx-0">
          <div className="h-full p-2">
            <div className="w-full h-full overflow-hidden rounded-lg">
              <Link
                href="https://book.mylimobiz.com/v4/chicagotrans"
                data-ores-widget="quickres"
                data-ores-alias="chicagotrans"
                data-redirect-url="https://book.mylimobiz.com/v4/chicagotrans"
                className="block w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
