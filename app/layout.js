import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lucknow Infra Vision | Find Your Dream Home",
  description: "Discover your perfect property with RealtyHub. Browse listings, connect with expert agents, and find your dream home today.",
  keywords: "real estate, property, homes for sale, houses, apartments, condos, realtors, agents",
  icons: [
    {
      rel: 'icon',
      url: '/favicon.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/favicon.png',
    }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
       <WhatsAppButton/>
      </body>
    </html>
  );
}
