'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton';
import { Project, getProjects } from '@/lib/api/projects';
import { useEffect } from 'react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadProjects() {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error('Failed to load projects:', error);
            } finally {
                setIsLoading(false);
            }
        }

        loadProjects();
    }, []);

    return (
        <section className="py-20">
            <div className="container max-w-[1200px] mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    프로젝트
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading ? (
                        <>
                            <ProjectCardSkeleton />
                            <ProjectCardSkeleton />
                            <ProjectCardSkeleton />
                        </>
                    ) : (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-full"
                        >
                            {projects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.3 }}
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>

                {selectedProject && (
                    <ProjectModal
                        isOpen={!!selectedProject}
                        onClose={() => setSelectedProject(null)}
                        project={selectedProject}
                    />
                )}
            </div>
        </section>
    );
}
