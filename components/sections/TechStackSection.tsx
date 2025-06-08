'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { techStacks } from '@/lib/constants/stacks';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const iconMap: Record<string, string> = {
    nextjs: 'logos:nextjs-icon',
    react: 'logos:react',
    html: 'logos:html-5',
    css: 'logos:css-3',
    javascript: 'logos:javascript',
    typescript: 'logos:typescript-icon',
    figma: 'logos:figma',
    github: 'logos:github-icon',
    notion: 'logos:notion-icon',
    vercel: 'logos:vercel-icon',
};

const categories = {
    frontend: '프론트엔드',
    tools: '개발 도구',
} as const;

export default function TechStackSection() {
    const stacksByCategory = techStacks.reduce((acc, stack) => {
        if (!acc[stack.category]) {
            acc[stack.category] = [];
        }
        acc[stack.category].push(stack);
        return acc;
    }, {} as Record<string, typeof techStacks>);

    return (
        <section className="py-20">
            <div className="container max-w-[1200px] mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    기술 스택
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {Object.entries(stacksByCategory).map(([category, stacks]) => (
                        <div key={category} className="space-y-6">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="text-2xl font-bold"
                            >
                                {categories[category as keyof typeof categories]}
                            </motion.h3>

                            <TooltipProvider>
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="flex flex-wrap gap-6"
                                >
                                    {stacks.map((tech) => (
                                        <motion.div
                                            key={tech.name}
                                            variants={item}
                                            className="flex flex-col items-center justify-center p-4 rounded-lg bg-[#373737] hover:bg-[#474747] transition-colors"
                                        >
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <div className="w-16 h-16 flex items-center justify-center">
                                                        <Icon icon={iconMap[tech.icon]} className="w-12 h-12" />
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{tech.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </TooltipProvider>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
