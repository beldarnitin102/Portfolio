import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import CursorGlow from "@/components/effects/CursorGlow";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import ScrollProgress from "@/components/effects/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";

import LenisProvider from "@/components/providers/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata = {
  title: "Nitin | Full Stack Developer",
  description:
    "Portfolio of Nitin - Full Stack Developer, AI & Machine Learning Enthusiast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          bg-[#030712]
          text-white
          antialiased
          overflow-x-hidden
        `}
      >
        <LenisProvider>

          <ScrollProgress />

          <CursorGlow />
           <CustomCursor />

          <NoiseOverlay />

          {children}

        </LenisProvider>
      </body>
    </html>
  );
}