import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import HandleScroll from "./components/HandleScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Allen Aboy Portfolio",
  description: "A portfolio website designed and built by Allen Aboy, It displays the numerous skills, experiences, and projects he had developed in his career as a Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: "#242527" }} >
        <Providers>
          {/* <HandleScroll /> */}
          <Suspense fallback={<Loading />}>

            {children}
            <Footer />

          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
