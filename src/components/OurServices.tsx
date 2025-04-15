import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
  const services = [
    {
      title: "Airport Transfers",
      icon: "/service-icon-6.png",
      description:
        "Our airport service in Chicago O’Hare and Midway airport in the Chicagoland area is top-notch, serving the city of Chicago and its suburbs with reliable and convenient transportation options.",
      link: "airport",
    },
    {
      title: "Interstate",
      icon: "/599167-200.png",
      description:
        "Our shuttle and limousine service offers convenient and luxurious transportation between Chicago O’Hare and Midway airports to Indiana, Michigan, Wisconsin, and Iowa.",
      link: "interstate",
    },
    {
      title: "Sports & Night Out",
      icon: "/service-icon-1.png",
      description:
        "Experience sports fan night out with our exclusive Cubs or White Sox night out tour in the vibrant city of Chicago. Whether you’re cheering on the Cubs at Wrigley or...",
      link: "night",
    },
    {
      title: "Weddings",
      icon: "/wedding-icon-2048x1944-0arouhyb-1.png",
      description:
        "At our Limousine Service, we go above and beyond to make your wedding day truly special. From picking up the bride in a beautifully decorated Limousine to rolling out the red carpet and serving champagne.",
      link: "wedding",
    },
    {
      title: "Conventions & Event",
      icon: "/meeting.png",
      description:
        "At our transportation service, we specialize in providing top-notch limo and car services for conventions and meetings at McCormick Place in Chicago.",
      link: "conv-event",
    },
    {
      title: "Nation & World Wide",
      icon: "/world.png",
      description:
        "Our worldwide transportation service, where we provide top-notch transportation solutions for over 300 cities in the United States and internationally.",
      link: "worldwide",
    },
  ];

  return (
    <>
      <section
        id="services"
        className="relative py-8 text-gray-100 sm:py-12 lg:py-16"
      >
        {/* Overlay for the entire component */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-[#FFD700]">
                Explore
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-[#FFD700] text-3xl sm:text-5xl">
                Our Services
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-300">
                We Offer A Wide Range Of Services To Help Satisfy Your Needs.
              </p>
            </div>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-[#0F0F0F] border border-[#FFD700] shadow-[0_4px_15px_0_rgba(255,215,0,0.5)] rounded-xl h-full flex flex-col"
              >
                <div className="relative p-6 sm:p-9">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="filter invert brightness-150 mx-auto sm:mx-0"
                  />
                  <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#FFD700] sm:mt-6">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-400">
                    {service.description}
                  </p>
                </div>
                <div className="relative p-6 sm:p-9 mt-auto">
                  <Link
                    href={service.link}
                    className="bg-[#FFD700] text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#FFC107] transition-colors duration-300 text-xs sm:text-sm font-semibold shadow-lg"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
