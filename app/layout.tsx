import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Chill Mount Stays",
  description:
    "Discover the ultimate stay, travel, and food experience in Ooty - plan your perfect hill station getaway today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-poppins`}>
        <Navbar />
        <div className="">{children}</div>
        {/* <Footer /> */}
        <Toaster />
      </body>
    </html>
  );
}
