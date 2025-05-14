import type { Metadata } from "next";
import "./globals.css";
import { poppins, openSans } from './fonts';

export const metadata: Metadata = {
  title: "Avtomehanika Demšar 👩‍🔧 | Profesionalni avtomobilski servis",
  description: "Profesionalni avtomobilski servis Demšar. Servis osebnih vozil, klimatskih naprav in menjava gum. Hitro, zanesljivo in strokovno.",
  keywords: "Avtomehanika Demšar,avtomehanika, avtomobilski servis, servis vozil, menjava gum, klimatske naprave, Demšar ,Avtomehanika Demšar,Popravilo klim,servis vozil,Avtoservis Škofja loka,Avtomehanika Škofja loka,Avtoservis Rateče,Avtomehanika Rateče,avto demšar,",
  authors: [{ name: "Avtomehanika Demšar" }],
  creator: "Avtomehanika Demšar",
  publisher: "Avtomehanika Demšar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://avtomehanika-demsar.si'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Avtomehanika Demšar 👩‍🔧 | Profesionalni avtomobilski servis",
    description: "Profesionalni avtomobilski servis Demšar. Servis osebnih vozil, klimatskih naprav in menjava gum. Hitro, zanesljivo in strokovno.",
    url: 'https://avtomehanika-demsar.si',
    siteName: 'Avtomehanika Demšar',
    locale: 'sl_SI',
    type: 'website',
    images: [
      {
        url: '/7.jpg',
        width: 1200,
        height: 630,
        alt: 'Avtomehanika Demšar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Avtomehanika Demšar 👩‍🔧 | Profesionalni avtomobilski servis",
    description: "Profesionalni avtomobilski servis Demšar. Servis osebnih vozil, klimatskih naprav in menjava gum. Hitro, zanesljivo in strokovno.",
    images: ['/7.jpg'],
    creator: '@avtomehanikademsar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "q2ZDyhgy7nmFS0rJ5wg2e03DrV_n0hjnaFIB3cFC5Fo",
  },
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
