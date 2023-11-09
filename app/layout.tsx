import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export const metadata: Metadata = {
    title: 'Kerem İLHAN',
    description: 'Kerem İlhan Porfolio App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <main className="bg-light w-full min-h-screen  dark:bg-dark">
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
