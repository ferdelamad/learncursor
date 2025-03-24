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
            <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-6 p-4 md:p-6 overflow-hidden">
              <div className="md:hidden mb-4">
                <Sidebar />
              </div>
              <div className="hidden md:block">
                <Sidebar />
              </div>
              <main className="flex-1 rounded-2xl bg-[#12122a]/60 backdrop-blur-xl overflow-auto">
                <div className="h-full">
                  <div className="px-4 md:px-8 py-6 md:py-10">
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
