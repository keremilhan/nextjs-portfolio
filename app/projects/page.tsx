'use client';
import AnimatedText from '@/components/AnimatedText';
import React from 'react';
import {
    jobsterImg,
    keremBoardImg,
    newsAppImg,
    countriesAppImg,
    movieAppImg,
    hangmanGameImg,
    aroniaWebsiteImg,
    blackjackAppImg,
    portfolioImg,
    communityEventsImg,
    rangeSliderImg,
    urlShortenerImg,
    upcomingMoviesImg,
} from '@/public/images/projects';
import TransitionEffect from '@/components/TransitionEffect';
import GithubProjectCategory from '@/components/GithubProjectCategory';
import FeaturedProject from '@/components/FeaturedProject';
import Project from '@/components/Project';

const ProjectsPage = () => {
    return (
        <main className="flex w-full flex-col items-center justify-center p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 xs:p-0 pt-10 mb-16 dark:text-light">
            <>
                <TransitionEffect />
                <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-18 sm:gap-x-0 sm:gap-y-8">
                    <div className="col-span-12 z-0">
                        <h3 className="text-4xl font-bold text-center my-10">All projects on Github</h3>
                        <div className="flex justify-between flex-wrap sm:justify-center">
                            <GithubProjectCategory title="Fullstack Projects" link="https://github.com/keremilhan/MERN-Stack-Projects" />
                            <GithubProjectCategory title="React Projects" link="https://github.com/keremilhan/React-Projects" />
                            <GithubProjectCategory title="Javascript Projects" link="https://github.com/keremilhan/JavaScript-Projects" />
                            <GithubProjectCategory title="Ink Tech Solutions" link="https://github.com/orgs/ink-tech-solutions/repositories" />
                        </div>
                    </div>
                    <div className="col-span-12 z-0">
                        <FeaturedProject
                            title="Url Shortener"
                            id={1}
                            summary="This project is a full stack application designed to manage shortened URLs. It includes features for user registration, authentication, and URL management. Users can create, edit, and delete their shortened URLs through a user-friendly dashboard. Additionally, the application supports redirection from shortened URLs to the intended target URLs."
                            link="https://url-shortener-kerem.vercel.app"
                            type="Feautured Project"
                            img={urlShortenerImg}
                            github="https://github.com/keremilhan/url-shortener"
                        />
                    </div>
                    <div className="col-span-12 z-0">
                        <FeaturedProject
                            title="Upcoming Movies"
                            id={2}
                            summary="This Upcoming Movies App provides users with a seamless experience to search for upcoming movies and view their details. Built with modern React tools and libraries, it ensures fast performance, smooth navigation, and an appealing design."
                            link="https://upcoming-movies-app.netlify.app"
                            type="Feautured Project"
                            img={upcomingMoviesImg}
                            github="https://github.com/keremilhan/upcoming-movies-web-app"
                        />
                    </div>
                    <div className="col-span-12 z-0">
                        <FeaturedProject
                            title="React Range Slider"
                            id={3}
                            summary="The React Range Slider package offers a customizable and accessible range input component for React applications, simplifying the selection of values within a defined range. With features like customizable appearance, event handling, and responsive design, it caters to diverse use cases, from form controls to data visualization tools. Its aim is to streamline the implementation of range input functionality, enhancing user experience and facilitating the creation of interactive and user-friendly interfaces in React projects. Whether for form validation, data filtering, or interactive charts, the React Range Slider provides a versatile solution for developers seeking to integrate range selection capabilities into their applications."
                            link="https://www.npmjs.com/package/@inkdev/react-range-slider"
                            type="Feautured Project"
                            img={rangeSliderImg}
                            github="https://github.com/ink-tech-solutions/react-range-slider"
                        />
                    </div>
                    <div className="col-span-12 z-0">
                        <FeaturedProject
                            title="Kerem Board"
                            id={4}
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
                            id={5}
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
                        <Project
                            title="Countries App"
                            link="https://countries-api-project-kerem.netlify.app"
                            type="Project"
                            img={countriesAppImg}
                            github="https://github.com/keremilhan/countries-api"
                        />
                    </div>
                    <div className="col-span-12 z-0">
                        <FeaturedProject
                            title="Jobster App"
                            id={6}
                            summary="Jobster is a MERN stack project designed to simplify job hunting. It features user authentication, allowing hassle-free exploration via a test account. Users can create profiles, track job applications, and monitor their progress. With an intuitive dashboard, Jobster offers efficiency and organization for users seeking their next career move."
                            link="https://jobster-fullstack-project.onrender.com"
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
                            id={7}
                            summary="Hello, and welcome to my portfolio! I'm a passionate full-stack developer with a focus on crafting seamless, user-friendly web experiences. With expertise in both front-end and back-end development, I thrive on bringing ideas to life through code."
                            link="https://keremilhan-portfolio.vercel.app"
                            type="Feautured Project"
                            img={portfolioImg}
                            github="https://github.com/keremilhan/nextjs-portfolio"
                        />
                    </div>
                </div>
            </>
        </main>
    );
};

export default ProjectsPage;
