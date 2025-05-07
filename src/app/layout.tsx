import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Environment variables
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GA_MEASUREMENT_ID = "G-VNDBYW5WRF";

export const metadata: Metadata = {
  title: "Chicago Translimo",
  description: "Best Limousine Service In Chicago",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager (GTM) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id=${GTM_ID}'+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* Google Analytics (GA4) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        {/* Initialize GA */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GTM NoScript Fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <NavBar />
        {children}
        <Footer />

        {/* Conversion Tracking */}
        <Script id="conversion-tracking" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              if (window.location.pathname === '/') {
                gtag('event', 'conversion', {
                  'send_to': '${GA_ID}/m479CP2Z0qkaEIPX7oI_',
                  'value': 1.0,
                  'currency': 'USD'
                });
              }
              document.addEventListener('click', function(e) {
                if (e.target.closest('a') && e.target.closest('a').innerText.includes('1-(312)-645-0505')) {
                  gtag('event', 'conversion', {'send_to': '${GA_ID}/UJtdCPqZ0qkaEIPX7oI_'});
                }
              }, true);
            });
          `}
        </Script>

        {/* MyLimoBiz Widget (Optimized to load once) */}
        <Script
          src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"
          strategy="afterInteractive"
        />

        {/* Safari-Specific Fixes */}
        <Script id="safari-fixes" strategy="afterInteractive">
          {`
            document.addEventListener("DOMContentLoaded", function () {
              const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
              if (!isSafari) return;

              // Fix for widget link
              const widgetLink = document.getElementById("chicagotrans-widget-link");
              if (widgetLink) {
                widgetLink.href = "https://book.mylimobiz.com/v4/chicagotrans";
                widgetLink.textContent = "Book Now (Safari)";
                widgetLink.removeAttribute("data-ores-widget");
                widgetLink.removeAttribute("data-ores-alias");
              }

              // Fix for booking link
              const bookingLink = document.getElementById("chicagotrans-link");
              if (bookingLink) {
                bookingLink.href = "https://book.mylimobiz.com/v4/chicagotrans";
                bookingLink.textContent = "Book Now (Safari)";
                bookingLink.removeAttribute("data-ores-widget");
                bookingLink.removeAttribute("data-ores-alias");
                bookingLink.removeAttribute("data-redirect-url");
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
