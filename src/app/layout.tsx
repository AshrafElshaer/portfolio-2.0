import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
