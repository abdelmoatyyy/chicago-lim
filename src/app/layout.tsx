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

// Add environment variables for Google Tag scripts
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
        {/* Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=${GTM_ID}'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NavBar />
        {children}
        <Footer />
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
        {/* MyLimoBiz Widget Loader */}
        <Script
          src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"
          type="text/javascript"
          strategy="afterInteractive"
        />
        <Script id="safari-widget-fix" strategy="afterInteractive">
          {`
          document.addEventListener("DOMContentLoaded", function () {
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

            if (isSafari) {
              var link = document.getElementById("chicagotrans-widget-link");
              if (link) {
                link.href = "https://book.mylimobiz.com/v4/chicagotrans";
                link.textContent = "Book Now (Safari)";
                link.removeAttribute("data-ores-widget");
                link.removeAttribute("data-ores-alias");
              }
            }
          });
        `}
        </Script>

        {/* External Widget Loader */}
        <Script
          src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"
          strategy="afterInteractive"
        />
        <Script id="safari-booking-fix" strategy="afterInteractive">
          {`
          document.addEventListener("DOMContentLoaded", function () {
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (isSafari) {
              var link = document.getElementById("chicagotrans-link");
              if (link) {
                link.href = "https://book.mylimobiz.com/v4/chicagotrans";
                link.textContent = "Book Now (Safari)";
                link.removeAttribute("data-ores-widget");
                link.removeAttribute("data-ores-alias");
                link.removeAttribute("data-redirect-url");
              }
            }
          });
        `}
        </Script>
        {/* External Script */}
        <Script
          src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
