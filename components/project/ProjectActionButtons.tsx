import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectActionButtonsProps } from '@/lib/types/project';

export default function ProjectActionButtons({ project, onModalOpen }: ProjectActionButtonsProps) {
    return (
        <>
            <Button
                variant="secondary"
                className="hover:bg-zinc-300/80 cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    onModalOpen();
                }}
            >
                상세보기
            </Button>
            {project.repo_url && (
                <Button
                    variant="secondary"
                    className="hover:bg-zinc-300/80 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.repo_url, '_blank');
                    }}
                >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                </Button>
            )}
            {project.demo_url && (
                <Button
                    variant="secondary"
                    className="hover:bg-secondary/80 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo_url, '_blank');
                    }}
                >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                </Button>
            )}
        </>
    );
}
