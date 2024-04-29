'use client';
import AnimatedText from '@/components/AnimatedText';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef } from 'react';
import article1 from '../../public/images/articles/pagination component in reactjs.jpg';
import article2 from '../../public/images/articles/create loading screen in react js.jpg';
import article3 from '../../public/images/articles/What is higher order component in React.jpg';
import { motion, useMotionValue } from 'framer-motion';

const FramerImage = motion(Image);

const MovingImage: React.FC<{ title: string; img: StaticImageData; link: string }> = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef<HTMLImageElement>(null);

    function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        if (!imgRef.current) {
            return;
        }
        imgRef.current.style.display = 'inline-block';
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        if (!imgRef.current) {
            return;
        }
        imgRef.current.style.display = 'none';
        x.set(0);
        y.set(0);
    }
    return (
        <Link href={link} target="_blank" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <h2 className="capitilize text-2xl font-bold my-2 mt-4 hover:underline underline-offset-2">{title}</h2>
            <FramerImage
                style={{ x, y }}
                ref={imgRef}
                src={img}
                alt={title}
                className="z-10 w-96 h-auto hidden absolute rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
        </Link>
    );
};

const FeaturedArticle: React.FC<{ img: StaticImageData; title: string; time: number; link: string; summary: string }> = ({ img, title, time, link, summary }) => {
    return (
        <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:border-light dark:bg-dark dark:text-light ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
            <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
            </Link>

            <Link href={link} target="_blank">
                <h2 className="capitilize text-2xl font-bold my-2 mt-4 hover:underline underline-offset-2">{title}</h2>
                <Image priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" src={img} alt={title} className="w-96 h-auto hidden absolute rounded-lg" />
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold dark:text-primaryDark">{time} min read</span>
        </li>
    );
};
const Article: React.FC<{ img: StaticImageData; title: string; date: string; link: string }> = ({ img, title, date, link }) => {
    return (
        <motion.li
            className="relative w-full p-4 py-8 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light "
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            viewport={{ once: true }}
        >
            <MovingImage title={title} img={img} link={link} />
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark">{date}</span>
        </motion.li>
    );
};

const ArticlesPage = () => {
    return (
        <main className="flex w-full flex-col items-center justify-center p-32 pt-10 mb-16 dark:text-light dark:bg-dark">
            <AnimatedText text="Words Can Change The World! " className="mb-16" />
            <ul className="grid grid-cols-2 gap-16 z-0">
                <FeaturedArticle
                    title="Build A Custom Pagination Component In Reactjs From Scratch"
                    summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                    time={9}
                    link="/"
                    img={article1}
                />
                <FeaturedArticle
                    title="Build A Custom Pagination Component In Reactjs From Scratch"
                    summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                    time={9}
                    link="/"
                    img={article2}
                />
            </ul>
            <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
            <ul className="w-full">
                <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article1} date="March 22, 2022" link="/" />
                <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article2} date="March 22, 2022" link="/" />
                <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article3} date="March 22, 2022" link="/" />
                <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article3} date="March 22, 2022" link="/" />
                <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article3} date="March 22, 2022" link="/" />
            </ul>
        </main>
    );
};

export default ArticlesPage;
