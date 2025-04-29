import React from "react";
import Image from "next/image";
import { Button } from "@/app/MTailwind";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div
        id="about-us"
        className="relative w-full py-16 md:py-24 px-6 md:px-12 lg:px-24"
      >
        {/* Background overlay with slightly improved opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Text content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              {/* Decorative accent line */}
              <div className="w-16 h-1 bg-[#CD9900] mb-6 hidden md:block"></div>

              <div className="flex flex-col space-y-6">
                <h1 className="font-['Cinzel'] text-4xl md:text-5xl lg:text-6xl text-white">
                  <span className="text-[#CD9900]">Who We Are?</span>
                </h1>

                <p className="font-['Roboto'] text-base md:text-lg text-gray-300 leading-relaxed">
                  Chicago Trans Limousine & Shuttle has been family-owned and
                  operated since 2003, our company has over decades of
                  experience in the private luxury black car, limousine, and
                  ground transportation industries. We started in Chicago and
                  have grown our reach to Iowa, Indiana, Wisconsin, and Michigan
                  over the years!
                </p>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Being a leader in the livery industry has solidified our
                  understanding of the basic needs of every passenger, corporate
                  administrator, and travel agent: safety, security, privacy,
                  and timeliness. We are committed to providing the best
                  experience in business and leisure travel.
                </p>

                <div className="pt-4">
                  <Button
                    variant="gradient"
                    color="amber"
                    size="lg"
                    className="hover:scale-105 transition-transform"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <Link href="about-us" className="flex items-center gap-2">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Image section with responsive design */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform lg:translate-y-0">
                <div className="w-full h-full">
                  <Image
                    src="/about-limmo.png"
                    alt="Chicago Trans Limousine & Shuttle"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
