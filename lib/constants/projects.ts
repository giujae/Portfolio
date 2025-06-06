export type Project = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    repoUrl?: string;
    demoUrl?: string;
    techStack: string[];
};

export const projects: Project[] = [
    {
        id: 'portfolio',
        title: '포트폴리오',
        description: 'Next.js와 Tailwind CSS를 활용한 개인 포트폴리오 웹사이트입니다.',
        thumbnail: '/projects/portfolio.png',
        repoUrl: 'https://github.com/yourusername/portfolio',
        demoUrl: 'https://portfolio.yourdomain.com',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
        id: 'project-2',
        title: '프로젝트 2',
        description: '프로젝트 2에 대한 간단한 설명입니다.',
        thumbnail: '/projects/project2.png',
        repoUrl: 'https://github.com/yourusername/project-2',
        techStack: ['React', 'TypeScript', 'Styled Components'],
    },
    {
        id: 'project-3',
        title: '프로젝트 3',
        description: '프로젝트 3에 대한 간단한 설명입니다.',
        thumbnail: '/projects/project3.png',
        demoUrl: 'https://project3.yourdomain.com',
        techStack: ['Vue.js', 'JavaScript', 'SCSS'],
    },
];
