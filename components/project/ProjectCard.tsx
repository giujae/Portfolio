'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ProjectCardProps } from '@/lib/types/project';
import ProjectModal from '@/components/project/ProjectModal';
import ProjectActionButtons from '@/components/project/ProjectActionButtons';

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isActionsVisible, setIsActionsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
            setIsActionsVisible(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    const handleCardClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setIsActionsVisible(true);
    }, []);

    const handleModalOpen = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    return (
        <div
            ref={cardRef}
            className="group relative rounded-lg overflow-hidden shadow-lg bg-card flex flex-col min-h-[400px]"
            onClick={handleCardClick}
        >
            {/* 썸네일 영역 */}
            <div className="aspect-video relative">
                <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
                <div
                    className={`absolute inset-0 bg-black/60 transition-opacity flex items-center justify-center gap-4
                        ${isActionsVisible ? 'opacity-100 md:opacity-0' : 'opacity-0'} 
                        md:group-hover:opacity-100`}
                >
                    <ProjectActionButtons project={project} onModalOpen={handleModalOpen} />
                </div>
            </div>

            {/* 본문 콘텐츠 */}
            <div className="p-4 flex flex-col flex-1">
                {/* 제목 */}
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                {/* 설명 */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* 기술 스택 */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech_stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={project} />
        </div>
    );
}
