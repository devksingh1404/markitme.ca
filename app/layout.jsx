import './globals.css';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { Inter, Playfair_Display } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});
const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
});
export const metadata = {
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
export default function RootLayout({ children, }) {
    return (<html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#f8f0e7] text-slate-950`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>);
}
