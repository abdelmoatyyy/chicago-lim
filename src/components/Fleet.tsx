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
      airport: "115 - 550",
      seats: 3,
    },
    {
      id: 2,
      title: "Cadillac CT6 Sedan",
      imageUrl: "/pngegg.png",
      descreption:
        "tinted windows, a great sound system, and room for all your luggage,",
      hour: 95,
      day: 900,
      airport: "115 - 550",
      seats: 3,
    },
    {
      id: 3,
      title: "Mercedes Premier Sedan",
      imageUrl: "/car_01-768x510-removebg-preview.png",
      descreption:
        "tinted windows, a great sound system, and room for all your luggage,",
      hour: 250,
      day: 2400,
      airport: "225 - 675",
      seats: 3,
    },
    {
      id: 4,
      title: "Lincoln Navigator SUV",

      imageUrl: "/pngegg (1).png",
      descreption:
        "You’ll surely have a smooth ride to your destination in all of our incredible Luxury SUVs.",
      hour: 125,
      day: 1400,
      airport: "125 - 760",
      seats: 6,
    },
    {
      id: 5,
      title: "Cadillac Escalade suv",
      imageUrl: "/cadilac.png",
      descreption:
        "In all of our incredible Luxury SUVs, you’ll be sure to have a smooth ride to your destination.",
      hour: 145,
      day: 1440,
      airport: "145 - 780",
      seats: 6,
    },
    {
      id: 6,
      title: "Sprinter Executive Van",

      imageUrl: "/pngegg (5).png",
      descreption:
        "Executive Sprinter Limo vans for all your transportation needs. Our professional chauffeurs will greet you with warmth and make sure you arrive at your destination in style.",
      hour: 195,
      day: 1920,
      airport: "350 - 780",
      seats: 10,
    },
    {
      id: 7,
      title: "Transit Van",
      imageUrl: "/pngwing.com (1).png",
      descreption:
        "ChicagoTrans Limousine and Shuttle is your local Chicago Ground Transportation Service, serving Chicago to Wisconsin, Indiana, Michigan, Ohio and the rest of the world!",
      hour: 130,
      day: 1320,
      airport: "220 - 650",
      seats: 10,
    },
    {
      id: 8,
      title: "Sprinter Limo",
      imageUrl: "/pngwing.com (3).png",
      descreption:
        "Executive Sprinter Limo vans for all your transportation needs. Our professional chauffeurs will greet you with warmth and make sure you arrive at your destination in style. ",
      hour: 95,
      day: 900,
      airport: "115 - 550",
      seats: 4,
    },
    {
      id: 9,
      title: "Ford Party Bus Limo",
      imageUrl: "/pngegg (6) (1).png",
      descreption:
        "With our large 24 to 56-passenger buses, there are no groups too large, or too small! From company team building events, out-of-town travel, airport transportation, music concerts, sporting events, and more.",
      hour: 300,
      day: 2880,
      airport: "750-1500",
      seats: 25,
    },
    {
      id: 10,
      title: "45 Passenger Bus",
      imageUrl: "/pngegg (6) (1).png",
      descreption:
        "Generously accommodates up to 45 passengers with a separate luggage compartment. Our Chicago bus service vehicles are equipped with TV(s), CD/DVD, and AM/FM stereo for your listening enjoyment and relaxation.",
      hour: 278,
      day: 2400,
      airport: "Start 450",
      seats: 45,
    },
  ];

  return (
    <>
      <div id="fleet" className="my-10 h-full">
        {/* Heading Section */}
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-[#CD9900] dark:text-blue-200">
              Explore
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Our Luxurious Fleet
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              Find The Perfect Vehicle For Your Needs
            </p>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="my-16">
          <Swiper
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={false}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full max-w-6xl p-5"
            style={{ paddingBottom: "3rem", paddingTop: "3rem" }} // Ensure space for visible slides
          >
            {/* Each Slide */}
            {data.map((car, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <CarCard
                  id={car.id}
                  title={car.title}
                  imageUrl={car.imageUrl}
                  day={car.day}
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
