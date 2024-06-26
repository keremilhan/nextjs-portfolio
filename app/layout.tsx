import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Kerem İLHAN',
    description: 'Kerem İlhan Porfolio App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <main className="bg-light w-full min-h-screen dark:bg-dark p-32 !pt-0 !pb-0 xl:p-24 lg:p-16 md:p-12 sm:p-8">
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
