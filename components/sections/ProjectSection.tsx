'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projects, type Project } from '@/lib/constants/projects';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                        <ProjectCard key={project.id} project={project} onViewDetails={setSelectedProject} />
                    ))}
                </div>

                <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                    <DialogContent className="max-w-3xl">
                        {selectedProject && (
                            <>
                                <DialogHeader>
                                    <DialogTitle>{selectedProject.title}</DialogTitle>
                                </DialogHeader>
                                <div className="aspect-video relative mb-4">
                                    <img
                                        src={selectedProject.thumbnail}
                                        alt={`${selectedProject.title} 썸네일`}
                                        className="rounded-lg object-cover w-full h-full"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-muted-foreground">{selectedProject.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech) => (
                                            <span key={tech} className="px-2 py-1 text-xs rounded-full bg-accent">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
