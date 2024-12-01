import Link from "next/link";
import { Logo } from "./Logo";
import { Instagram, Facebook, Twitter } from "lucide-react";
export const Footer = () => {
  return (
    <div className="border border-t py-12 px-24 flex items-center justify-between bg-gray-100">
      <div>
        <div className="max-w-lg">
          <Logo showText textProperties={["text-csm"]} />
        </div>
        <div className="flex space-x-6 mt-6 text-sm">
          <p>@ 2024 Chill Mount Stays. All rights reserved.</p>
          <Link href={"/policy"}>Privacy Policy</Link>
          <Link href={"/terms"}>Terms and Conditions</Link>
        </div>
      </div>
      <div className="flex space-x-6">
        <Link href={"/"}>
          <Instagram />
        </Link>
        <Link href={"/"}>
          <Facebook />
        </Link>
        <Link href={"/"}>
          <Twitter />
        </Link>
      </div>
    </div>
  );
};
