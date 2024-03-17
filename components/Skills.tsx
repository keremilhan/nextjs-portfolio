import React from 'react';
import { cssFrameworks, frameworks, languages, libraries, otherSkills } from './data/data';
import SkillCategory from './SkillCategory';

const Skills = () => {
    return (
        <div className="mt-10 xs:mt-10">
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 xs:mt-10">Skills</h2>
            <SkillCategory skillArray={languages} skillCategory="Languages" />
            <SkillCategory skillArray={frameworks} skillCategory="Frameworks" />
            <SkillCategory skillArray={cssFrameworks} skillCategory="CSS Frameworks" />
            <SkillCategory skillArray={otherSkills} skillCategory="Other Skills" />
            <SkillCategory skillArray={libraries} skillCategory="Libraries" />
        </div>
    );
};

export default Skills;
