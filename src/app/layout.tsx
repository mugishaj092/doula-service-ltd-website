import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/Providers"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NYINAWUMUNTU DOULA SERVICES Ltd | Transforming Maternal Health in Rwanda",
  description:
    "NYINAWUMUNTU DOULA SERVICES Ltd provides professional doula support to improve maternal and neonatal health outcomes in Rwanda. Our services empower mothers through pregnancy, childbirth, and postpartum care, reducing maternal mortality and enhancing birth experiences.",
  keywords: [
    "doula services Rwanda",
    "maternal health Rwanda",
    "childbirth support",
    "pregnancy care Rwanda",
    "postpartum doula",
    "reduce maternal mortality",
    "women's health advocacy",
    "neonatal care Rwanda",
    "holistic birth support",
    "continuous labor support",
    "safe childbirth Rwanda",
  ].join(", "),
  openGraph: {
    title: "NYINAWUMUNTU DOULA SERVICES Ltd | Transforming Maternal Health in Rwanda",
    description:
      "Comprehensive doula services to enhance maternal health, reduce complications, and provide emotional and physical support throughout pregnancy, birth, and postpartum in Rwanda.",
    url: "https://nyinawumuntudoulaservices.com",
    siteName: "NYINAWUMUNTU DOULA SERVICES Ltd",
    images: [
      {
        url: "https://nyinawumuntudoulaservices.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NYINAWUMUNTU DOULA SERVICES Ltd - Doula Support for Mothers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Nyinawumuntuso4",
    title: "NYINAWUMUNTU DOULA SERVICES Ltd | Maternal Health & Doula Support",
    description:
      "Supporting maternal and neonatal health in Rwanda through professional doula care. Reduce maternal mortality and improve birth experiences with compassionate support.",
    images: ["https://nyinawumuntudoulaservices.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
