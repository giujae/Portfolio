'use client';

import { motion } from 'framer-motion';
import { Education } from '@/lib/types';
import { EducationCard } from '@/components/education/EducationCard';
import { useEffect, useState } from 'react';
import { getEducations } from '@/lib/api';
import EducationCardSkeleton from '@/components/education/EducationCardSkeleton';

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

export default function EducationSection() {
    const [educations, setEducations] = useState<Education[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchEducations() {
            try {
                const data = await getEducations();
                setEducations(data);
            } catch (error) {
                console.error('Failed to fetch educations:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchEducations();
    }, []);

    return (
        <section className="py-20" id="education">
            <div className="container max-w-[1200px] mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    교육 이수내역
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading ? (
                        <>
                            <EducationCardSkeleton />
                            <EducationCardSkeleton />
                            <EducationCardSkeleton />
                        </>
                    ) : (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-full"
                        >
                            {educations.map((education) => (
                                <motion.div
                                    key={education.id}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.3 }}
                                >
                                    <EducationCard education={education} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
