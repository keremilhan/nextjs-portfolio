'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className="flex items-center justify-center">
            <MotionLink
                href="/"
                className="w-16 h-16 xs:w-12 xs:h-12 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent  dark:border-light"
                whileHover={{
                    scale: 1.5,
                    backgroundColor: ['#121212', 'rgba(252,176,69,1)', '#939d09', '#38f70e', '#210fe853'],
                    transition: { duration: 1.5, repeat: Infinity },
                }}
            >
                Kİ
            </MotionLink>
        </div>
    );
};

export default Logo;
