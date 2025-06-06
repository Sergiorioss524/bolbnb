import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BolBnB - Alojamientos en Bolivia",
  description: "Encuentra los mejores alojamientos en Bolivia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SessionProvider>
          <main className="min-h-screen bg-gray-100">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
