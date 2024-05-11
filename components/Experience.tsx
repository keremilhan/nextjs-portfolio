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
                    <a href={companyLink} target={companyLink === '#' ? '' : '_blank'} className="text-primary dark:text-primaryDark capitalize">
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
                        position="Software Developer Mentor - Volunteer"
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
                        companyLink="#"
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
                        position="Software Developer Mentor"
                        company="Independent/Personal Initiative"
                        companyLink="#"
                        time="Oct 2022 - Present"
                        address="Remote"
                        work={[
                            'Providing one-on-one mentorship sessions to individuals interested in breaking into the tech industry.',
                            'Offering guidance on technical skills development, career planning, and job search strategies.',
                            'Sharing industry insights, best practices, and resources to support mentees in their journey.',
                            'Tailoring mentorship approaches to meet the unique needs and goals of each mentee.',
                            'Collaborating with mentees to identify opportunities for skill enhancement and professional growth.',
                            'Successfully mentored 5 individuals, helping them secure internships, entry-level positions, and career transitions within the tech sector.',
                            'Received positive feedback from mentees for providing valuable guidance, support, and encouragement throughout their career journey.',
                        ]}
                    />
                    <Details
                        position="Software Developer"
                        company="Perculus"
                        companyLink="https://www.perculus.com"
                        time="Aug 2022 - Jan 2024"
                        address="Remote"
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
                        position="Software Developer"
                        company="Belderia"
                        companyLink="#"
                        time="Aug 2020 - Aug 2022"
                        address="Remote"
                        work={[
                            "Built website development using HTML, CSS, and JavaScript for company's e-commerce platform.",
                            'Implemented crucial enhancements and resolved bugs, resulting in a notable 50% surge in website traffic.',
                            'Orchestrated improvements to the digital presence, culminating in a remarkable 200% rise in customer acquisition.',
                        ]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
