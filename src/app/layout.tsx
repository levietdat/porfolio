import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeScript } from "@/components/theme-script"
import { Providers } from "@/app/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "Fullstack Developer Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeScript />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

