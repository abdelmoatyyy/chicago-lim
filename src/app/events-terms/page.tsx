import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Terms & Agreement | Chicago TransLimo",
  description:
    "ChicagoTrans Limousine Event Transportation Terms and Conditions Agreement.",
};

const sections = [
  {
    title: "1. Payment Terms",
    content: `- Sprinter Transit, Limo Bus, Party Bus, or Motor Coach bookings: Full payment of the total booking amount (including all taxes, fees, gratuity, and tolls) is required no later than seven (7) calendar days prior to the scheduled pickup time.
- Sedan and SUV bookings: Payment terms will be specified in the individual booking confirmation. Unless otherwise stated, the balance is due at the time of service or as agreed in writing.
- All payments are non-refundable except as expressly provided in the Cancellation Policy below. Accepted payment methods include credit/debit card, ACH/wire transfer, or cashier's check.`,
  },
  {
    title: "2. Cancellation Policy",
    content: `Cancellations must be made in writing (email or through the booking portal) and will be effective only upon receipt and written confirmation by the Company.

- Sprinter Transit, Limo Bus, Party Bus, or Motor Coach: Any cancellation received less than seven (7) calendar days before the scheduled pickup time will result in a full charge equal to 100% of the total booking amount. No refunds or credits will be issued. Cancellations with seven (7) or more days' notice may be eligible for a refund of the deposit or paid amount, less any non-refundable processing fees (maximum 5%).
- Sedan and SUV: Cancellation fees will be assessed on an hourly basis. The chargeable period begins at the scheduled pickup time and continues for the duration of the originally booked service (or the Company's minimum hourly requirement, whichever is greater).
  - Cancellations received with sufficient advance notice (as specified in your booking confirmation) may incur no fee or a reduced fee.
  - Cancellations received within the final hours prior to pickup will be charged at the full hourly rate for the booked period starting from the scheduled pickup time.`,
  },
  {
    title: "3. Client Responsibility for Damages and Vehicle Condition",
    content: `The Client is fully responsible and liable for any damage, excessive soiling, or loss incurred to any vehicle during the provision of Services. This includes, but is not limited to, the Sprinter Transit, Limo Bus, Party Bus, Motor Coach, Sedan, or SUV.

- The Client, their guests, and invitees must treat the vehicle with care and respect.
- The Client agrees to pay, immediately upon demand, the full cost of repairs, professional cleaning, or replacement value of any damaged or soiled items (including upholstery, flooring, windows, electronics, or exterior).
- The Company reserves the right to charge the Client's credit card on file or invoice the Client directly for all such costs.
- The Client remains responsible even if the damage is caused by a third party under their booking.`,
  },
  {
    title: "4. No-Show and Late Arrival Policy",
    content: `If the Client or their party fails to appear at the agreed pickup location within 15 minutes of the scheduled time (without prior notice), the booking will be treated as a no-show and the full cancellation fees above will apply. The Company will attempt to contact the Client, but is not obligated to wait beyond the grace period or alter the itinerary.`,
  },
  {
    title: "5. General Provisions",
    content: `- These Terms constitute the entire agreement between the parties regarding payment, cancellation, and damage responsibility. Any modifications must be made in writing and signed by an authorized representative of the Company.
- The Client acknowledges that all bookings are subject to vehicle availability and that the Company may substitute a comparable vehicle if necessary.
- Governing Law: These Terms shall be governed by the laws of the State of Illinois. Any disputes shall be resolved exclusively in the courts located in Cook County, Illinois.
- The Client agrees to indemnify and hold harmless the Company, its officers, employees, and agents from any claims, damages, or liabilities arising from the Client's or their guests' conduct or negligence during the Service.`,
  },
];

export default function EventsTermsPage() {
  return (
    <div className="min-h-screen mt-28 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="border-b border-[#FFD700]/20 px-4 py-16 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD700]/70">
          Event Legal Agreement
        </p>
        <h1 className="mb-4 text-3xl font-bold text-[#FFD700] sm:text-5xl">
          ChicagoTrans Limousine Event Transportation Terms and Conditions Agreement
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-gray-400">
          By confirming a booking, the Client acknowledges that they have read, understood, and
          agree to be bound by these Terms in their entirety.
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-6">
          <p className="text-sm leading-relaxed text-gray-200">
            This Terms and Conditions Agreement ("Terms") sets forth the payment, cancellation, and
            liability policies that govern all limousine and transportation services ("Services")
            provided by ChicagoTrans Limousine, to the customer (____________) for any event,
            wedding, corporate function, or private transportation booking.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/api/events-terms-pdf"
            className="rounded-lg border border-[#FFD700]/50 bg-[#FFD700]/10 px-5 py-3 text-sm font-semibold text-[#FFD700] transition hover:bg-[#FFD700]/20"
            download
          >
            Download Agreement as PDF
          </Link>
        </div>

        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,215,0,0.06)]"
          >
            <h2 className="mb-3 text-lg font-bold text-[#FFD700]">{section.title}</h2>
            <p className="whitespace-pre-line text-sm leading-relaxed text-gray-300">
              {section.content}
            </p>
          </div>
        ))}

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-lg font-bold text-[#FFD700]">Accepted and Agreed</h2>
          <p className="mb-6 whitespace-pre-line text-sm leading-relaxed text-gray-300">
            {`By signing or electronically confirming your booking, you confirm acceptance of these Terms and Conditions.

Client Name: ___________________________    Date: ____________
Signature: _____________________________

ChicagoTrans Limousine
Lincolnwood, Illinois 60712
Email: mina@chicagotranslimo.com
Phone: 312-645-0505`}
          </p>
        </div>
      </div>
    </div>
  );
}
