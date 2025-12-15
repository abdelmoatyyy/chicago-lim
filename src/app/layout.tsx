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
        {/* Microsoft Verification */}
        <meta name="msvalidate.01" content="06925FA9C1C8FB03728A3295D423BEAE" />

        {/* Microsoft Bing UET (Universal Event Tracking) */}
        <Script id="bing-uet" strategy="afterInteractive">
          {`
            (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"343196138", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
          `}
        </Script>

        {/* Microsoft Bing UET Enhanced Conversions */}
        <Script id="bing-uet-enhanced" strategy="afterInteractive">
          {`
            // Enhanced conversion tracking - captures user data when available
            window.uetq = window.uetq || [];
            
            // Function to normalize and hash email
            function normalizeEmail(email) {
              if (!email) return null;
              // Remove whitespace and convert to lowercase
              let normalized = email.trim().toLowerCase();
              // Remove periods before @ and anything between + and @
              const atIndex = normalized.indexOf('@');
              if (atIndex > -1) {
                let localPart = normalized.substring(0, atIndex);
                const domain = normalized.substring(atIndex);
                // Remove everything between + and end of local part
                localPart = localPart.replace(/\\+.*$/, '');
                // Remove periods
                localPart = localPart.replace(/\\./g, '');
                normalized = localPart + domain;
                // Remove trailing period
                normalized = normalized.replace(/\\.$/, '');
              }
              return normalized;
            }
            
            // Function to normalize phone number to E.164 format
            function normalizePhone(phone) {
              if (!phone) return null;
              // Remove all non-numeric characters
              let normalized = phone.replace(/\\D/g, '');
              // Add + prefix if not present and ensure it starts with country code
              if (!normalized.startsWith('1') && normalized.length === 10) {
                normalized = '1' + normalized; // Add US country code
              }
              return '+' + normalized;
            }
            
            // Function to set enhanced conversion data
            function setEnhancedConversionData(email, phone) {
              const pid = {};
              
              if (email) {
                const normalizedEmail = normalizeEmail(email);
                if (normalizedEmail) {
                  pid.em = normalizedEmail;
                }
              }
              
              if (phone) {
                const normalizedPhone = normalizePhone(phone);
                if (normalizedPhone) {
                  pid.ph = normalizedPhone;
                }
              }
              
              if (Object.keys(pid).length > 0) {
                window.uetq.push('set', { 'pid': pid });
              }
            }
            
            // Listen for booking form submissions or user data
            // This will capture data from the MyLimoBiz widget when available
            window.addEventListener('message', function(event) {
              if (event.data && event.data.type === 'booking_data') {
                setEnhancedConversionData(event.data.email, event.data.phone);
              }
            });
            
            // You can also manually call this function when you have user data
            // Example: setEnhancedConversionData('user@example.com', '3129615500');
          `}
        </Script>

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

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "06925FA9C1C8FB03728A3295D423BEAE");
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
