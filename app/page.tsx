import { AboutUs } from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import HomeCarousel from "@/components/HomeCarousel";
import { PlacesToVisit } from "@/components/PlacesToVisit";

export default function Home() {
  return (
    <div className="">
      <HomeCarousel />
      <div className="lg:mb-36">
        <PlacesToVisit />
      </div>
      <div className="lg:mb-36">
        <AboutUs />
      </div>
      <ContactUs />
    </div>
  );
}
