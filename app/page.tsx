import { AboutUs } from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import HomeCarousel from "@/components/HomeCarousel";
import { PlacesToVisit } from "@/components/PlacesToVisit";

export default function Home() {
  return (
    <div className="">
      <HomeCarousel />
      <PlacesToVisit />
      <AboutUs />
      <ContactUs />
    </div>
  );
}
