import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import {NextUIProvider} from "@nextui-org/system";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geoffrey's Portfolio",
  description: "Created with Next.js and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
