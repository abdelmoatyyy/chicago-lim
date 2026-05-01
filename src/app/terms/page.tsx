import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Chicago TransLimo",
  description:
    "Privacy Policy for ChicagoTrans Limousine Service INC. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We may collect the following categories of personal information:

Information You Provide Directly
- Contact details: name, email address, phone number, mailing address
- Booking and service details: pickup/drop-off addresses, date and time of service, number of passengers, vehicle type requested, special requests (e.g., child seats, accessibility needs)
- Payment information: credit/debit card details or other payment method information (processed securely through third-party processors)
- Identification: driver’s license or government ID (if required for certain services)
- Account information: username, password (if you create an online account)

Information Collected Automatically
- Device and usage data: IP address, browser type, operating system, referring URLs, pages visited, and timestamps
- Cookies and similar technologies: see Section 7 below
- Location data: approximate location derived from IP address or GPS (if you enable it on mobile devices)

Information from Third Parties
- Booking platforms (e.g., third-party reservation systems)
- Business partners or affiliates
- Publicly available sources (limited)`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the collected information for the following purposes:
- To process and fulfill your transportation reservations and provide our limousine services
- To communicate with you regarding bookings, changes, confirmations, and customer service
- To process payments and prevent fraud
- To improve our services, Website functionality, and user experience
- To send marketing communications (newsletters, promotions, special offers) - you may opt out at any time
- To comply with legal obligations and enforce our terms of service
- For internal business purposes such as analytics, auditing, and security`,
  },
  {
    title: "3. Sharing and Disclosure of Your Information",
    content: `We do not sell your personal information. We may share your information in the following situations:
- Service Providers: With trusted third parties who perform services on our behalf (payment processors, booking software providers, drivers/contractors, email marketing services, analytics providers). These parties are contractually obligated to protect your data.
- Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
- Legal Requirements: When required by law, subpoena, court order, or government request. We may also disclose information to protect our rights, property, or safety, or that of our users or the public.
- With Your Consent: In any other situations with your explicit permission.`,
  },
  {
    title: "4. Data Security",
    content: `We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    title: "5. Your Rights and Choices",
    content: `Depending on your location, you may have the following rights regarding your personal information:
- Access, correct, or delete your personal data
- Opt out of marketing communications (click "unsubscribe" in emails or contact us)
- Limit certain processing activities (where applicable under state law, such as Illinois or CCPA/CPRA for California residents)

To exercise these rights, please contact us using the information in Section 11.
We will respond within a reasonable timeframe and may ask for verification of your identity.

Do Not Sell My Personal Information
We do not sell personal information as defined under California or other state privacy laws.`,
  },
  {
    title: "6. Retention of Information",
    content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Typically, booking-related data is kept for 7 years for accounting and legal purposes.`,
  },
  {
    title: "7. Cookies and Tracking Technologies",
    content: `We use cookies, web beacons, and similar technologies to enhance your experience, analyze Website traffic, and deliver personalized content. You can manage cookie preferences through your browser settings. Note that disabling certain cookies may affect Website functionality.`,
  },
  {
    title: "8. Children’s Privacy",
    content: `Our services are not directed to children under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child under 18 without parental consent, we will take steps to delete it.`,
  },
  {
    title: "9. International Users",
    content: `Our services are primarily offered within the United States. If you access our Website from outside the U.S., your information may be transferred to and processed in the United States, where data protection laws may differ from those in your jurisdiction.`,
  },
  {
    title: "10. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. The revised version will be posted on our Website with an updated effective date. We encourage you to review this page periodically to stay informed about how we protect your information.`,
  },
  {
    title: "11. Contact Us",
    content: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:

ChicagoTrans Limousine Service INC
Lincolnwood, Illinois, USA
Email: info@chicagotranslimo.com
Phone: (312)-645-0505
Website: www.chicagotranslimo.com`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 mt-28">
      {/* Hero */}
      <div className="relative border-b border-[#FFD700]/20 py-16 px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD700]/70 mb-3">
          Legal & Privacy
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          ChicagoTrans Limousine Service INC
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {/* Intro */}
        <p className="text-gray-300 leading-relaxed text-base rounded-2xl border border-white/10 bg-white/5 p-6">
          ChicagoTrans Limousine Service INC ("ChicagoTrans") operates
          <span className="text-[#FFD700] font-medium"> chicagotranslimo.com </span>
          and provides premium limousine, transportation, and chauffeured services in Chicago,
          Illinois, and surrounding areas. We are committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your personal
          information when you visit our Website, make a reservation, use our services, or interact
          with us in any other way. By accessing or using our services, you agree to the practices
          described in this Privacy Policy.
        </p>
        <p className="text-gray-400 leading-relaxed text-sm">
          Please read this policy carefully. If you do not agree with it, please discontinue use of
          the Website and services.
        </p>

        <div className="rounded-2xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-5 text-sm text-gray-300">
          <span className="text-[#FFD700] font-semibold">Quick Note:</span> We do not sell your
          personal information.
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 shadow-[0_0_0_1px_rgba(255,215,0,0.06)]"
          >
            <h2 className="text-lg font-bold text-[#FFD700] mb-3">{section.title}</h2>
            <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}

        {/* Divider */}
        <div className="border-t border-[#FFD700]/20 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} ChicagoTrans Limousine Service INC. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
