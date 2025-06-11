'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, X } from 'lucide-react';
import Image from 'next/image';
import { ImageGallery } from './ImageGallery';
import { RelatedLinksPopover } from './RelatedLinksPopover';
import { ProjectModalProps } from '@/lib/types/project';
import MarkdownContent from './MarkdownContent';

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-0 border-0">
                <DialogTitle className="sr-only">{project.title} 프로젝트 상세 정보</DialogTitle>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                    {project.repo_url && (
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => window.open(project.repo_url, '_blank')}
                            className="text-white border-white/20 bg-black/20 hover:bg-black/30 hover:scale-110 transition-all duration-200 cursor-pointer"
                        >
                            <Github className="w-4 h-4 text-white" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                    )}
                    {project.related_links && project.related_links.length > 0 && (
                        <RelatedLinksPopover links={project.related_links} />
                    )}
                    {project.demo_url && (
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => window.open(project.demo_url, '_blank')}
                            className="text-white border-white/20 bg-black/20 hover:bg-black/30 hover:scale-110 transition-all duration-200 cursor-pointer"
                        >
                            <ExternalLink className="w-4 h-4 text-white" />
                            <span className="sr-only">Demo</span>
                        </Button>
                    )}
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={onClose}
                        className="text-white border-white/20 bg-black/20 hover:bg-black/30 hover:scale-110 transition-all duration-200 cursor-pointer"
                    >
                        <X className="w-4 h-4 text-white" />
                        <span className="sr-only">Close</span>
                    </Button>
                </div>

                {/* Project Cover */}
                <div className="relative">
                    <div
                        className="absolute inset-x-0 top-0 h-[300px] md:h-[400px]"
                        style={{ backgroundColor: project.cover_color || '#f3f4f6' }}
                    />

                    <div className="relative pt-16 md:pt-20 px-6">
                        <div className="text-white mb-1 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm">
                                <span className="px-3 py-1.5 rounded-full bg-white/20">
                                    {project.role === 'solo' ? '개인 프로젝트' : '팀 프로젝트'}
                                </span>
                                <span className="text-white/80">
                                    {project.period.start} ~ {project.period.end}
                                </span>
                            </div>
                        </div>

                        {project.cover_image_url && (
                            <div className="relative w-[90%] md:w-[60%] mx-auto aspect-video rounded-4xl overflow-hidden shadow-2xl translate-y-6 md:translate-y-10">
                                <Image
                                    src={project.cover_image_url}
                                    alt={`${project.title} cover`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Project Content */}
                <div className="w-full lg:w-[70%] mx-auto px-6 pt-5 md:pt-20 pb-16">
                    <MarkdownContent content={project.markdown_content} />

                    {/* Gallery Section */}
                    {project.gallery_images && project.gallery_images.length > 0 && (
                        <ImageGallery images={project.gallery_images} />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
