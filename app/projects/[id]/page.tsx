'use client';
import Link from 'next/link';
import React, { Suspense, useEffect, useState } from 'react';
import projects from '../../api/projects/data.json';

const ProjectPage: React.FC<{ params: { id: number } }> = ({ params: { id } }) => {
    const [project, setProject] = useState<any>(null);
    console.log('id', id);
    console.log('projects', projects);
    const projectss = projects.find(project => project.id === id);
    console.log(projectss);

    useEffect(() => {
        async function fetchProject() {
            try {
                const response = await fetch(`/api/projects/${id}`);

                const data = await response.json();

                setProject(data);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        }

        fetchProject();
    }, [id]);

    if (!project) {
        return <p>Loading...</p>;
    }

    return (
        <main className="flex w-full flex-col items-center justify-center p-32 pt-10 mb-16 text-dark dark:text-light">
            <Link className="py-3 px-4 bg-dark dark:bg-light rounded-2xl  text-light dark:text-dark" href="/projects">
                Go back to Projects Page
            </Link>
            <Suspense fallback={<p>Loading...</p>}>
                <div>
                    <h2>{project.title}</h2>
                    <div>
                        <p>{project.summary}</p>
                    </div>
                    <div>
                        <h3>Key Features</h3>
                        <ul>
                            {project.key_features.map((keyFeature: any) => {
                                return (
                                    <li>
                                        <h5>{keyFeature.name}</h5>
                                        <p>{keyFeature.feature}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3>Benefits</h3>
                        <ul>
                            {project.benefits.map((benefit: any) => {
                                return (
                                    <li>
                                        <h5>{benefit.name}</h5>
                                        <p>{benefit.feature}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>{project.conclusion}</div>
                </div>
            </Suspense>
            {/* <p>{project.description}</p> */}
        </main>
    );
};

export default ProjectPage;
