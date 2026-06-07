import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NestAway USA",
  description: "Find hotels, homes and student housing across the USA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
