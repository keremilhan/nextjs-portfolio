'use client';
import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import project2 from '../../public/images/projects/portfolio-cover-image.jpg';
import jobsterImg from '../../public/images/projects/jobster-app.jpg';
import { motion } from 'framer-motion';
import useThemeSwitcher from '@/components/hooks/useThemeSwitcher';
import { userAgent } from 'next/server';

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
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
            <Link href={`/projects/${id}`} className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full" title="Click for Project Details">
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
                <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
                <div className="w-full mt-2 flex items-center">
                    <Link className="w-10" href={github} target="_blank">
                        <GithubIcon />
                    </Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">
                        Visit Project
                    </Link>
                    <Link href={`/projects/${id}`} className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark ml-auto">
                        Project Details
                    </Link>
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
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg" title="Live Demo">
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline">
                        Visit
                    </Link>
                    <Link className="w-8" href={github} target="_blank">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const ProjectsPage = () => {
    const [mode] = useThemeSwitcher();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    console.log('what mode', mode);
    const iconColor = mode === 'dark' ? 'black' : 'white';
    return (
        <main className="flex w-full flex-col items-center justify-center p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 xs:p-0 pt-10 mb-16 dark:text-light">
            <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                <div className="col-span-12 z-0">
                    <FeaturedProject
                        title="Kanban Board"
                        id={2}
                        summary="The Kanban Board project is a dynamic application developed using the MERN stack, aimed at streamlining task management. It incorporates a secure user authentication system, providing a convenient test user access option for those interested in exploring the application's features without immediate registration. Users can create personalized profiles, categorize tasks using the intuitive kanban board interface, and enjoy efficient task editing and deletion. The inclusion of date-based filtering enhances productivity, making task organization seamless. With a focus on user-friendly design, the Kanban Board project empowers users to manage tasks effortlessly and enhance their productivity."
                        link="/"
                        type="Feautured Project"
                        img={jobsterImg}
                        github="/"
                    />
                </div>
                <div className="col-span-6 z-0">
                    {' '}
                    <Project title="News & Announcements App" link="https://news-anouncements.netlify.app" type="Project" img={project1} github="https://github.com/keremilhan/news-announcements" />
                </div>
                <div className="col-span-6 z-0">
                    <Project title="Contact App" link="https://news-anouncements.netlify.app" type="Project" img={project1} github="https://github.com/keremilhan/fire-contact-app" />
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
                <div className="col-span-6 z-0">
                    <Project title="Recipe App" link="https://recipe-with-react.netlify.app" type="Project" img={project1} github="https://github.com/keremilhan/recipe-app" />
                </div>
                <div className="col-span-6 z-0">
                    <Project title="Movie App" link="https://movie-app-with-reactjs.netlify.app" type="Project" img={project1} github="https://github.com/keremilhan/movie-app" />
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;
