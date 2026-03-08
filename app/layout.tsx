import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BNG Remodel · Presentation by Couture House Co.",
  description: "A presentation for BNG Remodel by Couture House Co. — how we can grow your remodeling business with social media content and strategy.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-black text-white selection:bg-[#c41e3a] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
