import React from 'react';

const Details: React.FC<{
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: any[];
}> = ({ position, company, companyLink, time, address, work }) => {
    return (
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <div>
                <h3 className="capitilize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;{' '}
                    <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">
                        @{company}
                    </a>
                </h3>
                <span className="capitilize font-medium text-dark/75 xs:text-sm">
                    {time} | {address}
                </span>
                <ul className="mt-2 flex flex-col gap-2 ml-5">
                    {work.map((bullet, index) => (
                        <li key={`${bullet}_${index}`} className="font-medium w-full list-disc md:text-sm">
                            {bullet}
                        </li>
                    ))}
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
                        position="Volunteer Tech Mentor"
                        company="HackYourFuture"
                        companyLink="https://www.hackyourfuture.net"
                        time="Mar 2024 - Present"
                        address="Netherlands"
                        work={[
                            'Conducting thorough code reviews for assignments submitted by students, providing constructive feedback to help them refine their coding skills and improve code quality.',
                            'Collaborating closely with students, offering personalized guidance and mentoring sessions to address their specific learning needs and challenges.',
                            'Organizing coding sessions and workshops as needed, facilitating interactive learning experiences and hands-on practice to reinforce technical concepts and foster skill development.',
                            'Mentoring students on software development best practices, coding standards, and effective problem-solving strategies to enhance their readiness for real-world projects.',
                        ]}
                    />
                    <Details
                        position="Software Developer"
                        company="Freelance"
                        companyLink="https://www.github.com/keremilhan"
                        time="Jan 2024 - Present"
                        address="Netherlands"
                        work={[
                            'Successfully collaborated with numerous clients to understand their unique requirements and translate them into actionable development plans, ensuring alignment with their business objectives.',
                            'Leveraged my technical prowess to design, develop, and deploy bespoke software solutions tailored to meet the specific needs and challenges of each client, ranging from web applications to mobile apps and beyond.',
                            'Demonstrated strong project management skills in overseeing the entire software development lifecycle, from initial concept and design to implementation, testing, and deployment, ensuring projects are delivered on time and within budget.',
                            'Proactively stay abreast of emerging technologies, trends, and best practices within the software development landscape, consistently refining my skills and adopting new tools and methodologies to enhance the quality and efficiency of my work.',
                        ]}
                    />
                    <Details
                        position="Software Developer"
                        company="Perculus"
                        companyLink="https://www.perculus.com"
                        time="Aug 2022 - Present"
                        address="Türkiye"
                        work={[
                            "Successfully developed and launched unique icebreaker activities for the company's product, resulting in a significant increase in sales and customer satisfaction.",
                            'I elevated the development ecosystem of an internal library, enhancing its functionality and streamlining the process of constructing activities.',
                            'I implemented optimizations to the library, elevating its performance and effectively elevating the efficiency of its usage.',
                            'Utilized Git, GitLab, and GitHub for version control and code collaboration.',
                            "Contributed to the growth of the company's product by creating activities that resonated with customers and helped to drive product sales.",
                            'Improved product engagement and customer experience by creating interactive and entertaining icebreaker activities that received positive feedback from users.',
                            'Demonstrated strong project management skills by delivering the tasks on time and within budget.',
                        ]}
                    />
                    <Details
                        position="Fullstack Developer Trainee"
                        company="Clarusway"
                        companyLink="https://www.clarusway.com"
                        time="Jan 2022 - Nov 2022"
                        address="USA (Remote)"
                        work={[
                            'Acquired proficiency in frontend development using HTML5, CSS3, JavaScript, and React.',
                            'Designed and developed interactive and responsive websites using HTML, CSS, SASS(SCSS), Bootstrap-5, and React libraries.',
                            'Utilized JS Dom manipulation and event listeners for HTML/CSS projects',
                            '•	Implemented API requests using Async, Await, and Fetch for data retrieval from various platforms.',
                            'Proficient in using React-router, bootstrap, Axios, Tailwind, Material UI, Styled Components, and SASS/SCSS for building user-friendly websites.',
                            'Hands-on experience in state management using React States, Context API, useReducer, and Redux.',
                            'Adept at writing modular, reusable code, and familiar with build tools and package managers.',
                            'Gained expertise in computational thinking, operating systems, Linux, version control systems, and software development life cycle (SDLC).',
                            'Worked in Agile methodologies, SCRUM, and JIRA in individual and group projects.',
                        ]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
