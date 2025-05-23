"use client";
import React from "react";
import CarCard from "./CarCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

const Fleet = () => {
  const data = [
    {
      id: 1,
      title: "Lincoln Aviator",
      imageUrl: "/aviator.avif",
      descreption:
        "tinted windows, a great sound system, and room for all your luggage,",
      hour: 95,
      day: 900,
      airport: "$125 All Included",
      seats: 6,
    },
    {
      id: 2,
      title: "Cadillac CT6 Sedan",
      imageUrl: "/pngegg.png",
      descreption:
        "tinted windows, a great sound system, and room for all your luggage,",
      hour: 95,
      day: 900,
      airport: "$125 All Included",
      seats: 3,
    },
    {
      id: 3,
      title: "Mercedes Premier Sedan",
      imageUrl: "/car_01-768x510-removebg-preview.png",
      descreption:
        "tinted windows, a great sound system, and room for all your luggage,",
      hour: 95,
      day: 2400,
      airport: "$125 All Included",
      seats: 3,
    },
    {
      id: 4,
      title: "Lincoln Navigator SUV",
      imageUrl: "/pngegg (1).png",
      descreption:
        "You'll surely have a smooth ride to your destination in all of our incredible Luxury SUVs.",
      hour: 120,
      day: 1400,
      airport: "$150 All Included",
      seats: 6,
    },
    {
      id: 5,
      title: "Cadillac Escalade suv",
      imageUrl: "/download.png",
      descreption:
        "In all of our incredible Luxury SUVs, you'll be sure to have a smooth ride to your destination.",
      hour: 135,
      day: 1440,
      airport: "$165 All Included",
      seats: 6,
    },
    {
      id: 6,
      title: "Sprinter Executive Van",
      imageUrl: "/pngegg (5).png",
      descreption:
        "Executive Sprinter Limo vans for all your transportation needs. Our professional chauffeurs will greet you with warmth and make sure you arrive at your destination in style.",
      hour: 145,
      day: 1920,
      airport: "$225 All Included",
      seats: 10,
    },
    {
      id: 7,
      title: "Transit Van",
      imageUrl: "/pngwing.com (1).png",
      descreption:
        "ChicagoTrans Limousine and Shuttle is your local Chicago Ground Transportation Service, serving Chicago to Wisconsin, Indiana, Michigan, Ohio and the rest of the world!",
      hour: 135,
      day: 1320,
      airport: "$195 All Included",
      seats: 10,
    },
    // {
    //   id: 8,
    //   title: "Sprinter Limo",
    //   imageUrl: "/pngwing.com (3).png",
    //   descreption:
    //     "Executive Sprinter Limo vans for all your transportation needs. Our professional chauffeurs will greet you with warmth and make sure you arrive at your destination in style. ",
    //   hour: 330,
    //   day: 1680,
    //   airport: "N/A (Hourly Only)",
    //   seats: 12,
    // }

    {
      id: 9,
      title: "Ford Party Bus Limo",
      imageUrl: "/pngegg (6) (1).png",
      descreption:
        "With our large 24 to 56-passenger buses, there are no groups too large, or too small! From company team building events, out-of-town travel, airport transportation, music concerts, sporting events, and more.",
      hour: 330,
      day: 2880,
      airport: "N/A (Hourly Only)",
      seats: 25,
    },
    {
      id: 10,
      title: "45 Passenger Bus",
      imageUrl: "/pngegg (6) (1).png",
      descreption:
        "Generously accommodates up to 45 passengers with a separate luggage compartment. Our Chicago bus service vehicles are equipped with TV(s), CD/DVD, and AM/FM stereo for your listening enjoyment and relaxation.",
      hour: 225,
      day: 2400,
      airport: "$650 All Included",
      seats: 45,
    },
  ];

  return (
    <>
      <div id="fleet" className="h-full relative z-20">
        {/* Heading Section */}
        <div className="relative px-4 sm:px-6 lg:px-8">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20 max-w-3xl text-center mx-auto pt-12">
            <p className="text-base font-semibold uppercase tracking-wide text-[#FFD700]">
              Explore
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-100 text-[#FFD700] text-3xl sm:text-5xl">
              Our Luxurious Fleet
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg sm:text-xl text-white">
              Find The Perfect Vehicle For Your Needs
            </p>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative py-8 sm:py-12">
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

          <Swiper
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={false}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-30"
            style={{ paddingBottom: "3rem", paddingTop: "3rem" }}
          >
            {data.map((car, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center relative z-50"
              >
                <CarCard
                  id={car.id}
                  title={car.title}
                  imageUrl={car.imageUrl}
                  hour={car.hour}
                  airport={car.airport}
                  seats={car.seats}
                  description={car.descreption}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Fleet;
