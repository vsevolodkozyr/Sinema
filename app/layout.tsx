import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const FInter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const FManrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Sinema",
  description: "Create by Seva",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", FInter.variable, FManrope)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
