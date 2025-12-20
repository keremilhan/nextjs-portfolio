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
            <div className="flex flex-wrap justify-between items-start w-full z-0 gap-8 mt-10">
                <div className="w-full flex xl:flex-col justify-between items-center gap-10">
                    <div className="w-full text-lg flex flex-col items-start justify-start gap-4 md:order-2">
                        <h2 className="mb-4 text-3xl font-bold uppercase text-dark/90 dark:text-light/90 m-auto">About me</h2>
                        <p className="font-medium break-words">
                            Fullstack developer with a proven track record of delivering high-impact web applications across diverse industries—from medical imaging to maritime logistics. Currently
                            building scalable reporting systems at JohnSnowLabs, combining technical excellence with strong product ownership. I specialize in architecting and implementing complex,
                            performance-optimized user interfaces while designing robust backend services. My technical toolkit centers on <strong>Python (FastAPI, Django), React, TypeScript, and NestJS</strong>, with
                            a focus on writing maintainable, scalable code that solves real business problems.
                        </p>
                        <div className="font-medium">
                            <strong>What I bring:</strong>
                            <ul className="list-disc ml-6 mt-2 flex flex-col gap-1">
                                <li><strong>End-to-end ownership:</strong> From technical design and Figma-to-production UI implementation to backend architecture and long-term maintenance</li>
                                <li><strong>Performance-driven:</strong> Consistently optimize frontend rendering, API efficiency, and system responsiveness (achieved up to 60% performance improvements)</li>
                                <li><strong>Product mindset:</strong> Shape feature scope and technical decisions through close collaboration with product managers, designers, and stakeholders</li>
                                <li><strong>Specialized experience:</strong> Medical imaging systems (OpenSeadragon, OHIF Viewer integration), real-time applications (Socket.io), and complex data visualization</li>
                            </ul>
                        </div>
                        <p className="font-medium">
                            Beyond my day-to-day work, I&apos;m passionate about giving back to the tech community. As a volunteer mentor at <strong>HackYourFuture</strong> since 2024, I guide aspiring developers with
                            refugee backgrounds through code reviews, workshops, and career preparation—helping them build the skills and confidence needed for their first tech roles. I thrive in
                            environments that value clean architecture, modern engineering practices, and continuous learning. Whether it&apos;s integrating microscopy viewers into medical workflows
                            or building internal component libraries, I&apos;m driven by the challenge of turning complex requirements into elegant, user-friendly solutions. <strong>Let&apos;s connect</strong> if
                            you&apos;re working on challenging problems in web development, building impactful products, or passionate about engineering excellence and mentorship.
                        </p>
                    </div>
                    <div className="w-[33%] md:w-[50%] sm:w-full relative h-max rounded-2xl border-2 sm:border-4 border-solid border-dark bg-light p-8 xl:p-6 md:p-4 xs:p-1 dark:bg-dark dark:border-light md:order-1">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light sm:hidden" />
                        <Image priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={ProfilePhoto} alt="Profile Image" className="w-full h-auto rounded-2xl" />
                    </div>
                </div>
                <div className="w-full flex-row flex items-center justify-around mt-10 sm:mt-0">
                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimatedNumbers value={12} />+
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
                            <AnimatedNumbers value={4} />+
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
