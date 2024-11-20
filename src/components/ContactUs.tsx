import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="dark:bg-slate-800" id="contact-us">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-[#CD9900] dark:text-blue-200">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              We&apos;re here to help you 24/7
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-900 dark:text-slate-400">
                Contact us through any of these platforms for immediate
                assistance. Our team is ready to help you with any inquiries
                about our luxury transportation services.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#CD9900] text-gray-50">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Our Address
                    </h3>
                    <p className="text-gray-900 dark:text-slate-400">
                      7339 N Keystone Ave Lincolnwood IL 60712
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#CD9900] text-gray-50">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-gray-900 dark:text-slate-400">
                      Office: 1-(312)-645-0505
                    </p>
                    <p className="text-gray-900 dark:text-slate-400">
                      Dispatcher: 1(312)961-5500
                    </p>
                    <p className="text-gray-900 dark:text-slate-400">
                      Fax: 1-(312)-473-1124
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#CD9900] text-gray-50">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Working hours
                    </h3>
                    <p className="text-gray-900 dark:text-slate-400">
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p className="text-gray-900 dark:text-slate-400">
                      Saturday & Sunday: 08:00 - 12:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* WhatsApp */}
              <Link
                href="https://wa.me/13129615500"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center rounded-lg bg-[#FFFAF0] p-8 shadow-lg transition-all hover:shadow-xl dark:bg-slate-700"
              >
                <div className="mb-4 rounded-full bg-green-500 p-4 text-white">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  WhatsApp
                </h3>
                <p className="mt-2 text-center text-gray-600 dark:text-slate-400">
                  Chat with us on WhatsApp
                </p>
                <p className="mt-2 text-[#CD9900]">+1 (312) 961-5500</p>
              </Link>

              {/* Email */}
              <Link
                href="mailto:info@chicagotranslimo.com"
                className="group flex flex-col items-center justify-center rounded-lg bg-[#FFFAF0] p-8 shadow-lg transition-all hover:shadow-xl dark:bg-slate-700"
              >
                <div className="mb-4 rounded-full bg-blue-500 p-4 text-white">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Email Us
                </h3>
                <p className="mt-2 text-center text-gray-600 dark:text-slate-400">
                  Send us an email
                </p>
                <p className="mt-2 text-[#CD9900]">info@chicagotranslimo.com</p>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center rounded-lg bg-[#FFFAF0] p-8 shadow-lg transition-all hover:shadow-xl dark:bg-slate-700"
              >
                <div className="mb-4 rounded-full bg-[#0A66C2] p-4 text-white">
                  <Linkedin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  LinkedIn
                </h3>
                <p className="mt-2 text-center text-gray-600 dark:text-slate-400">
                  Connect with us
                </p>
                <p className="mt-2 text-[#CD9900]">Follow our Company</p>
              </Link>

              {/* Book Now */}
              <Link
                href="mailto:book@ctlcss.com"
                className="group flex flex-col items-center justify-center rounded-lg bg-[#FFFAF0] p-8 shadow-lg transition-all hover:shadow-xl dark:bg-slate-700"
              >
                <div className="mb-4 rounded-full bg-[#CD9900] p-4 text-white">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Book Now
                </h3>
                <p className="mt-2 text-center text-gray-600 dark:text-slate-400">
                  Send booking request
                </p>
                <p className="mt-2 text-[#CD9900]">book@ctlcss.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
