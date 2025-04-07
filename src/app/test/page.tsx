"use client";

import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
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
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-12 py-16 mt-12 font-sans">
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
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="space-y-6 text-white">
          <Typography
            variant="h1"
            className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] leading-tight tracking-tight font-serif"
          >
            Luxury Limousine Services <br /> in the Heart of Chicago
          </Typography>
          <Typography
            variant="paragraph"
            className="text-base md:text-lg text-gray-300 leading-relaxed tracking-wide"
          >
            Ride in style with{" "}
            <span className="text-[#D4AF37] font-semibold">
              Chicago Translimo
            </span>
            . Exceptional comfort, punctuality, and professionalism—your premium
            ride awaits.
          </Typography>
          <Button
            size="lg"
            className="bg-[#D4AF37] text-black rounded-xl shadow-md hover:shadow-lg transition duration-300 text-base md:text-lg font-semibold tracking-wide"
          >
            Explore Fleet
          </Button>
        </div>

        {/* Right Reservation Form */}
        <Card className="bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl p-4 mx-auto md:mx-0">
          <CardBody className="p-2">
            <div className="w-full h-[670px] overflow-hidden rounded-lg">
              <Link
                href="https://book.mylimobiz.com/v4/chicagotrans"
                data-ores-widget="quickres"
                data-ores-alias="chicagotrans"
                data-redirect-url="https://book.mylimobiz.com/v4/chicagotrans"
                className="block w-full h-full"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
