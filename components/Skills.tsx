import React from 'react';
import { motion } from 'framer-motion';

const Skill: React.FC<{ name: string; x: number | string; y: number | string }> = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x, y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:text-dark dark:bg-light p-8 shadow-dark cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="CSS" x={'-5vw'} y={'-9vw'} />
                <Skill name="HTML" x={'-20vw'} y={'2vw'} />
                <Skill name="Javascript" x={'18vw'} y={'6vw'} />
                <Skill name="ReactJS" x={'0vw'} y={'12vw'} />
                <Skill name="NextJS" x={'-5vw'} y={'-15vw'} />
                <Skill name="Web Design" x={'35vw'} y={'-5vw'} />
                <Skill name="Figma" x={'0vw'} y={'-21vw'} />
                <Skill name="Tailwind" x={'18vw'} y={'18vw'} />
                <Skill name="ExpressJS" x={'-27vw'} y={'18vw'} />
                <Skill name="NodeJS" x={'-29vw'} y={'6vw'} />
                <Skill name="Redux" x={'17vw'} y={'-15vw'} />
                <Skill name="Typescript" x={'-29vw'} y={'-12vw'} />
            </div>
        </>
    );
};

export default Skills;
