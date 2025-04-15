import type { Metadata } from "next";
import "./globals.css";
import { poppins, openSans } from './fonts';



export const metadata: Metadata = {
  title: "Avtomehanika Demšar 👩‍🔧",
  description: "Avtomehanična delavnica Demšar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${poppins.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
