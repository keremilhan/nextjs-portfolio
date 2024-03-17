import React from 'react';
import SkillCard from './SkillCard';

const SkillCategory: React.FC<{ skillArray: { image?: string; text: string }[]; skillCategory: string }> = ({ skillArray, skillCategory }) => {
    return (
        <div className="mt-20 xs:mt-10">
            <h3 className="mb-10 xs:mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75 xs:text-center">{skillCategory}</h3>
            <div className="flex flex-wrap gap-6 xs:justify-center">
                {skillArray.map(({ image, text }, index) => (
                    <SkillCard key={index} image={image} text={text} />
                ))}
            </div>
        </div>
    );
};

export default SkillCategory;
