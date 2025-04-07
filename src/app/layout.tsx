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
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MWCSF5C3');
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16917441411"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16917441411');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWCSF5C3"
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
                  'send_to': 'AW-16917441411/m479CP2Z0qkaEIPX7oI_',
                  'value': 1.0,
                  'currency': 'USD'
                });
              }
              document.addEventListener('click', function(e) {
                if (e.target.closest('a') && e.target.closest('a').innerText.includes('1-(312)-645-0505')) {
                  gtag('event', 'conversion', {'send_to': 'AW-16917441411/UJtdCPqZ0qkaEIPX7oI_'});
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
      </body>
    </html>
  );
}
