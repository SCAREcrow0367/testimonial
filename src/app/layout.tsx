import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";



const sora = Sora({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Testimonial Challenge",
  description: "Designed by Kyler Moore - NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const punycode = require('punycode/');

  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
