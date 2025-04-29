export default function Testimonials() {
  return (
    <div className="py-16 font-[sans-serif] relative bg-gray-950">
      <div className="absolute inset-0 bg-black opacity-50 z-0 bg-[url('/testimonial-pattern.png')] bg-repeat"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-center">
            <p className="inline-block px-3 py-1 text-sm font-semibold uppercase tracking-wider text-[#FFD700] bg-[#FFD700]/10 rounded-full mb-3">
              What Our Customers Say
            </p>
            <h2 className="font-heading mb-6 font-bold tracking-tight text-gray-100 text-3xl sm:text-5xl">
              Customer Testimonials
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300 leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our valued
              customers have to say about their experience with Chicago Trans
              Limo.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {/* Testimonial Card 1 */}
          <div className="w-full p-8 rounded-xl mx-auto bg-gradient-to-b from-gray-800 to-gray-900 relative border border-gray-700 shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl group">
            <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <img
                  src="/user.png"
                  alt="James Parker"
                  className="w-20 h-20 rounded-full border-4 border-[#FFD700]/30 object-cover shadow-lg"
                />
              </div>

              <div className="absolute -top-4 -left-1 text-6xl text-[#FFD700]/20 font-serif">
                "
              </div>
              <p className="text-gray-200 leading-relaxed mb-6 italic">
                I couldn't have asked for a better limousine experience in
                Chicago! The driver was punctual, professional, and incredibly
                polite. The car itself was spotless, luxurious, and
                well-equipped with everything we needed for a smooth ride.
              </p>
              <div className="absolute -bottom-4 -right-1 text-6xl text-[#FFD700]/20 font-serif">
                "
              </div>

              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-[#FFD700] group-hover:animate-pulse"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>

              <h4 className="text-lg font-bold text-white">James Parker</h4>
              <p className="text-sm text-[#FFD700]">
                Chicago, Business Executive
              </p>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="w-full p-8 rounded-xl mx-auto bg-gradient-to-b from-gray-800 to-gray-900 relative border border-gray-700 shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl group">
            <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <img
                  src="/user.png"
                  alt="Karolina Adair"
                  className="w-20 h-20 rounded-full border-4 border-[#FFD700]/30 object-cover shadow-lg"
                />
              </div>

              <div className="absolute -top-4 -left-1 text-6xl text-[#FFD700]/20 font-serif">
                "
              </div>
              <p className="text-gray-200 leading-relaxed mb-6 italic">
                Absolutely stellar service! The limousine arrived right on time,
                and the driver was courteous and accommodating. The attention to
                detail was impeccable — we felt like royalty driving through
                Chicago.
              </p>
              <div className="absolute -bottom-4 -right-1 text-6xl text-[#FFD700]/20 font-serif">
                "
              </div>

              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-[#FFD700] group-hover:animate-pulse"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>

              <h4 className="text-lg font-bold text-white">Karolina Adair</h4>
              <p className="text-sm text-[#FFD700]">
                Evanston, Wedding Planner
              </p>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="w-full p-8 rounded-xl mx-auto bg-gradient-to-b from-gray-800 to-gray-900 relative border border-gray-700 shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl group">
            <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <img
                  src="/user.png"
                  alt="Michael Brooks"
                  className="w-20 h-20 rounded-full border-4 border-[#FFD700]/30 object-cover shadow-lg"
                />
              </div>

              <div className="absolute -top-4 -left-1 text-6xl text-[#FFD700]/20 font-serif">
                "
              </div>
              <p className="text-gray-200 leading-relaxed mb-6 italic">
                I am beyond impressed with this limousine service in Chicago.
                Booking was straightforward, the vehicle was stunning, and the
                driver was incredibly professional. 10/10 would recommend!
              </p>
              <div className="absolute -bottom-4 -right-1 text-6xl text-[#FFD700]/20 font-serif">
                "
              </div>

              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-[#FFD700] group-hover:animate-pulse"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>

              <h4 className="text-lg font-bold text-white">Michael Brooks</h4>
              <p className="text-sm text-[#FFD700]">
                Oak Park, Corporate Client
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
