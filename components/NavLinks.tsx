"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

export const NavLinks = () => {
    const pathname = usePathname();
    // TODO: Move navLinks to DB
    const navLinks = [
        { text: "Home", url: "/" },
        { text: "Stay", url: "/stay" },
        { text: "Travels", url: "/travel" },
        { text: "Food", url: "/food" },
        { text: "Contact Us", url: "/contact-us" },
    ]
    return (<div className="flex gap-5 lg:gap-9 md:flex-row items-end flex-col mt-3">
        {navLinks.map((link) => <Link key={"link__" + link.url} className={`text-xl lg:text-xl md:text-md ${pathname === link.url ? "text-cms font-bold" : ""}`} href={link.url}>
            <span>{link.text}</span>
        </Link>)}
    </div>)
}