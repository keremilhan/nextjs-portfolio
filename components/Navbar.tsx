'use client';
import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
}

const CustomLink = ({ href, title, className = '' }: CustomLinkProps) => {
    const pathName = usePathname();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`
                h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathName === href ? 'w-full' : 'w-0 dark:bg-light'} 
            `}
            ></span>
        </Link>
    );
};

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink href="/projects" title="Projects" className="mx-4" />
                <CustomLink href="/articles" title="Articles" className="ml-4" />
            </nav>
            <nav className="flex items-center justify-center flex-wrap gap-6">
                <motion.a href="https://github.com/keremilhan" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6">
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://twitter.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6">
                    <TwitterIcon />
                </motion.a>
                <motion.a href="https://linkedin.com/in/keremilhan" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6">
                    <LinkedInIcon />
                </motion.a>
                <button className="flex items-center justify-center rounded-full p-1 dark:bg-light dark:text-dark bg-dark text-light " onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                    {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
                </button>
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[50%]">
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
