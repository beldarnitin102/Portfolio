import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/effects/CursorGlow";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import ScrollProgress from "@/components/effects/ScrollProgress";

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
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          bg-[#030712]
          text-white
          antialiased
          overflow-x-hidden
        `}
      >
        <ScrollProgress />

        <CursorGlow />

        <NoiseOverlay />

        {children}
      </body>
    </html>
  );
}
