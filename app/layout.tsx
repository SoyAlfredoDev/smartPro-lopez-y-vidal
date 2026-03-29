import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estudiolyv.cl"),
  title: "Estudio López y Vidal | Abogados Expertos en Chile",
  description:
    "Defensa legal y estratégica en Chile. Asesoría en derecho civil, penal, laboral, familiar, comercial y contractual.",
  openGraph: {
    title: "Estudios López y Vidal | Defensa legal y estratégica",
    description:
      "Defensa legal y estratégica en Chile. Asesoría en derecho civil, penal, laboral, familiar, comercial y contractual.",
    url: "https://estudiolyv.cl",
    siteName: "Estudios López y Vidal",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/images/og-image.png", // esta imagen debe existir en /public
        width: 1200,
        height: 630,
        alt: "Estudios López y Vidal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudios López y Vidal | Defensa legal y estratégica",
    description:
      "Defensa legal y estratégica en Chile. Asesoría en derecho civil, penal, laboral, familiar, comercial y contractual.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">{children}</body>
    </html>
  );
}
