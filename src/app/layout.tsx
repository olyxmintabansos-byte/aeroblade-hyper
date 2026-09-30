import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carbon Fiber Gravel Bike",
  description: "Monocoque carbon frame with aggressive geometry for gravel racing. Sub-1.2kg frameset with integrated cable routing....",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-light text-dark">{children}</body>
    </html>
  );
}
