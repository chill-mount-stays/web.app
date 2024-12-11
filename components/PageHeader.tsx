import { StaysEnquiry } from "./StaysEnquiry";

interface PageHeaderProps {
  service: "stays" | "travels" | "foof";
}

export default function PageHeader({ service }: PageHeaderProps) {
  return (
    <header className="bg-[url('/assets/stays-header-bg.webp')] aspect-[2.5/1] rounded-lg bg-cover bg-center p-4 flex flex-col justify-end">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-semibold text-white">
          Find Your Perfect Stay
        </h1>
      </div>
      {service === "stays" && <StaysEnquiry />}
      {/* {service === "travels" && <TravelsEnquiry />}
      {service === "food" && <FoodEnquiry />} */}
    </header>
  );
}
