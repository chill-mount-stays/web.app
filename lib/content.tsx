import { FoodSvg } from "@/components/SVGIcons/food";
import { StaysSVG } from "@/components/SVGIcons/stays";
import { TravelSVG } from "@/components/SVGIcons/travel";

export const bestPlaces = [
  {
    imageUrl: "/assets/travels-header-bg.webp",
    altText: "Ooty",
    title: "Ooty",
    description: "Enjoy the breathtaking view of nature's beauty.",
  },
  {
    imageUrl: "/assets/travels-header-bg.webp",
    altText: "Ooty",
    title: "Ooty",
    description: "Enjoy the breathtaking view of nature's beauty.",
  },
  {
    imageUrl: "/assets/travels-header-bg.webp",
    altText: "Ooty",
    title: "Ooty",
    description: "Enjoy the breathtaking view of nature's beauty.",
  },
  {
    imageUrl: "/assets/travels-header-bg.webp",
    altText: "Ooty",
    title: "Ooty",
    description: "Enjoy the breathtaking view of nature's beauty.",
  },
  {
    imageUrl: "/assets/travels-header-bg.webp",
    altText: "Ooty",
    title: "Ooty",
    description: "Enjoy the breathtaking view of nature's beauty.",
  },
  {
    imageUrl: "/assets/travels-header-bg.webp",
    altText: "Ooty",
    title: "Ooty",
    description: "Enjoy the breathtaking view of nature's beauty.",
  },
  {
    imageUrl: "/assets/travels-header-bg.webp",
    altText: "Ooty",
    title: "Ooty",
    description: "Enjoy the breathtaking view of nature's beauty.",
  },
  {
    imageUrl: "/assets/travels-header-bg.webp",
    altText: "Ooty",
    title: "Ooty",
    description: "Enjoy the breathtaking view of nature's beauty.",
  },
  {
    imageUrl: "/assets/travels-header-bg.webp",
    altText: "Ooty",
    title: "Ooty",
    description: "Enjoy the breathtaking view of nature's beauty.",
  },
];

export const Sections = [
  {
    page: "stays",
    title: "Stays That Suit You",
    description: "Find accommodations that match your style and comfort.",
  },
  {
    page: "travels",
    title: "Travel Made Simple",
    description: "Discover seamless options to get you where you want to go.",
  },
  {
    page: "food",
    title: "Savor Every Bite",
    description: "Explore culinary delights to satisfy every craving.",
  },
];

export const Headers = [
  {
    page: "stays",
    imgUrl: "/assets/stays-header-bg.webp",
    title: "Stays Simplified",
    description: "Pre-Book Your Perfect Stay",
  },
  {
    page: "travels",
    imgUrl: "/assets/travels-header-bg.webp",
    title: "Travel Made Easy",
    description: "Reserve Your Journey in Advance",
  },
  {
    page: "food",
    imgUrl: "/assets/foods-header-bg.webp",
    title: "Savor the Journey",
    description: "Pre-Plan Your Dining Experience",
  },
];

export const AboutUsContent = () => {
  return (
    <div className="flex flex-col gap-5">
      <p>Chillmountstays offers a pleasant stay, homemade food, and travel experiences for you, your family, friends, and loved ones. Here, you'll find everything you need in one place.</p>
      <p>We provide the best customer support and guidance to ensure a seamless experience.</p>
    </div>
  );
};

export const WhyUsContent = () => {
  return (
    <div className="flex flex-col gap-5">
      <p>Chillmountstays offers comfort, pleasant stays, homemade food, and travel services—all in one place. We are committed to ensuring your safety and a joyful journey.</p>
      <p>Our team provides the best customer support throughout your entire experience. At Chillmountstays, we are always with you, making sure your needs are met every step of the way.</p>
      <p>Thank you for visiting our page!</p>
    </div>
  );
};

export const OurServicesContent = () => {
  return (
    <div className="max-w-lg">
      <p className="text-center md:text-xl">Chillmountstays offers everything you need in one place accommodation,travel, and food services. Our goal is to satisfy all your needs, ensuring a seamless and enjoyable experience from start to finish.</p>
    </div>
  );
};

export const banners = [
  {
    bannerId: 1,
    title: "Top-Class Rooms for Your Stay",
    imgUrl: "https://firebasestorage.googleapis.com/v0/b/chill-mount-stays.firebasestorage.app/o/banners%2Fbanner-umg-04.webp?alt=media&token=36c40bc0-892d-49d1-812a-65b139b181c3",
    description: "Experience a memorable stay amidst the serene beauty of Ooty at Chillmount Stays. Perfect for families and loved ones.",
    buttonText: "Book Now",
    buttonLink: "/stays",
  },
  {
    bannerId: 2,
    title: "Your Custom Travel Experience",
    imgUrl: "https://firebasestorage.googleapis.com/v0/b/chill-mount-stays.firebasestorage.app/o/banners%2Fbanner-img-01.webp?alt=media&token=69163d77-dfdb-4a30-a2f4-5cc31f592678",
    description: "Affordable travel with well-trained drivers and comfortable vehicles. No hidden charges—just a memorable journey.",
    buttonText: "Make Your Trip",
    buttonLink: "/travels",
  },
  {
    bannerId: 3,
    title: "Authentic Homemade Meals",
    imgUrl: "https://firebasestorage.googleapis.com/v0/b/chill-mount-stays.firebasestorage.app/o/banners%2Fbanner-img-03.webp?alt=media&token=0ff35e30-70ad-44d6-932c-91a72300ca96",
    description: "Enjoy fresh, sustainable meals delivered to your doorstep. No waste, just pure homemade goodness.",
    buttonText: "Check Now",
    buttonLink: "/food",
  },
];

export const OurSevicesIcons = [
  { svg: <StaysSVG height="100" />, heading: "Stays", url: "/stays" },
  { svg: <TravelSVG height="100" />, heading: "Travels", url: "/travels" },
  { svg: <FoodSvg height="100" />, heading: "Food", url: "/food" },
];

export const cartFlyoutBtns = {
  primaryBtn: "Confirm Order",
  secondaryBtn: "Add More Item",
};

export const ConfirmationModalContent = () => {
  return (
    <div className="flex flex-col items-center text-center px-3 gap-2">
      <p className="font-semibold">Order received successfully!</p>
      <p className="text-sm">Our team will reach out to you shortly.</p>
    </div>
  );
};
