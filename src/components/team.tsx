import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/api/placeholder/400/400",
    bio: "Pioneering transportation solutions with over 20 years of industry experience.",
  },
  {
    name: "Jane Smith",
    role: "Operations Manager",
    image: "/api/placeholder/400/400",
    bio: "Ensuring seamless logistics and customer satisfaction for every journey.",
  },
  {
    name: "Mike Johnson",
    role: "Fleet Coordinator",
    image: "/api/placeholder/400/400",
    bio: "Managing our premium fleet to deliver top-notch transportation experiences.",
  },
  {
    name: "Sarah Williams",
    role: "Customer Relations",
    image: "/api/placeholder/400/400",
    bio: "Dedicated to providing exceptional service and personalized support.",
  },
];

const TeamSlider: React.FC = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Meet Our Team
        </h2>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="team-swiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSlider;
