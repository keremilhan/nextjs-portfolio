import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg py-8 px-32 flex items-center justify-between dark:text-light dark:border-ligh sm:text-base lg:flex-col lg:p-6 xs:p-4">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className="flex items-center lg:py-2">
                Build by&nbsp;
                <Link href="https://linkedin.com/in/keremilhan" target="_blank" className="underline underline-offset-2">
                    Kerem İlhan
                </Link>
            </div>
            <Link href="mailto:kerem7095@gmail.com" className="underline underline-offset-2">
                Say Hello
            </Link>
        </footer>
    );
};

export default Footer;
