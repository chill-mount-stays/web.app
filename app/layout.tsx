import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Chill Mount Stays",
  description: "Discover the ultimate stay, travel, and food experience in Ooty - plan your perfect hill station getaway today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-poppins`}
      >
        <Navbar />
        <div className="pt-[80px] md:pt-[120px]">
          {children}
        </div>
      </body>
    </html>
  );
}
