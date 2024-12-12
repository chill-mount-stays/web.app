import { ItemCard } from "@/components/ItemCard";
import NoResultFound from "@/components/NoResultFound";
import { PageBanner } from "@/components/PageBanner";
import SubHeading from "@/components/SubHeading";
import { Food, Stay } from "@/types";
import { getData } from "../actions";
import PageHeader from "@/components/PageHeader";

const FoodPage = async () => {
  const vendorsData: any = await getData("Foods");
  return (
    <div>
      <div className="lg:mx-32">
        <PageHeader service="food" />
      </div>
      <div className="my-20">
        <SubHeading page="food" />
      </div>
      <div className="container mx-auto">
        {Object.entries(vendorsData).length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5">
            {vendorsData.map((vendor: Food) => (
              <ItemCard key={vendor.foodId} item={vendor} type="food" />
            ))}
          </div>
        ) : (
          <NoResultFound />
        )}
      </div>
    </div>
  );
};

export default FoodPage;
