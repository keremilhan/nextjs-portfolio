'use client';
import AnimatedText from '@/components/AnimatedText';
import React, { useEffect, useRef } from 'react';
import ProfilePhoto from '../../public/images/profile/pp.jpg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers: React.FC<{ value: any }> = ({ value }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on('change', latest => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

const AboutPage = () => {
    return (
        <main className="flex w-full flex-col items-center justify-center pt-10 dark:text-light">
            <TransitionEffect />
            <AnimatedText text="Passion Fuels Purpose!" className="mb-16 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl" />
            <div className="grid w-full grid-cols-8 gap-16 z-0 sm:gap-10">
                <div className="col-span-3 xl:col-span-4 md:col-span-7 flex flex-col items-start justify-start gap-4 md:order-2">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">About me</h2>
                    <p className="font-medium">
                        Hi, I&apos;m Kerem, a web developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 2 years of experience in the field. I am
                        always looking for new and innovative ways to bring my clients&apos; visions to life.
                    </p>
                    <p className="font-medium">
                        I believe that design is about more than just making things look pretty it&apos;s about solving problems and creating intuitive, enjoyable experiences for users.
                    </p>
                    <p className="font-medium">
                        Whether I&apos;m working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I
                        look forward to the opportunity to bring my skills and passion to your next project.
                    </p>
                </div>
                <div className="col-span-3 xl:col-span-4 md:col-span-7 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xs:p-2 dark:bg-dark dark:border-light md:order-1">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                    <Image priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={ProfilePhoto} alt="Profile Image" className="w-full h-auto rounded-2xl" />
                </div>
                <div className="col-span-2 xl:col-span-7 xl:!flex-row flex flex-col items-end justify-between xl:items-center md:order-3">
                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimatedNumbers value={5} />+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied clients</h2>
                    </div>
                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimatedNumbers value={40} />+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">projects completed</h2>
                    </div>
                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimatedNumbers value={2} />+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">years of experience</h2>
                    </div>
                </div>
            </div>
            <Skills />
            <Experience />
        </main>
    );
};

export default AboutPage;
