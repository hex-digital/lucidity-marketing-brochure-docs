import type { Metadata } from "next";
import { DM_Sans, Figtree, Martian_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucidity",
  description: "Lucidity brochure",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading-google",
  display: "swap",
  weight: ["300", "400","500"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body-google",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-mono-google",
  display: "swap",
  weight: ["300", "400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${dmSans.variable} ${figtree.variable} ${martianMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
