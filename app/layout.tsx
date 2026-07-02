import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://markitme.ca'),
  title: 'MarkitMe | Digital Marketing Agency in Toronto',
  description: 'We build brands that people notice and businesses that grow. Expert web design, video production, social media marketing, and brand strategy services in Toronto.',
  openGraph: {
    title: 'MarkitMe | Digital Marketing Agency in Toronto',
    description: 'We build brands that people notice and businesses that grow.',
    images: [
      {
        url: 'https://markitme.ca/wp-content/uploads/2026/03/markitmelogo.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MarkitMe | Digital Marketing Agency',
    description: 'We build brands that people notice and businesses that grow.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}
