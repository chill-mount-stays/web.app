"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const pathname = usePathname();

  // TODO: Move navLinks to DB
  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Stay", url: "/stays" },
    { text: "Travels", url: "/travels" },
    { text: "Food", url: "/food" },
    { text: "Contact Us", url: "/#contact-us" },
  ];
  return (
    <div className="flex gap-5 lg:gap-9 md:flex-row items-end flex-col mt-3">
      {navLinks.map((link, idx) => (
        <Link
          key={"link__" + idx}
          className={`text-xs lg:text-base md:text-sm hover:underline hover:text-cms underline-offset-4  ${
            pathname === link.url ? "text-cms font-bold" : "text-black"
          }`}
          href={link.url}
        >
          <span>{link.text}</span>
        </Link>
      ))}
    </div>
  );
};
