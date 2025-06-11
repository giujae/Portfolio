'use client';

import { motion } from 'framer-motion';
import InterviewCard from '@/components/interview/InterviewCard';
import { INTERVIEWS } from '@/lib/constants/interviews';
import { FADE_UP_VARIANTS, STAGGER_CONTAINER_VARIANTS } from '@/lib/constants/animations';

export default function InterviewSection() {
    return (
        <section className="py-20">
            <div className="container max-w-[1200px] mx-auto px-4">
                <motion.h2
                    variants={FADE_UP_VARIANTS}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    인터뷰
                </motion.h2>

                <motion.div
                    variants={STAGGER_CONTAINER_VARIANTS}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {INTERVIEWS.map((interview) => (
                        <motion.div key={interview.id} variants={FADE_UP_VARIANTS}>
                            <InterviewCard interview={interview} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
