import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Chicago TransLimo",
  description:
    "Terms and conditions for ChicagoTrans Limousine & Shuttle Service. Read our booking, cancellation, and service policies.",
};

const sections = [
  {
    title: "1. Agreement to Terms",
    content: `By booking or using any service provided by ChicagoTrans Limousine & Shuttle Service ("ChicagoTrans," "we," "us," or "our"), you ("Client," "you") agree to be bound by these Terms and Conditions. If you do not agree, please do not proceed with a reservation. These terms apply to all transportation services including sedans, SUVs, vans, motorcoaches, and charter buses.`,
  },
  {
    title: "2. Reservations & Booking",
    content: `All reservations must be made in advance via our website, phone, or authorized booking channels. A reservation is only confirmed upon receipt of a booking confirmation from ChicagoTrans. We reserve the right to decline any reservation at our discretion. Accurate passenger counts, pickup addresses, flight numbers, and contact information must be provided at time of booking — errors may result in delays or additional charges. Reservations are subject to vehicle availability.`,
  },
  {
    title: "3. Payment Terms",
    content: `ChicagoTrans accepts Visa, MasterCard, Discover, and American Express. Full payment or a valid credit card authorization is required to confirm a reservation. Rates are quoted in US Dollars (USD). For hourly bookings, billing begins at the scheduled pickup time and ends when the vehicle is released by the client. Additional wait time, tolls, parking fees, and any other incidentals are billed separately and are the responsibility of the client.`,
  },
  {
    title: "4. Cancellation Policy",
    content: `Cancellations must be submitted in writing via email or through our booking system. The following cancellation schedule applies:

• Cancellations made 72 hours or more before scheduled pickup: Full refund issued.
• Cancellations made 24–71 hours before scheduled pickup: 50% of the total fare will be charged.
• Cancellations made less than 24 hours before scheduled pickup: 100% of the total fare will be charged.
• No-shows (client fails to appear at scheduled pickup location): 100% of the total fare will be charged.

For group charters and motorcoach bookings, separate cancellation terms may apply and will be specified at the time of booking.`,
  },
  {
    title: "5. Airport Transfers",
    content: `ChicagoTrans provides complimentary airport shuttle service to and from O'Hare International Airport (ORD) and Midway International Airport (MDW). For inbound airport pickups, our driver will monitor your flight for delays and adjustments at no extra charge. A grace period of 60 minutes is included after the actual landing time for domestic flights and 90 minutes for international flights. Time beyond the grace period is billed at the standard wait-time rate. Clients must provide accurate flight information at booking. ChicagoTrans is not responsible for missed pickups resulting from incorrect flight details.`,
  },
  {
    title: "6. Wait Time",
    content: `For non-airport pickups, a grace period of 15 minutes is included at no charge. Wait time beyond the grace period will be billed at the applicable hourly rate prorated per 15-minute increment. ChicagoTrans will attempt to contact the client before releasing the vehicle after the grace period expires.`,
  },
  {
    title: "7. Gratuity",
    content: `Gratuity is not included in quoted rates unless explicitly stated. A standard gratuity of 18–20% is customary and appreciated. For group charters, an automatic service charge may be applied and will be disclosed at time of booking.`,
  },
  {
    title: "8. Conduct & Vehicle Care",
    content: `Clients are responsible for the conduct of all passengers in the vehicle. The following are strictly prohibited:

• Smoking or vaping inside any ChicagoTrans vehicle.
• Consumption of illegal substances.
• Abusive, threatening, or disorderly behavior toward drivers or staff.
• Tampering with vehicle equipment or safety features.

Any damage to a vehicle caused by a client or their party — including but not limited to stains, spills, or vandalism — will be assessed and billed to the client. A minimum cleaning fee of $250 applies for excessive soiling. ChicagoTrans reserves the right to terminate any trip without refund if passenger conduct endangers the safety of the driver or others.`,
  },
  {
    title: "9. Capacity & Luggage",
    content: `Vehicle passenger capacity must not be exceeded at any time. Clients are responsible for ensuring all passengers and luggage fit within the booked vehicle. Overloading a vehicle is a safety violation and grounds for refusal of service without refund. ChicagoTrans is not liable for items left behind in any vehicle; however, we will make reasonable efforts to reunite clients with lost items.`,
  },
  {
    title: "10. Liability Limitation",
    content: `ChicagoTrans maintains all required commercial transportation insurance. However, our liability is limited to direct damages arising from proven negligence on our part. We are not liable for:

• Delays caused by traffic, weather, road closures, or other circumstances beyond our control.
• Missed flights, events, or appointments due to unforeseen delays.
• Loss or damage to personal property, luggage, or cargo.
• Indirect, incidental, or consequential damages of any kind.

Maximum liability to any client for any single incident shall not exceed the total fare paid for that service.`,
  },
  {
    title: "11. Force Majeure",
    content: `ChicagoTrans shall not be held liable for failure to perform obligations resulting from circumstances beyond our reasonable control, including but not limited to acts of God, extreme weather, natural disasters, civil unrest, government action, pandemics, or mechanical breakdowns. In such cases, we will make every effort to arrange alternative transportation and will issue refunds or credits where applicable.`,
  },
  {
    title: "12. Subcontracting",
    content: `ChicagoTrans reserves the right to subcontract services to a vetted affiliate carrier to fulfill a booking when necessary. In such cases, all terms herein remain in effect and the standard of service provided will meet ChicagoTrans quality requirements.`,
  },
  {
    title: "13. Military Discounts",
    content: `ChicagoTrans proudly offers discounts for active-duty military personnel and veterans. Valid military identification must be presented at time of booking or pickup to receive the discount. Discounts cannot be combined with other promotions.`,
  },
  {
    title: "14. Governing Law",
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of the State of Illinois. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Cook County, Illinois.`,
  },
  {
    title: "15. Amendments",
    content: `ChicagoTrans reserves the right to update or modify these Terms and Conditions at any time. Changes take effect upon posting to our website. Continued use of our services after any modification constitutes acceptance of the revised terms. We encourage clients to review this page periodically.`,
  },
  {
    title: "16. Contact Us",
    content: `For questions about these Terms and Conditions or any of our services, please contact us:

ChicagoTrans Limousine & Shuttle Service
7339 N. Keystone Ave., Lincolnwood, IL 60712
Phone: (312) 961-5500 or (312) 473-1124
Website: chicagotranslimo.com`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 mt-28">
      {/* Hero */}
      <div className="relative border-b border-[#FFD700]/20 py-16 px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#FFD700]/70 mb-3">
          Legal
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Last updated: May 1, 2025 &nbsp;·&nbsp; ChicagoTrans Limousine &amp; Shuttle Service
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {/* Intro */}
        <p className="text-gray-300 leading-relaxed text-base">
          Please read these Terms and Conditions carefully before booking any service with{" "}
          <span className="text-[#FFD700] font-medium">
            ChicagoTrans Limousine &amp; Shuttle Service
          </span>
          . These terms govern all reservations, transportation services, and interactions with our
          company. By completing a booking you acknowledge that you have read, understood, and agree
          to be bound by all terms below.
        </p>

        {/* Sections */}
        {sections.map((section) => (
          <div key={section.title} className="border-l-2 border-[#FFD700]/40 pl-6">
            <h2 className="text-lg font-bold text-[#FFD700] mb-3">{section.title}</h2>
            <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}

        {/* Divider */}
        <div className="border-t border-[#FFD700]/20 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} ChicagoTrans Limousine &amp; Shuttle Service. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
