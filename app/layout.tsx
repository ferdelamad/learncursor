import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Cursor",
  description: "A free course to master the Cursor editor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a1b] via-[#161644] to-[#1f1f4d]">
          <div className="flex h-screen flex-col">
            <Header />
            <div className="flex flex-1 gap-6 p-6 overflow-hidden">
              <Sidebar />
              <main className="flex-1 rounded-2xl overflow-hidden bg-[#12122a]/60 backdrop-blur-xl">
                <div className="h-full">
                  <div className="px-8 py-10">
                    {children}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
