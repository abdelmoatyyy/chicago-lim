import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import OurServices from "@/components/OurServices";
import BookNow from "@/components/BookNow";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <Fleet />
      <Testimonials />
      <BookNow />
      <ContactUs />
    </>
  );
}
