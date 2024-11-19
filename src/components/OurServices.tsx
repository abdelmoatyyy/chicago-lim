import React from "react";
import Image from "next/image";
const OurServices = () => {
  return (
    <>
      <section id="services" className="py-12  text-gray-100 sm:py-12 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-[#CD9900] dark:text-blue-200">
                Explore
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Our Services
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                We Offer A Wide Range Of Services To Help Satisfy Your Needs.
              </p>
            </div>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-[#FFFAF0] shadow-md rounded-xl h-full">
                <div className="p-9">
                  <Image
                    src="/service-icon-6.png"
                    alt="airpport"
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Airport Transfers
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    Our airport service in Chicago O’Hare and Midway airport in
                    the Chicagoland area is top-notch, serving the city of
                    Chicago and its suburbs with reliable and convenient
                    transportation options.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-[#FFFAF0] shadow-md rounded-xl">
              <div className="p-9">
                <Image
                  src="/599167-200.png"
                  alt="airpport"
                  width={48}
                  height={48}
                />
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Interstate
                </h3>
                <p className="mt-6 text-base text-gray-600">
                  Our shuttle and limousine service offers convenient and
                  luxurious transportation between Chicago O’Hare and Midway
                  airports to Indiana, Michigan, Wisconsin, and Iowa.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-[#FFFAF0] shadow-md rounded-xl h-full">
                <div className="p-9">
                  <Image
                    src="/service-icon-1.png"
                    alt="airpport"
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Sports & Night Out
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    Experience the ultimate sports fan night out with our
                    exclusive Cubs or White Sox night out tour in the vibrant
                    city of Chicago. Whether you’re cheering on the Cubs at
                    Wrigley Field or rooting for the White Sox at Guaranteed
                    Rate Field
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-[#FFFAF0] shadow-md rounded-xl">
              <div className="p-9">
                <Image
                  src="/wedding-icon-2048x1944-0arouhyb-1.png"
                  alt="airpport"
                  width={48}
                  height={48}
                />
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Weddings
                </h3>
                <p className="mt-6 text-base text-gray-600">
                  At our Limousine Service, we go above and beyond to make your
                  wedding day truly special. From picking up the bride in a
                  beautifully decorated Limousine to rolling out the red carpet
                  and serving champagne
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-[#FFFAF0] shadow-md rounded-xl h-full">
                <div className="p-9">
                  <Image
                    src="/meeting.png"
                    alt="airpport"
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Conventions & Event
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    At our transportation service, we specialize in providing
                    top-notch limo and car services for conventions and meetings
                    at McCormick Place in Chicago.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-[#FFFAF0] shadow-md rounded-xl">
              <div className="p-9">
                <Image src="/world.png" alt="airpport" width={48} height={48} />
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Nation & World Wide
                </h3>
                <p className="mt-6 text-base text-gray-600">
                  Our worldwide transportation service, where we provide
                  top-notch transportation solutions for over 300 cities in the
                  United States and internationally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
