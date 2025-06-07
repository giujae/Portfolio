'use client';

import { motion } from 'framer-motion';
import InterviewCard from '@/components/interview/InterviewCard';
import { INTERVIEWS } from '@/lib/constants/interviews';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function InterviewSection() {
    return (
        <section className="py-20">
            <div className="container max-w-[1200px] mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    인터뷰
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {INTERVIEWS.map((interview) => (
                        <motion.div key={interview.id} variants={itemVariants}>
                            <InterviewCard interview={interview} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
