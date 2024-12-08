import { Stay } from "@/types";
import { getData } from "../actions";
import { ItemCard } from "@/components/ItemCard";
import NoResultFound from "@/components/NoResultFound";
import { PageBanner } from "@/components/PageBanner";

const StaysPage = async () => {
  const vendorsData: any = await getData("Stays");
  return (
    <div>
      <PageBanner title={"Stays"} imageUrl={"/assets/BPTV/boatHouse.jpg"} />

      <div className="container mx-auto">
        {Object.entries(vendorsData).length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5">
            {vendorsData.map((vendor: Stay) => (
              <ItemCard key={vendor.vendorId} item={vendor} type="stay" />
            ))}
          </div>
        ) : (
          <NoResultFound />
        )}
      </div>
    </div>
  );
};

export default StaysPage;
