const carData: Record<any, any> = {
  1: {
    name: "Lincoln Aviator",
    images: [
      "/av4.avif",
      "/av5.avif",
      "/aviator.avif",
      "/av2.avif",
      "/av3.avif",
    ],
    perHourRate: "$95 / Hour (2 Hrs Min)",
    perDayRate: "$900 / Day ",
    airportTransfer: "$115-$550 (Depends on destination)",
    passengers: "6 Passengers",
    interior: "Leather Interior",
    features: [
      "Heated Seats",
      "On Board Wi-Fi",
      "Phone Charger",
      "Soft Drinks",
    ],
    services: [
      "Airport Transfer",
      "Airline Tracking",
      "As Directed",
      "Baby Seat",
      "Dedicated Chauffeur Service",
      "Meet & Greet",
      "Nightlife Service",
      "Interstate Transfer",
      "Point to Point",
    ],
    overview:
      "The sedan is one of our customer favorites. With tinted windows, a great sound system, and room for all your luggage, you’ll travel without a care.",
  },

  2: {
    name: "Cadillac CT6 Sedan",
    images: [
      "/cadilac-ct6-slide-4.png",
      "/cadilac-ct6-slide-1.avif",
      "/cadilac-ct6-slide-3.avif",
    ],
    perHourRate: "$95 / Hour (3 Hrs Min)",
    perDayRate: "$900 / Day ",
    airportTransfer: "$115-$550 (Depends on destination)",
    passengers: "3 Passengers",
    interior: "Leather Interior",
    features: ["Heated Seats", "On Board Wi-Fi", "Phone Charger"],
    services: [
      "Airport Transfer",
      "Airline Tracking",
      "As Directed",
      "Baby Seat",
      "Dedicated Chauffeur Service",
      "Meet & Greet",
      "Nightlife Service",
      "Interstate Transfer",
      "Point to Point",
    ],
    overview:
      "The Cadillac CT6 is a luxury sedan with top-notch comfort and advanced features for a premium ride experience.",
  },
  3: {
    name: "Mercedes Premier Sedan",
    images: [
      "/car_01-768x510-removebg-preview.png",
      "/sedan31.webp",
      "/sedan32.jpg",
    ],
    perHourRate: "$250 / Hour (3 Hrs Min)",
    perDayRate: "$2400 / Day ",
    airportTransfer: "$225-$675 (Depends on destination)",
    passengers: "3 Passengers",
    interior: "Leather Interior",
    features: ["Heated Seats", "On Board Wi-Fi", "Phone Charger"],
    services: [
      "Airport Transfer",
      "Airline Tracking",
      "As Directed",
      "Baby Seat",
      "Dedicated Chauffeur Service",
      "Meet & Greet",
      "Nightlife Service",
      "Interstate Transfer",
      "Point to Point",
    ],
    overview:
      "A premium sedan that combines luxury and performance, perfect for discerning travelers.",
  },
  4: {
    name: "Lincoln Navigator SUV",
    images: ["/pngegg (1).png", "/suv11.webp", "/suv12.webp"],
    perHourRate: "$125 / Hour (3 Hrs Min)",
    perDayRate: "$1400 / Day ",
    airportTransfer: "$125-$760 (Depends on destination)",
    passengers: "6 Passengers",
    interior: "Black Leather Interior",
    features: [
      "Heated Seats",
      "On Board Wi-Fi",
      "Phone Charger",
      "DVD Player",
      "$3.00 Per Hour Fuel Surcharge",
    ],
    services: [
      "Airport Transfer",
      "As Directed",
      "Dedicated Chauffeur Service",
      "Meet & Greet",
      "Nightlife Service",
      "Interstate Transfer",
      "Point to Point",
    ],
    overview:
      "A luxury SUV designed for any journey, offering all modern amenities and exceptional comfort.",
  },
  5: {
    name: "Cadillac Escalade SUV",
    images: [
      "/download.png",
      "/cd2.jpg",
      "/cad5.jpg",
      "/cadilac.png",
      "/cadilac-slide-4.jpg",
      "/cadillac-suv-slide-3.avif",
    ],
    perHourRate: "$145 / Hour (3 Hrs Min)",
    perDayRate: "$1440 / Day ",
    airportTransfer: "$145-$780 (Depends on destination)",
    passengers: "6 Passengers",
    interior: "Black Leather Interior",
    features: [
      "Heated Seats",
      "On Board Wi-Fi",
      "Phone Charger",
      "DVD Player",
      "Soft Drinks",
    ],
    services: [
      "Airport Transfer",
      "As Directed",
      "Dedicated Chauffeur Service",
      "Meet & Greet",
      "Nightlife Service",
      "Interstate Transfer",
      "Point to Point",
    ],
    overview:
      "A luxury SUV offering comfort, technology, and versatility for every journey.",
  },
  6: {
    name: "Sprinter Executive Van",
    images: [
      "/pngegg (5).png",
      "/sprinter-slide-1.avif",
      "/sprinter-slide-2.avif",
    ],
    perHourRate: "$195 / Hour (3 Hrs Min)",
    perDayRate: "$1920 / Day ",
    airportTransfer: "$350-$780 (Depends on destination)",
    passengers: "10 Passengers",
    interior: "Leather Seats",
    features: ["TV", "WiFi", "Soft Drinks & Snacks", "Max Radio"],
    services: [
      "Airport Transfer",
      "As Directed",
      "Dedicated Chauffeur Service",
      "Greeter",
      "Nightlife Service",
      "Interstate Transfer",
      "Point to Point",
    ],
    overview:
      "Executive Sprinters are a luxurious choice for group transportation, perfect for corporate events or VIP clients.",
  },

  7: {
    name: "Transit Van",
    images: [
      "/pngwing.com (1).png",
      "/transit-slide-1.jpg",
      "/transit-slide-2.jpg",
    ],
    perHourRate: "$130 / Hour (2 Hrs Min)",
    perDayRate: "$1320 / Day ",
    airportTransfer: "$220-$650 (Depends on destination)",
    passengers: "10 Passengers",
    interior: "Black Leather Interior",
    features: ["On Board Wi-Fi", "Phone Charger"],
    services: [
      "Airport Transfer",
      "Dedicated Chauffeur Service",
      "Meet & Greet",
      "Nightlife Service",
      "Point-to-Point Service",
      "Interstate Transfer",
    ],
    overview:
      "Transit Van offers spacious, comfortable rides with a focus on group travel. Perfect for family or corporate events.",
  },
  8: {
    name: "Sprinter Limo",
    images: [
      "/pngegg (5).png",
      "/sprinter-slide-1.avif",
      "/sprinter-slide-2.avif",
    ],
    perHourRate: "$175 / Hour (3 Hrs Min)",
    perDayRate: "$1680 / Day ",
    airportTransfer: "$120-$150 (Depends on destination)",
    passengers: "12 Passengers",
    interior: "Black Leather Interior",
    features: [
      "TV & Disco Light",
      "Bar & Cooler",
      "DVD Player",
      "On Board Wi-Fi",
      "Phone Charger",
    ],
    services: [
      "Airport Transfer",
      "As Directed",
      "Dedicated Chauffeur Service",
      "Greeter",
      "Nightlife Service",
      "Interstate Transfer",
      "Point to Point",
    ],
    overview:
      "Sprinter Limo vans offer luxury and entertainment, making them perfect for parties and VIP travel.",
  },
  9: {
    name: "Ford Party Bus Limo",
    images: [
      "/pngegg (6) (1).png",
      "/ford-bus-slide-1.jpg",
      "/ford-bus-slide-2.jpg",
    ],
    perHourRate: "$300 / Hour (3 Hrs Min)",
    perDayRate: "$2880 / Day ",
    airportTransfer: "$750-$1500 (Depends on destination)",
    passengers: "25 Passengers",
    interior: "Black Leather Interior",
    features: [
      "Heated Seats",
      "DVD Player",
      "On Board Wi-Fi",
      "Phone Charger",
      "Disco Light",
      "Bar & Cooler",
    ],
    services: [
      "Airport Transfer",
      "As Directed",
      "Dedicated Chauffeur Service",
      "Meet & Greet",
      "Nightlife Service",
      "Interstate Transfer",
      "Point to Point",
    ],
    overview:
      "With space for up to 25 passengers, the Ford Party Bus Limo is the ultimate choice for celebrations and large group events.",
  },
  10: {
    name: "45 Passenger Bus",
    images: ["/pngegg (6) (1).png", "/bus21.webp", "/bus22.webp"],
    perHourRate: "$278 / Hour (3 Hrs Min)",
    perDayRate: "$2400 / Day ",
    airportTransfer: "Starting $450 (Depends on destination)",
    passengers: "45 Passengers",
    interior: "Leather Seats",
    features: ["WIFI", "TV", "Soft Drinks"],
    services: [
      "Airport Transfer",
      "As Directed",
      "Dedicated Chauffeur Service",
      "Meet & Greet",
      "Nightlife Service",
      "Interstate Transfer",
      "Point to Point",
    ],
    overview:
      "The 45 Passenger Bus offers comfort and convenience for large groups, equipped with modern amenities for a great journey.",
  },

  // Continue for all remaining vehicles (e.g., Transit Van, Sprinter Limo, Ford Party Bus, 45 Passenger Bus)...
};

export default carData;
