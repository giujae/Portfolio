export type TechStack = {
    name: string;
    icon: string;
    category: 'frontend' | 'tools';
};

export const techStacks: TechStack[] = [
    // Frontend
    {
        name: 'React',
        icon: 'react',
        category: 'frontend',
    },
    {
        name: 'Next.js',
        icon: 'nextjs',
        category: 'frontend',
    },
    {
        name: 'HTML',
        icon: 'html',
        category: 'frontend',
    },
    {
        name: 'CSS',
        icon: 'css',
        category: 'frontend',
    },
    {
        name: 'JavaScript',
        icon: 'javascript',
        category: 'frontend',
    },
    {
        name: 'TypeScript',
        icon: 'typescript',
        category: 'frontend',
    },

    // Tools
    {
        name: 'Figma',
        icon: 'figma',
        category: 'tools',
    },
    {
        name: 'GitHub',
        icon: 'github',
        category: 'tools',
    },
    {
        name: 'Notion',
        icon: 'notion',
        category: 'tools',
    },
    {
        name: 'Vercel',
        icon: 'vercel',
        category: 'tools',
    },
];
