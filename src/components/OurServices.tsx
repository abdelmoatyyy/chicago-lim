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
        className="relative py-16 text-gray-100 sm:py-20 lg:py-24 overflow-hidden"
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-10 max-w-3xl text-center md:mx-auto md:mb-16">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase tracking-wider text-black bg-[#FFD700] rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Explore
              </span>
              <h2 className="font-heading mb-6 font-bold tracking-tight text-white text-4xl sm:text-5xl">
                <span className="relative">
                  <span className="relative z-10">Our </span>
                  <span className="relative z-10 text-[#FFD700]">Services</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFD700]"></span>
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-200 leading-relaxed">
                We Offer A Wide Range Of Services To Help Satisfy Your Needs.
              </p>
            </div>
          </div>
          <div className="grid max-w-5xl lg:max-w-7xl grid-cols-1 mx-auto mt-8 gap-y-8 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-[#111111] border border-[#FFD700]/30 shadow-[0_8px_20px_0_rgba(255,215,0,0.3)] rounded-2xl h-full flex flex-col group hover:border-[#FFD700] transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-7 sm:p-8">
                  <div className="bg-[#1A1A1A] p-4 rounded-full inline-flex items-center justify-center mb-6 border border-[#FFD700]/30 group-hover:border-[#FFD700] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={42}
                      height={42}
                      className="filter invert brightness-150"
                    />
                  </div>
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
