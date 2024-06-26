'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { useRouter } from 'next/navigation';

interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
}
interface CustomMobileLinkProps {
    href: string;
    title: string;
    className?: string;
    toggle: () => void;
}

const CustomLink = ({ href, title, className = '' }: CustomLinkProps) => {
    const pathName = usePathname();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`
                h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 cursor-pointer ${
                    pathName === href ? 'w-full dark:bg-light' : 'w-0 dark:bg-light'
                } 
            `}
            ></span>
        </Link>
    );
};
const CustomMobileLink = ({ href, title, className = '', toggle }: CustomMobileLinkProps) => {
    const pathName = usePathname();
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href);
    };
    return (
        <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span
                className={`
                h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${pathName === href ? 'w-full' : 'w-0'} 
            `}
            ></span>
        </button>
    );
};

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    const xRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node) && xRef.current && !xRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsOpen]);

    return (
        <header className="w-full px-24 lg:px-16 md:px-12 sm:px-8 xs:px-2 py-8 font-medium flex items-center justify-between dark:text-light relative z-10">
            <button ref={xRef} className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                </nav>
                <Logo />
                <nav className="flex items-center justify-center flex-wrap gap-6">
                    <motion.a
                        href="https://github.com/keremilhan"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-8 rounded-full ${isOpen ? 'bg-dark dark:bg-light' : 'bg-light dark:bg-dark'}`}
                    >
                        <GithubIcon className="dark:fill-light" />
                    </motion.a>
                    {/* <motion.a href="https://twitter.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6">
                        <TwitterIcon />
                    </motion.a> */}
                    <motion.a href="https://linkedin.com/in/keremilhan" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-8">
                        <LinkedInIcon />
                    </motion.a>
                    <button
                        className="flex items-center justify-center rounded-full p-1 dark:bg-light dark:text-dark bg-dark text-light w-8"
                        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                    >
                        {mounted && mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
                    </button>
                </nav>
            </div>

            {isOpen && (
                <motion.div
                    ref={containerRef}
                    initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
                >
                    <nav className="flex flex-col items-center justify-center">
                        <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
                        <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
                        <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
                    </nav>
                    <nav className="flex items-center justify-center flex-wrap gap-6 sm:gap-3 mt-7">
                        <motion.a href="https://github.com/keremilhan" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-8">
                            <GithubIcon className="fill-light dark:fill-dark" />
                        </motion.a>
                        {/* <motion.a href="https://twitter.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6">
                            <TwitterIcon />
                        </motion.a> */}
                        <motion.a href="https://linkedin.com/in/keremilhan" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-8">
                            <LinkedInIcon />
                        </motion.a>
                        <button
                            className="flex items-center justify-center rounded-full p-1 dark:bg-light dark:text-dark bg-dark text-light w-8"
                            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                        >
                            {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
                        </button>
                    </nav>
                </motion.div>
            )}
            <div className="lg:m-auto hidden lg:inline-block sm:m-0 w-12">
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
