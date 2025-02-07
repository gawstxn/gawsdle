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

export const metadata = {
  title: "gawsdle",
  description: "Made with ❤️ by gawston skibidi skrttt.",
  openGraph: {
    title: "gawsdle",
    description: "Made with ❤️ by gawston skibidi skrttt.",
    url: "https://gawsdle.vercel.app/",
    siteName: "gawsdle",
    images: [
      {
        url: "/img/gawsdle.jpg",
        width: 1200,
        height: 630,
        alt: "gawsdle",
      },
    ],
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
