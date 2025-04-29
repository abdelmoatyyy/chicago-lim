import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Linkedin,
  MessageCircle,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="relative " id="contact-us">
      <div className="absolute inset-0 "></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-6">
          <div className="mb-10 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wider text-[#FFD700] dark:text-blue-300 animate-fadeIn">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-white dark:text-white text-3xl sm:text-5xl bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-100 to-[#FFD700] text-transparent">
              Get in Touch
            </h2>
            <div className="mx-auto mb-2 h-1 w-20 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300 dark:text-slate-300">
              We&apos;re here to help you 24/7
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 gap-10 w-full">
            <div className="h-full pr-6 backdrop-blur-sm bg-black/30 rounded-lg p-6 border border-gray-800 shadow-xl">
              <p className="mt-3 mb-10 text-lg text-gray-300 dark:text-slate-300 leading-relaxed">
                Contact us through any of these platforms for immediate
                assistance. Our team is ready to help you with any inquiries
                about our luxury transportation services.
              </p>
              <ul className="mb-6 md:mb-0 space-y-8">
                <li className="flex transition-transform duration-300 hover:translate-x-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD700] to-amber-500 text-gray-900 shadow-lg shadow-amber-500/20">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="mb-2 text-xl font-medium leading-6 text-white">
                      Our Address
                    </h3>
                    <p className="text-gray-300 dark:text-slate-300">
                      7339 N Keystone Ave Lincolnwood IL 60712
                    </p>
                  </div>
                </li>
                <li className="flex transition-transform duration-300 hover:translate-x-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD700] to-amber-500 text-gray-900 shadow-lg shadow-amber-500/20">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="mb-2 text-xl font-medium leading-6 text-white">
                      Contact
                    </h3>
                    <p className="text-gray-300 dark:text-slate-300">
                      Office: 1-(312)-645-0505
                    </p>
                    <p className="text-gray-300 dark:text-slate-300">
                      Dispatcher: 1(312)961-5500
                    </p>
                    <p className="text-gray-300 dark:text-slate-300">
                      Fax: 1-(312)-473-1124
                    </p>
                  </div>
                </li>
                <li className="flex transition-transform duration-300 hover:translate-x-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD700] to-amber-500 text-gray-900 shadow-lg shadow-amber-500/20">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="mb-2 text-xl font-medium leading-6 text-white">
                      Working hours
                    </h3>
                    <p className="text-gray-300 dark:text-slate-300">
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p className="text-gray-300 dark:text-slate-300">
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
                className="group flex flex-col items-center justify-center rounded-lg backdrop-blur-sm bg-black/30 p-8 shadow-xl border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:bg-black/40"
              >
                <div className="mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 p-4 text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                <p className="mt-2 text-center text-gray-300 dark:text-slate-300">
                  Chat with us on WhatsApp
                </p>
                <p className="mt-2 text-[#FFD700] font-medium">
                  +1 (312) 961-5500
                </p>
              </Link>

              {/* Email */}
              <Link
                href="mailto:info@chicagotranslimo.com"
                className="group flex flex-col items-center justify-center rounded-lg backdrop-blur-sm bg-black/30 p-8 shadow-xl border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:bg-black/40"
              >
                <div className="mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-4 text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white">Email Us</h3>
                <p className="mt-2 text-center text-gray-300 dark:text-slate-300">
                  Send us an email
                </p>
                <p className="mt-2 text-[#FFD700] font-medium">
                  info@chicagotranslimo.com
                </p>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/chicagotranslimousine/profilecard/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center rounded-lg backdrop-blur-sm bg-black/30 p-8 shadow-xl border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:bg-black/40"
              >
                <div className="mb-4 rounded-full bg-gradient-to-br from-[#c13584] to-purple-600 p-4 text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white">Instagram</h3>
                <p className="mt-2 text-center text-gray-300 dark:text-slate-300">
                  Connect with us
                </p>
                <p className="mt-2 text-[#FFD700] font-medium">
                  Follow our Company
                </p>
              </Link>

              {/* Book Now */}
              <Link
                href="mailto:book@ctlcss.com"
                className="group flex flex-col items-center justify-center rounded-lg backdrop-blur-sm bg-black/30 p-8 shadow-xl border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:bg-black/40"
              >
                <div className="mb-4 rounded-full bg-gradient-to-br from-[#FFD700] to-amber-500 p-4 text-white shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white">Book Now</h3>
                <p className="mt-2 text-center text-gray-300 dark:text-slate-300">
                  Send booking request
                </p>
                <p className="mt-2 text-[#FFD700] font-medium">
                  book@ctlcss.com
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
