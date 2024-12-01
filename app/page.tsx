import HomeCarousel from "@/components/HomeCarousel";
import { PlacesToVisit } from "@/components/PlacesToVisit";

export default function Home() {
  return (
    <div className="h-[200vh]">
      <HomeCarousel />
      <PlacesToVisit />
    </div>
  );
}
