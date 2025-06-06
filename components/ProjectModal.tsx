'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MarkdownRenderer } from './MarkdownRenderer';
import { Project } from '@/lib/constants/projects';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
    project: Project & { markdownContent?: string };
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl h-[80vh] flex flex-col">
                <DialogHeader className="flex-shrink-0">
                    <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                    <div className="flex gap-2 mt-2">
                        {project.repoUrl && (
                            <Button variant="outline" size="sm" onClick={() => window.open(project.repoUrl, '_blank')}>
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                            </Button>
                        )}
                        {project.demoUrl && (
                            <Button variant="outline" size="sm" onClick={() => window.open(project.demoUrl, '_blank')}>
                                <ExternalLink className="w-4 h-4 mr-2" />
                                데모 보기
                            </Button>
                        )}
                    </div>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto mt-4 pr-2">
                    {project.markdownContent ? (
                        <MarkdownRenderer content={project.markdownContent} />
                    ) : (
                        <p className="text-muted-foreground">{project.description}</p>
                    )}
                </div>

                <div className="flex-shrink-0 mt-4 pt-4 border-t flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-sm bg-secondary rounded-md">
                            {tech}
                        </span>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
