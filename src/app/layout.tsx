import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/ui/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${roboto.className} antialiased`}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
