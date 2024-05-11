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
                            I have 4 years of experience in web development but my expertise is beyond this. I have a strong ability to learn new things. I am very flexible and solution-oriented. I
                            understand the business requirements and know my role in this perspective. Throughout my career, I have always delivered high quality and problem-solver software to my
                            customers and the customers of the companies that I worked at.
                        </p>
                        <p className="font-medium">
                            I have a strong foundation in frontend development, and particularly in React.js. I&apos;m proficient in HTML, CSS, and JavaScript and also TypeScript. Within the React
                            ecosystem, I have some experience in utilizing frameworks such as Next.js for server-side rendering, as well as Node.js and Nest.js on the backend. I&apos;ve also worked
                            with various CSS frameworks to ensure responsive and visually appealing designs. I have experience with state management solutions like Redux, and I have used Git as a
                            version control tool, and as platforms such as GitHub and GitLab for collaborative coding. Additionally, I&apos;ve honed my skills in UI/UX principles and design
                            aesthetics, allowing me to create user-friendly interfaces and optimize website performance. My adaptability to emerging technologies and frameworks ensures that I stay
                            up-to-date with the evolving frontend landscape, enabling me to deliver high-quality software efficiently.
                        </p>
                        <p className="font-medium">
                            I have experience working with api and integrating them into frontend applications. Additionally, Thanks to my personal side projects, I have also gained experience in
                            backend technologies such as Django, Node.js and Nest.js. So I have a good grasp of backend development. This helps me understand the whole process better and know
                            what&apos;s going on behind the scenes when making frontend decisions. It makes it easier for me to understand the backend team&apos;s needs and also helps me explain my
                            needs to them effectively. My commitment to staying up-to-date with the latest web technologies and best practices reflects my dedication to enhancing user experiences in
                            my applications and delivering high quality software.
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
