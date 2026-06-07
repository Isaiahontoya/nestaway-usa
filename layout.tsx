import type { Metadata } from "next";
import "./globals.css";
import { ResidentProvider } from "./context/ResidentContext";

export const metadata: Metadata = {
  title: "NestAway USA – Find Hotels, Homes & Student Housing",
  description: "Discover and list small hotels, rental homes, apartments, student housing, and vacation rentals across the USA. Owned by Isaiah Ontoya.",
  keywords: "hotels, rental homes, student housing, vacation rentals, USA, NestAway",
  openGraph: {
    title: "NestAway USA",
    description: "Find your perfect stay or home across the USA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ResidentProvider>
          {children}
        </ResidentProvider>
      </body>
    </html>
  );
}
