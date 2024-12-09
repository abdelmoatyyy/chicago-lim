import React from "react";

const CompanyStory: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Who We Are?
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Chicago Trans Limousine & Shuttle has been family-owned and
              operated since 2003. Our company has over decades of experience in
              the private luxury black car, limousine, and ground transportation
              industries. We started in Chicago and have grown our reach to
              Iowa, Indiana, Wisconsin, and Michigan over the years!
            </p>
            <p>
              Being a leader in the livery industry has solidified our
              understanding of the basic needs of every passenger, corporate
              administrator, and travel agent: safety, security, privacy, and
              timeliness. We are committed to providing the best experience in
              business and leisure travel.
            </p>
            <p>
              Every client we service, whether for business meetings, airport
              transportation, tours, weddings, a night out, or special events;
              will receive our concentrated individual attention. We are a
              technology-based company that allows us to keep you, corporate
              administrators, or the travel agent "in the know" with SMS/Email
              Notifications on every ride.
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className=" rounded-lg overflow-hidden shadow-lg">
            <img
              src="/WhatsApp Image 2024-12-05 at 4.58.30 AM (1).jpeg"
              alt="Chicago Trans Limousine"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
