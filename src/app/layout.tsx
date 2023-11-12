import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

export const metadata: Metadata = {
  title: "Ashraf Elshaer",
  description: "Ashraf Elshaer's personal website",
  keywords: [
    "Ashraf Elshaer",
    "Ashraf",
    "Elshaer",
    "ashrafelshaer",
    "ashrafelshaer.com",
    "software",
    "engineer",
    "software engineer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
