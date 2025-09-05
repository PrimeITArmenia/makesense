import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Make Sense",
  description: "Make Sense app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
