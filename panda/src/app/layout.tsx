import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "./components/sidebar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LegalBay",
  description: "Case analysis",
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="flex min-h-screen">
      {/* Sidebar */}
      <SideBar /> {/* Sidebar is imported and rendered here */}

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100">
       
        {children} {/* This will render the page-specific content */}
      </main>
    </div>
      </body>
    </html>
  );
}
