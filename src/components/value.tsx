import React from "react";
import { Shield, Clock, Navigation, Star } from "lucide-react";

const ValueProposition: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Comprehensive safety protocols and professionally trained drivers.",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "Punctual and reliable transportation for all your needs.",
    },
    {
      icon: Navigation,
      title: "Wide Coverage",
      description:
        "Serving Chicago and surrounding states with premium transportation.",
    },
    {
      icon: Star,
      title: "Premium Experience",
      description:
        "Luxury vehicles and personalized service for every journey.",
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md text-center bg-gray-900 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <value.icon className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                {value.title}
              </h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
