import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Sports Car Artwork - Photorealistic AI Generated",
  description: "Create stunning, photorealistic digital artwork of sleek sports cars with high detail, vibrant colors, and cinematic perspective using advanced AI image generation.",
  keywords: "digital art, sports car, photorealistic, AI generated, automotive art, high detail, vibrant colors, cinematic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}