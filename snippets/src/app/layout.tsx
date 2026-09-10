import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snippets",
  description: "Create and view code snippets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-12">
          <Link href="/" className="block mt-4 mb-2 font-bold text-lg">
            Home
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}
