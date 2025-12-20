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
                        position="Fullstack Developer"
                        company="JohnSnowLabs"
                        companyLink="https://www.johnsnowlabs.com"
                        startTime="Sep 2025"
                        endTime="Present"
                        address="United States"
                        summary="Building critical modules for the platform — an end-to-end clinical data intelligence system that transforms fragmented, multimodal healthcare data into a unified, analytics-ready foundation for research, cohort analysis, and AI-driven clinical applications."
                        work={[
                            'Tech Stack: Python (FastAPI), NestJS, React, TypeScript, Tailwind CSS, Ant Design',
                            'Led the end-to-end ownership of multiple critical application modules, from technical design and implementation to production rollout and long-term maintenance.',
                            'Architected and delivered complex, high-performance user interfaces, balancing scalability, maintainability, and excellent user experience.',
                            'Translated Figma designs into pixel-perfect, production-grade UI implementations, setting frontend quality standards across the team.',
                            'Designed and implemented backend services using FastAPI to support evolving product requirements, and drove their seamless integration into frontend applications.',
                            'Defined and enforced clean API contracts between frontend and backend, ensuring reliability, consistency, and ease of future extension.',
                            'Drove performance-focused development practices, optimizing frontend rendering, API efficiency, and overall system responsiveness.',
                            'Took strong product ownership, actively shaping feature scope, technical decisions, and trade-offs in close collaboration with product managers and designers.',
                            'Mentored team members through code reviews and architectural guidance, contributing to higher engineering standards and team velocity.',
                            'Ensured long-term scalability and maintainability by applying sound architectural principles and modern engineering best practices.',
                        ]}
                    />
                    <Details
                        position="Medical Software Developer"
                        company="Gesund.ai"
                        companyLink="https://www.gesund.ai"
                        startTime="May 2025"
                        endTime="Sep 2025"
                        address="United States"
                        summary="Developed a full-stack medical imaging platform for viewing and annotating large-scale microscopy slides, enabling clinicians to efficiently analyze whole-slide images for diagnostic and research purposes."
                        work={[
                            'Tech Stack: Python (FastAPI), React, TypeScript, OpenSeadragon, OHIF Viewer, NestJS',
                            'Implemented FastAPI services to prepare microscopy slide images for OpenSeadragon by generating multi-resolution, tile-based image structures on the backend.',
                            'Implemented an OpenSeadragon-based viewer to efficiently render large-scale whole-slide images with smooth zooming and panning.',
                            'Integrated the microscopy viewer into the OHIF Viewer ecosystem, ensuring interoperability with existing medical imaging workflows.',
                            'Designed and implemented end-to-end annotation and cropping functionalities, covering both backend image processing pipelines and frontend user interactions.',
                            'Built full-stack features for creating, storing, and managing image annotations, enabling precise region-of-interest (ROI) marking for medical analysis.',
                            'Optimized image streaming and tiling strategies to handle very large microscopy images with minimal latency.',
                            'Collaborated closely with clinicians and internal stakeholders to align imaging tools with real diagnostic and research workflows.',
                            'Ensured scalability and maintainability of the imaging services by following clean architecture and API design best practices.',
                        ]}
                    />
                    <Details
                        position="Fullstack Developer"
                        company="Ship Reports"
                        companyLink="#"
                        startTime="Nov 2024"
                        endTime="May 2025"
                        address="Amsterdam, NL"
                        summary="Built a reporting system for a shipping company that helps crews log daily data and office teams analyze it through charts and tables."
                        work={[
                            'Tech Stack: Django, Python, Javascript, Docker, SQLite',
                            'Designed and implemented the backend using Django and SQLite, handling data collection, storage, and retrieval.',
                            'Developed a responsive frontend with vanilla JS and Django HTML templates.',
                            'Created an internal dashboard for office users to view and interpret data.',
                            'Integrated carbon value calculations to support environmental reporting.',
                            'Worked directly with stakeholders to make sure the tool met real-world operational needs.',
                        ]}
                    />
                    <Details
                        position="Frontend Developer Mentor"
                        company="HackYourFuture"
                        companyLink="https://www.hackyourfuture.net"
                        startTime="Mar 2024"
                        endTime="Present"
                        address="Amsterdam, NL"
                        summary="Volunteer mentor in a program helping people with refugee backgrounds become web developers."
                        work={[
                            'Tech Stack: Javascript, React, Node.JS',
                            "Review students' code and give clear, practical feedback to support their learning.",
                            'Host workshops and one-on-one sessions to guide students through real-world dev challenges.',
                            'Mentoring students on best practices and coding standards to enhance their readiness for real-world projects.',
                            'Help maintain and improve the curriculum to reflect current frontend practices and job expectations.',
                            'Collaborate with other mentors to build a strong, inclusive learning community.',
                        ]}
                    />
                    <Details
                        position="Frontend Developer"
                        company="Perculus"
                        companyLink="https://www.perculus.com"
                        startTime="Aug 2022"
                        endTime="Jan 2024"
                        address="Turkey"
                        summary="Worked on an interactive e-learning platform focused on online meetings and virtual classrooms."
                        work={[
                            'Tech Stack: Typescript, Javascript, React, Node.JS, PostgreSQL, Socket.io, SCSS, Styled Components',
                            'Built 5+ real-time web apps from scratch using React, TypeScript, and Socket.io.',
                            'Helped develop and maintain an internal component library to speed up development.',
                            'Improved frontend performance significantly (up to 60% in some areas).',
                            'Collaborated with cross-functional teams including product, QA, and backend.',
                            'Got hands-on with product decisions, deadlines, and prioritization — startup-style.',
                            'Reason for leaving: Relocated to the Netherlands.',
                        ]}
                    />
                    <Details
                        position="Frontend Developer"
                        company="Belderia"
                        companyLink="#"
                        startTime="Aug 2021"
                        endTime="Aug 2022"
                        address="Turkey"
                        summary="Maintained and modernized the company's e-commerce site for a major bicycle manufacturer."
                        work={[
                            'Tech Stack: Typescript, Javascript, React, Node.JS, PostgreSQL, Socket.io, SCSS, Styled Components',
                            'Rebuilt the platform using React and TypeScript, replacing legacy code.',
                            'Fixed bugs, improved UI/UX, and helped increase site traffic by 70%.',
                            "Led the effort to streamline the company's digital presence, which contributed to a 200% growth in customer engagement.",
                            'Reason for leaving: Moved to a different city.',
                        ]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
