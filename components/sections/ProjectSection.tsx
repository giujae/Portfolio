'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projects, type Project } from '@/lib/constants/projects';
import { ProjectModal } from '@/components/ProjectModal';

export default function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <section className="py-20">
            <div className="container max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    프로젝트
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} onViewDetails={handleOpenModal} />
                    ))}
                </div>

                {selectedProject && (
                    <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
                )}
            </div>
        </section>
    );
}
