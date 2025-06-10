import { Project } from '@/lib/api/projects';

export interface ProjectCardProps {
    project: Project;
}

export interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project;
}

export interface ProjectActionButtonsProps {
    project: Project;
    onModalOpen: () => void;
}

export interface MarkdownContentProps {
    content: string | undefined;
}
