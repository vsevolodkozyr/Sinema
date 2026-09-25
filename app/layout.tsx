import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/src/providers/ModalProvider";

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
      className={cn(
        "h-full",
        "antialiased",
        "font-inter",
        FInter.variable,
        FManrope.variable,
      )}
    >
      <body className="dark min-h-dvh flex flex-col">
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
