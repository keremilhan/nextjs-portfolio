'use client';
import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import jobsterImg from '../../public/images/projects/jobster-app.jpg';
import keremBoardImg from '../../public/images/projects/kerem-board.png';
import newsAppImg from '../../public/images/projects/news-app.png';
import countriesAppImg from '../../public/images/projects/countries-app.png';
import movieAppImg from '../../public/images/projects/movie-app.png';
import hangmanGameImg from '../../public/images/projects/hangman-game.png';
import aroniaWebsiteImg from '../../public/images/projects/aronia-website.png';
import blackjackAppImg from '../../public/images/projects/blackjack-app.png';
import portfolioImg from '../../public/images/projects/portfolio.png';
import communityEventsImg from '../../public/images/projects/community-events.png';
import { motion } from 'framer-motion';
import useThemeSwitcher from '@/components/hooks/useThemeSwitcher';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject: React.FC<{
    id?: number;
    summary: string;
    type: string;
    title: string;
    img: StaticImageData;
    link: string;
    github: string;
}> = ({ id, summary, type, title, img, link, github }) => {
    return (
        <article className="w-full flex items-start justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[101%] xs:rounded-[1.5rem]" />
            <Link
                href={`/projects/${id}`}
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full border-2 border-spacing-4 border-dark/75 dark:border-light"
                title="Click for Project Details"
            >
                <FramerImage
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="w-full mt-2 flex items-center xs:justify-start justify-between xs:items-start gap-4">
                    <Link href={link} target="_blank" className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-2 sm:text-sm">
                        Live
                    </Link>
                    <Link className="w-10" href={github} target="_blank">
                        <GithubIcon />
                    </Link>
                    {/* Projects' detail page will be ready soon */}
                    {/* <Link href={`/projects/${id}`} className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-2 sm:text-sm">
                        Details
                    </Link> */}
                </div>
            </div>
        </article>
    );
};

