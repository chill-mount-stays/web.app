import { FoodSvg } from "@/components/SVGIcons/food";
import { StaysSVG } from "@/components/SVGIcons/stays";
import { TravelSVG } from "@/components/SVGIcons/travel";

export const AboutUsContent = () => {
  return (
    <div className="flex flex-col gap-5">
      <p>
        Chillmountstays offers a pleasant stay, homemade food, and travel
        experiences for you, your family, friends, and loved ones. Here, you'll
        find everything you need in one place.
      </p>
      <p>
        We provide the best customer support and guidance to ensure a seamless
        experience.
      </p>
    </div>
  );
};

export const WhyUsContent = () => {
  return (
    <div className="flex flex-col gap-5">
      <p>
        Chillmountstays offers comfort, pleasant stays, homemade food, and
        travel services—all in one place. We are committed to ensuring your
        safety and a joyful journey.
      </p>
      <p>
        Our team provides the best customer support throughout your entire
        experience. At Chillmountstays, we are always with you, making sure your
        needs are met every step of the way.
      </p>
      <p>Thank you for visiting our page!</p>
    </div>
  );
};

export const OurServicesContent = () => {
  return (
    <div className="max-w-lg  ">
      <p className="text-center md:text-xl">
        Chillmountstays offers everything you need in one place
        accommodation,travel, and food services. Our goal is to satisfy all your
        needs, ensuring a seamless and enjoyable experience from start to
        finish.
      </p>
    </div>
  );
};

export const banners = [
  {
    bannerId: 1,
    imgUrl:
      "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp",
    overlayText:
      "Chillmount Stays offers top-class rooms for a pleasant stay with your family, friends, and loved ones. Our rooms are clean, well-maintained, and supported by exceptional customer service. Trust us, and once you experience our hospitality, you'll have a truly memorable journey.",
  },
  {
    bannerId: 2,
    imgUrl:
      "https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/ooty-1653923879_ee32f7707d19c1d542af.webp",
    overlayText:
      "Chillmount Stays offers customized, cost-effective travel experiences with well-trained drivers. We provide a variety of vehicles to ensure a comfortable journey. Our day trips are priced reasonably, and once you book with us, you won’t have to pay any hidden charges. Trust us with your travel plans, and we'll make your trip both memorable and enjoyable.",
  },
  {
    bannerId: 3,
    imgUrl:
      "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp",
    overlayText:
      "We care for your family, including children and grandparents, by serving authentic homemade meals. We use fresh, homemade masalas to bring out the true flavors of the food. Understanding that it's often difficult to find quality food in tourist areas, we bring the best homemade meals right to your doorstep. We prioritize sustainability and do not encourage plastic packaging. Instead, we serve food in silver vessels and on banana leaves. After your meal, we will collect all the items we provided, leaving no waste behind.",
  },
  {
    bannerId: 4,
    imgUrl:
      "https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/ooty-1653923879_ee32f7707d19c1d542af.webp",
  },
];

export const OurSevicesIcons = [
  { svg: <StaysSVG height="100" />, heading: "Stays", url: "/stays" },
  { svg: <TravelSVG height="100" />, heading: "Travels", url: "/travels" },
  { svg: <FoodSvg height="100" />, heading: "Food", url: "/food" },
];
