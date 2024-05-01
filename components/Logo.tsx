'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logoLight from '../public/images/logo-light.png';
import logoDark from '../public/images/logo-dark.png';

const Logo = () => {
    return (
        <Link href={'/'} className="w-16 h-16">
            <Image className="dark:hidden" src={logoLight} alt="kerem ilhan" />
            <Image className="hidden dark:inline-block" src={logoDark} alt="kerem ilhan" />
        </Link>
    );
};

export default Logo;
