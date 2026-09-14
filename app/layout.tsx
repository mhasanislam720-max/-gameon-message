import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameON Message",
  description: "GameON Message - Chat, Connect & Play",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
