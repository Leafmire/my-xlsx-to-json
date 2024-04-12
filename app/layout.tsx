import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

export const metadata = {
  title: 'XLSX to JSON Converter',
  description: 'Convert XLSX files to JSON format',
};

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
