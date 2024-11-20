import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <Image
              src="/chicagotransLOGO.png"
              alt="Company"
              width={150}
              height={40}
            />
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-black">
              Luxury cars combine elegance and comfort, offering an unmatched
              driving experience for every journey.
            </p>
            <p className="mt-4 text-sm text-black">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-black">Phone:</p>
            <Link
              href="tel:312-645-0505"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              target="_blank"
            >
              1-(312)-645-0505{" "}
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-black">Email:</p>
            <Link
              href="mailto:info@chicagotranslimo.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              info@chicagotranslimo.com{" "}
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-black">Address:</p>
            <Link
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              7339 N Keystone Ave Lincolnwood IL 60712
            </Link>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <Link
              href="https://www.linkedin.com/in/chicagotranslimo-91549a165?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="_blank"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/chicagotranslimousine/profilecard/"
              className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="_blank"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx={15} cy={15} r={4} />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/chicagotranslimousine"
              className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </Link>
          </div>
          <p className="mt-4 text-sm text-black">
            Follow Us Everywhere To Stay Updated With Us And Our Services
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-black">
          © Copyright 2016 Chicagotrans Limousine Inc All Right Reserved
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              href="/"
              className="text-sm text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="_blank"
            >
              F.A.Q
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-sm text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-sm text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
