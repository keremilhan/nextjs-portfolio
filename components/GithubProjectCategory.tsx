import Link from 'next/link';
import { GithubIcon } from './Icons';

const GithubProjectCategory: React.FC<{
    title: string;
    link: string;
}> = ({ title, link }) => {
    return (
        <Link href={link} target="_blank" className="flex justify-between items-center cursor-pointer gap-4 flex-wrap">
            <div className="w-[240px] flex gap-3 mb-4 items-center bg-dark/20 dark:bg-light p-2 px-4 rounded-lg">
                <div className="w-10">
                    <GithubIcon />
                </div>
                <h4 className="dark:text-dark">{title}</h4>
            </div>
        </Link>
    );
};

export default GithubProjectCategory;
