import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { cn } from "@/lib/utils";


const como = localFont({
  src: [
    {
      path: "../fonts/Como-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Como-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Como.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Como-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Como-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Como-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Como-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Como-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-como",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, como.variable)}>
        <Header />
        {children}
        </body>
    </html>
  );
}
