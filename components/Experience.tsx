import React from 'react';
import { calculateDateDifference } from '@/utils/functions';

const Details: React.FC<{
    position: string;
    company: string;
    companyLink: string;
    startTime: string;
    endTime: string;
    address: string;
    work: any[];
    summary: string;
}> = ({ position, company, companyLink, startTime, endTime, address, work, summary }) => {
    const expTime = calculateDateDifference(startTime, endTime);
    return (
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <div>
                <h3 className="capitilize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;{' '}
                    <a href={companyLink} target={companyLink === '#' ? '' : '_blank'} className="text-primary dark:text-primaryDark capitalize">
                        @{company}
                    </a>
                </h3>
                <span className="capitilize font-medium text-dark/75 xs:text-sm">
                    {startTime} - {endTime} | {address} ({expTime})
                </span>
                <p className="font-light italic w-full list-disc md:text-sm">{summary}</p>
                <ul className="mt-2 flex flex-col gap-2 ml-5">
                    {work.map((bullet, index) => {
                        if (index === 0) {
                            return (
                                <li key={`${bullet}_${index}`} className="font-bold w-full list-disc md:text-sm">
                                    {bullet}
                                </li>
                            );
                        }
                        return (
                            <li key={`${bullet}_${index}`} className="font-medium w-full list-disc md:text-sm">
                                {bullet}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </li>
    );
};

const Experience = () => {
    return (
        <div className="my-64 md:my-32 xs:my-14">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>
            <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <div className="absolute left-8 top-0 w-[4px] h-full bg-dark/75 dark:bg-light/75 md:left-0" />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs-ml-2">
                    <Details
                        position="Software Developer"
                        company="Freelance"
                        companyLink="#"
                        startTime="Nov 2024"
                        endTime="Present"
                        address="Netherlands"
                        summary="Developed a reporting system for an international shipping company, enabling crew members to create detailed noon reports and office staff to analyze data through tables and charts."
                        work={[
                            'Tech Stack: Django, Python, Javascript, Docker, SQLite',
                            'Designed and implemented a backend system to generate, store, and retrieve noon reports for shipping crews.',
                            'Developed a dashboard for office staff to visualize reports using tables and charts for enhanced data-driven decision-making.',
                            'Integrated carbon value calculations to help monitor and manage the environmental impact of ships.',
                            'Collaborated closely with stakeholders to ensure the project met the operational needs of both on-board crews and office staff.',
                            'Deployed the project using Docker, ensuring scalability and efficient environment management.',
                        ]}
                    />
                    <Details
                        position="Software Developer Mentor - Volunteer"
                        company="HackYourFuture"
                        companyLink="https://www.hackyourfuture.net"
                        startTime="Mar 2024"
                        endTime="Present"
                        address="Netherlands"
                        summary="HackYourFuture empowers individuals with refugee backgrounds to become web developers through a free program. I am working as a Volunteer Mentor."
                        work={[
                            'Tech Stack: Javascript, React, Node.JS',
                            'Reviewing assignments submitted by students, providing feedback to help them improve their coding skills',
                            'Organizing coding sessions and workshops as needed.',
                            'Mentoring students on best practices and coding standards to enhance their readiness for real-world projects.',
                            'Collaborating with fellow mentors to develop and refine the curriculum, ensuring it meets industry standards and addresses current trends in web development.',
                            'Facilitating one-on-one sessions with students to provide personalized guidance and support tailored to their individual learning paths.',
                        ]}
                    />
                    <Details
                        position="Software Developer"
                        company="Perculus"
                        companyLink="https://www.perculus.com"
                        startTime="Aug 2022"
                        endTime="Jan 2024"
                        address="Remote"
                        summary="Perculus is a browser based e-learning platform. You can organize meetings on Perculus, this platform explicitly focuses on e-learning and education. I worked as a Software Developer where I was mainly responsible for creating real time and interactive applications from scratch and improved an internal library which is used actively in our development processes."
                        work={[
                            'Tech Stack: Typescript, Javascript, React, Node.JS, PostgreSQL, Socket.io, SCSS, Styled Components',
                            'Created 5 unique real time and interactive applications from scratch by using mainly React, Typescript, WebSocket and an internal library, resulting increase in sales by 150% and customer satisfaction.',
                            'Improved and contributed the functionality of an internal library which is used actively in development processes by using Node.js, Typescript.',
                            'Implemented performance optimizations on available applications resulting in a 60% improvement in performance.',
                            'Demonstrated strong project management skills, consistently delivering tasks on time and within budget.',
                            'Reason for leaving:** Relocated to the Netherlands.',
                        ]}
                    />
                    <Details
                        position="Software Developer"
                        company="Belderia"
                        companyLink="#"
                        startTime="Aug 2020"
                        endTime="Aug 2022"
                        address="Remote"
                        summary='A leading manufacturer of high-quality bicycles, I worked as a Software Developer where I was responsible for enhancing and maintaining the company"s e-commerce platform.'
                        work={[
                            'Tech Stack: Typescript, Javascript, React, SCSS, Bootstrap, Node.JS',
                            "Migrated company''s e-commerce platform from legacy code to modern technologies.",
                            'Resolved bugs and made improvements resulting in a notable 70% increase in website traffic.',
                            'Organized the digital presence of the company resulting in a remarkable 200% increase in customer numbers.',
                            'Reason for leaving: Relocated to another city.',
                        ]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
