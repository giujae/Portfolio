'use client';

import { Project } from '@/lib/api/projects';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import { ImageGallery } from './ImageGallery';
import { RelatedLinksPopover } from './RelatedLinksPopover';

type ProjectModalProps = {
    isOpen: boolean;
    onClose: () => void;
    project: Project;
};

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-0 border-0">
                <DialogTitle className="sr-only">{project.title} 프로젝트 상세 정보</DialogTitle>

                {/* Action Buttons - Moved inside the cover section */}
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
                    {/* Color Background */}
                    <div
                        className="absolute inset-x-0 top-0 h-[300px] md:h-[400px]"
                        style={{ backgroundColor: project.cover_color || '#f3f4f6' }}
                    />

                    {/* Content Container */}
                    <div className="relative pt-16 md:pt-20 px-6">
                        {/* Project Info */}
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

                        {/* Project Cover Image */}
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
                    <div className="prose prose-sm w-full max-w-full [&_pre]:!whitespace-pre-wrap [&_pre]:break-words [&_img]:w-full [&_table]:w-full [&_table]:block [&_table]:overflow-x-auto !text-gray-900 dark:!text-gray-900">
                        {project.markdown_content ? (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    img: (props) => <img {...props} className="w-full h-auto object-cover" />,
                                    pre: (props) => (
                                        <pre
                                            {...props}
                                            className="!whitespace-pre-wrap !break-words !bg-gray-800 !text-white dark:!bg-gray-800 dark:!text-white"
                                        />
                                    ),
                                    code: (props) => (
                                        <code
                                            {...props}
                                            className="!break-words !whitespace-pre-wrap !bg-gray-800 !text-white dark:!bg-gray-800 dark:!text-white"
                                        />
                                    ),
                                    p: (props) => <p {...props} className="!text-gray-700 dark:!text-gray-700" />,
                                    h1: (props) => <h1 {...props} className="!text-gray-900 dark:!text-gray-900" />,
                                    h2: (props) => <h2 {...props} className="!text-gray-900 dark:!text-gray-900" />,
                                    h3: (props) => (
                                        <h3
                                            {...props}
                                            className="!text-gray-900 dark:!text-gray-900 !bg-gray-200/80 !block !px-2 !py-0.5 !rounded-xs !mb-4"
                                        />
                                    ),
                                    h4: (props) => <h4 {...props} className="!text-gray-900 dark:!text-gray-900" />,
                                    h5: (props) => <h5 {...props} className="!text-gray-900 dark:!text-gray-900" />,
                                    h6: (props) => <h6 {...props} className="!text-gray-900 dark:!text-gray-900" />,
                                    ul: (props) => <ul {...props} className="!text-gray-700 dark:!text-gray-700" />,
                                    ol: (props) => <ol {...props} className="!text-gray-700 dark:!text-gray-700" />,
                                    li: (props) => <li {...props} className="!text-gray-700 dark:!text-gray-700" />,
                                    blockquote: (props) => (
                                        <blockquote
                                            {...props}
                                            className="!text-gray-700 dark:!text-gray-700 !border-l-4 !border-gray-300"
                                        />
                                    ),
                                    table: (props) => (
                                        <table {...props} className="!text-gray-700 dark:!text-gray-700" />
                                    ),
                                    th: (props) => (
                                        <th {...props} className="!text-gray-900 dark:!text-gray-900 !bg-gray-100" />
                                    ),
                                    td: (props) => <td {...props} className="!text-gray-700 dark:!text-gray-700" />,
                                }}
                            >
                                {project.markdown_content}
                            </ReactMarkdown>
                        ) : (
                            <p className="!text-gray-500 dark:!text-gray-500">상세 내용이 없습니다.</p>
                        )}
                    </div>

                    {/* Gallery Section */}
                    {project.gallery_images && project.gallery_images.length > 0 && (
                        <ImageGallery images={project.gallery_images} />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
