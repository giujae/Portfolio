'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/constants/projects';

interface ProjectCardProps {
    project: Project;
    onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-lg overflow-hidden bg-card"
        >
            {/* 썸네일 이미지 */}
            <div className="aspect-video relative">
                <Image src={project.thumbnail} alt={`${project.title} 썸네일`} fill className="object-cover" />
            </div>

            {/* 프로젝트 정보 */}
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs rounded-full bg-accent">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* 호버 시 나타나는 오버레이 */}
            <div className="absolute inset-0 bg-background opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <Button variant="secondary" size="sm" onClick={() => onViewDetails(project)}>
                    상세보기
                </Button>
                {project.repoUrl && (
                    <Button variant="secondary" size="sm" asChild>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                        </a>
                    </Button>
                )}
                {project.demoUrl && (
                    <Button variant="secondary" size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                        </a>
                    </Button>
                )}
            </div>
        </motion.div>
    );
}
