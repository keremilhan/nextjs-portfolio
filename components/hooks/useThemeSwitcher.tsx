'use client';
import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
    const preferDarkQuery = '(prefers-color-scheme: dark)';
    const [mode, setMode] = useState(typeof window !== 'undefined' ? window.localStorage.getItem('theme') || '' : '');

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem('theme');

        const handleChange = () => {
            if (userPref) {
                let check = userPref === 'dark' ? 'dark' : 'light';
                setMode(check);
                if (check === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            } else {
                let check = mediaQuery.matches ? 'dark' : 'light';
                setMode(check);
                if (check === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }
            // let check = userPref === 'dark' ? 'dark' : 'light';
            // setMode(check);
            // if (check === 'dark') {
            //     document.documentElement.classList.add('dark');
            // } else {
            //     document.documentElement.classList.remove('dark');
            // }
        };
        handleChange();
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (mode === 'dark') {
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [mode]);
    return [mode, setMode] as const;
};

export default useThemeSwitcher;
