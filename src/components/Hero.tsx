"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Button } from "@/app/MTailwind";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen">
      <Swiper
        speed={600}
        autoplay
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative bg-cover bg-center h-screen bg-[url('/SLIDE_04.jpg')] flex">
            <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-80"></div>
            <div className="md:w-1/2 w-full mt-24 z-10 text-white px-24 py-24 flex flex-col justify-start items-start">
              <h1
                className="text-4xl md:text-6xl font-bold mb-4 md:leading-20 font-['Cinzel']"
                data-swiper-parallax="-300"
              >
                Introducing our premier{" "}
                <span className="text-[#A57D02] ">Limo</span> & car service.
              </h1>
              <p
                className="text-base md:text-lg mb-8 max-w-2xl"
                data-swiper-parallax="-200"
              >
                Indulge in the pinnacle of luxury travel. Our fleet of
                meticulously maintained limousines offers unparalleled comfort
                and style.
              </p>
              <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
                <Link href="/book-now">
                  <Button
                    variant="gradient"
                    color="amber"
                    size="lg"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Book Now
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    variant="outlined"
                    color="amber"
                    size="lg"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-cover bg-center h-screen bg-[url('/SLIDE_02.jpg')] flex">
            <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-80"></div>
            <div className="md:w-1/2 mt-24 z-10 text-white px-24 py-24 flex flex-col justify-start items-start">
              <h1
                className="text-4xl md:text-6xl font-bold mb-4 font-['Cinzel'] md:leading-20"
                data-swiper-parallax="-300"
              >
                Your <span className="text-[#CD9900]">Comfort</span>, Our{" "}
                Priority
              </h1>
              <p
                className="text-base md:text-lg mb-8 max-w-2xl"
                data-swiper-parallax="-200"
              >
                Our dedicated chauffeurs are committed to providing exceptional
                service. Sit back, relax, and let us handle the driving while
                you enjoy the journey.
              </p>
              <div className="flex w-full flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Link href="/book-now">
                  <Button
                    variant="gradient"
                    color="amber"
                    size="lg"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Book Now
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    variant="outlined"
                    color="amber"
                    size="lg"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-cover bg-center h-screen bg-[url('/SLIDE_05.jpg')] flex">
            <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-80"></div>
            <div className="md:w-1/2 h-full mt-24 z-10 text-white px-24 py-24 flex flex-col justify-start items-start">
              <h1
                className="text-4xl md:text-6xl font-bold mb-4 font-['Cinzel'] md:leading-20"
                data-swiper-parallax="-300"
              >
                The Art of <span className="text-[#CD9900]">Luxury</span>{" "}
                Limousine Service
              </h1>
              <p
                className="text-base md:text-lg mb-8 max-w-2xl"
                data-swiper-parallax="-200"
              >
                Whether you&apos;re celebrating a special occasion or simply
                seeking a luxurious ride, our limousine service is the perfect
                choice.
              </p>
              <div className="flex w-full  flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Link href="/book-now">
                  <Button
                    variant="gradient"
                    color="amber"
                    size="lg"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Book Now
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    variant="outlined"
                    color="amber"
                    size="lg"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ... More slides */}
      </Swiper>
    </div>
  );
};

export default Hero;
