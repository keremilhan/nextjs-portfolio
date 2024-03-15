import Image from 'next/image';
import React from 'react';

const SkillCard: React.FC<{ image?: string; text: string }> = ({ image, text }) => {
    return (
        <div className="flex gap-4 rounded-xl bg-gray-200/60 dark:bg-light p-4 pl-8 w-60 min-w-fit h-[82px] items-center cursor-pointer">
            {image && <Image src={image} width={50} height={50} alt={`${text}_logo`} />}
            <p className="text-black text-xl md:text-base">{text}</p>
        </div>
    );
};

export default SkillCard;
