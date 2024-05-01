'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { GithubIcon } from './Icons';
import useThemeSwitcher from './hooks/useThemeSwitcher';

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
                href={link}
                target="_blank"
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
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-2 sm:text-sm">
                        Live
                    </Link>
                    <Link className="w-10" href={github} target="_blank">
                        <GithubIcon className="dark:fill-light" />
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

export default FeaturedProject;