const Project: React.FC<{
    type: string;
    title: string;
    img: StaticImageData;
    link: string;
    github: string;
}> = ({ type, title, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 xs:h-[102%] xs:rounded-[1.5rem] " />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg" title="Live Demo">
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl sm:text-sm">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-xl font-bold underline md:text-base">
                        Live
                    </Link>
                    <Link className="w-10 md:w-8" href={github} target="_blank">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const GithubProjectCategory: React.FC<{
    title: string;
    link: string;
}> = ({ title, link }) => {
    return (
        <Link href={link} target="_blank" className="flex justify-between items-center cursor-pointer">
            <div className="flex gap-3 items-center w-fit bg-dark/20 dark:bg-light p-2 px-4 rounded-lg">
                <div className="w-10">
                    <GithubIcon />
                </div>
                <h4 className="dark:text-dark">{title}</h4>
            </div>
        </Link>
    );
};

const ProjectsPage = () => {
    const [mode] = useThemeSwitcher();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    const iconColor = mode === 'dark' ? 'black' : 'white';
    return (
        <main className="flex w-full flex-col items-center justify-center p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 xs:p-0 pt-10 mb-16 dark:text-light">
            <TransitionEffect />
            <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-18 sm:gap-x-0 sm:gap-y-8">
                <div className="col-span-12 z-0">
                    <h3 className="text-4xl font-bold text-center my-10">All projects on Github</h3>
                    <div className="flex justify-between">
                        <GithubProjectCategory title="Fullstack Projects" link="https://github.com/keremilhan/MERN-Stack-Projects" />
                        <GithubProjectCategory title="React Projects" link="https://github.com/keremilhan/React-Projects" />
                        <GithubProjectCategory title="Javascript Projects" link="https://github.com/keremilhan/JavaScript-Projects" />
                        <GithubProjectCategory title="Ink Tech Solutions" link="https://github.com/orgs/ink-tech-solutions/repositories" />
                    </div>
                </div>
                <div className="col-span-12 z-0">
                    <FeaturedProject
                        title="Kerem Board"
                        id={2}
                        summary="A dynamic application which incorporates a secure user authentication system, providing a convenient test user access option for those interested in exploring the application's features without immediate registration. Users can create personalized profiles, categorize tasks using the intuitive kanban board interface. The inclusion of date-based filtering enhances productivity, making task organization seamless."
                        link="https://kerem-board-app.onrender.com"
                        type="Feautured Project"
                        img={keremBoardImg}
                        github="https://github.com/keremilhan/kerem-board"
                    />
                </div>
                <div className="col-span-6 z-0 sm:col-span-12 items-center">
                    <Project title="Aronia Website" link="https://aronya-aronia.com" type="Project" img={aroniaWebsiteImg} github="https://github.com/keremilhan" />
                </div>
                <div className="col-span-6 z-0 sm:col-span-12 items-center">
                    <Project title="Blackjack Game" link="https://keremilhan.github.io/Blackjack/" type="Project" img={blackjackAppImg} github="https://github.com/keremilhan/Blackjack" />
                </div>
                <div className="col-span-12 z-0">
                    <FeaturedProject
                        title="Community Events"
                        id={3}
                        summary="A dynamic platform designed with the most recent technologies like Nextjs, Nestjs and TailwindCSS to empower users to organize and participate in a wide array of events. Whether it's a local meetup, workshop, or cultural gathering, this project provides a seamless experience for event creators and attendees alike. It is still an unfinished and ongoing project."
                        link="https://community-events-frontend.vercel.app"
                        type="Feautured Project"
                        img={communityEventsImg}
                        github="https://github.com/ink-tech-solutions/community-events-frontend"
                    />
                </div>

                <div className="col-span-6 z-0 sm:col-span-12">
                    {' '}
                    <Project title="News App" link="https://news-anouncements.netlify.app" type="Project" img={newsAppImg} github="https://github.com/keremilhan/news-announcements" />
                </div>
                <div className="col-span-6 z-0 sm:col-span-12">
                    <Project title="Countries App" link="https://countries-api-project-kerem.netlify.app" type="Project" img={countriesAppImg} github="https://github.com/keremilhan/countries-api" />
                </div>
                <div className="col-span-12 z-0">
                    <FeaturedProject
                        title="Jobster App"
                        id={1}
                        summary="Jobster is a MERN stack project designed to simplify job hunting. It features user authentication, allowing hassle-free exploration via a test account. Users can create profiles, track job applications, and monitor their progress. With an intuitive dashboard, Jobster offers efficiency and organization for users seeking their next career move."
                        link="https://jobster-fullstack-project.onrender.com/add-job"
                        type="Feautured Project"
                        img={jobsterImg}
                        github="https://github.com/keremilhan/jobster-fullstack-project"
                    />
                </div>
                <div className="col-span-6 z-0 sm:col-span-12">
                    <Project title="Hangman Game" link="https://keremilhan.github.io/Hangman-Game/" type="Project" img={hangmanGameImg} github="https://github.com/keremilhan/Hangman-Game" />
                </div>
                <div className="col-span-6 z-0 sm:col-span-12">
                    <Project title="Movie App" link="https://movie-app-with-reactjs.netlify.app" type="Project" img={movieAppImg} github="https://github.com/keremilhan/movie-app" />
                </div>
                <div className="col-span-12 z-0">
                    <FeaturedProject
                        title="Kerem Portfolio"
                        id={4}
                        summary="Hello, and welcome to my portfolio! I'm a passionate full-stack developer with a focus on crafting seamless, user-friendly web experiences. With expertise in both front-end and back-end development, I thrive on bringing ideas to life through code."
                        link="https://keremilhan-portfolio.vercel.app"
                        type="Feautured Project"
                        img={portfolioImg}
                        github="https://github.com/keremilhan/nextjs-portfolio"
                    />
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;
