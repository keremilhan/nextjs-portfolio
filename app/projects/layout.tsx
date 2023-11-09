import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kerem İLHAN | Projects',
    description: 'Kerem İlhan Porfolio App | Projects',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <main className="bg-light w-full min-h-screen  dark:bg-dark">{children}</main>;
}
