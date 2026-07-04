import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PopX",
  description: "Sign up or log in to your PopX account.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full antialiased">
        <div className="flex min-h-screen w-full justify-center bg-[#e9eaec] py-0 sm:py-10">
          <div className="relative flex w-full max-w-[375px] flex-col bg-bg shadow-none sm:min-h-[812px] sm:shadow-2xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
