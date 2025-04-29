import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full text-gray-100">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid gap-12 row-gap-8 mb-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info section */}
          <div className="sm:col-span-2">
            <Link
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center mb-4"
            >
              <Image
                src="/chicagotransLOGO.png"
                alt="Chicago Trans Limo"
                width={180}
                height={50}
                className="brightness-110"
              />
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm leading-relaxed text-gray-300">
                Luxury cars combine elegance and comfort, offering an unmatched
                driving experience for every journey.
              </p>
              <div className="flex gap-6 mt-8">
                <Image
                  src="/foter.png"
                  alt="footer"
                  width={90}
                  height={50}
                  className="hover:opacity-90 transition-opacity duration-300"
                />
                <Image
                  src="/foter2.png"
                  alt="footer"
                  width={90}
                  height={50}
                  className="hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wide text-white mb-5 pb-2 border-b border-gray-700 inline-block">
              Contacts
            </h3>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/10 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <Link
                href="tel:312-645-0505"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-blue-400 hover:text-blue-300 hover:underline"
              >
                1-(312)-645-0505
              </Link>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/10 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <Link
                href="mailto:info@chicagotranslimo.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-blue-400 hover:text-blue-300 hover:underline"
              >
                info@chicagotranslimo.com
              </Link>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/10 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <Link
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-blue-400 hover:text-blue-300 hover:underline"
              >
                7339 N Keystone Ave Lincolnwood IL 60712
              </Link>
            </div>
          </div>

          {/* Social media section */}
          <div>
            <h3 className="text-lg font-bold tracking-wide text-white mb-5 pb-2 border-b border-gray-700 inline-block">
              Social
            </h3>
            <div className="flex items-center mt-4 space-x-4">
              <Link
                href="https://www.linkedin.com/in/chicagotranslimo-91549a165?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 text-gray-300 transition-all duration-300 hover:bg-blue-800 hover:text-white"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/chicagotranslimousine/profilecard/"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 text-gray-300 transition-all duration-300 hover:bg-gradient-to-br from-purple-600 to-pink-500 hover:text-white"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/chicagotranslimousine"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 text-gray-300 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              Follow us everywhere to stay updated with us and our services
            </p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t border-gray-700 lg:flex-row items-center">
          <p className="text-sm text-gray-400 mt-4 lg:mt-0">
            © Copyright 2016-{new Date().getFullYear()} Chicagotrans Limousine
            Inc. All Rights Reserved
          </p>
          <ul className="flex flex-wrap justify-center gap-4 mb-2 lg:mb-0">
            <li>
              <Link
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400 hover:underline"
              >
                F.A.Q
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400 hover:underline"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
