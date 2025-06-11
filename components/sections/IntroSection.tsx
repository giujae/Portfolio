'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

import ProfileImage from './intro/ProfileImage';
import SocialLinks from './intro/SocialLinks';
import ScrollIndicator from './intro/ScrollIndicator';
import { IntroPhase } from '@/lib/types/intro';
import { FRONT_END_OPACITY, INTRO_ANIMATION_CONFIG, PHASE_TIMINGS } from '@/lib/constants/animations';

export default function IntroSection() {
    const [phase, setPhase] = useState<IntroPhase>(0);

    const setupPhaseTimers = useCallback(() => {
        const timers = PHASE_TIMINGS.map((timing, index) =>
            setTimeout(() => setPhase((index + 1) as IntroPhase), timing)
        );
        return () => timers.forEach(clearTimeout);
    }, []);

    useEffect(() => {
        return setupPhaseTimers();
    }, [setupPhaseTimers]);

    return (
        <motion.section
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 transition-colors duration-1000"
            style={{
                backgroundImage: phase >= 3 ? "url('/marbleTexture.png')" : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                backgroundColor: phase < 3 ? '#f5f5f7' : undefined,
            }}
        >
            {/* 텍스트 그룹 */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center"
                animate={{
                    y: phase >= 1 ? 'calc(-50% - 240px)' : '-50%',
                    scale: phase >= 1 ? 0.9 : 1,
                }}
                transition={INTRO_ANIMATION_CONFIG}
            >
                {/* Front-End 대형 텍스트 */}
                <AnimatePresence>
                    {phase >= 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 1.1, filter: 'blur(4px)' }}
                            animate={{
                                opacity: FRONT_END_OPACITY[phase],
                                y: 0,
                                scale: 1,
                                filter: 'blur(0px)',
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            className="absolute -z-10 text-8xl md:text-[150px] font-bold text-white select-none tracking-tight whitespace-nowrap"
                            style={{
                                bottom: '100%',
                                marginBottom: '-40px',
                            }}
                        >
                            Front-End
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 메인 문구 */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-lg sm:text-2xl md:text-5xl font-semibold text-gray-800 text-center z-10 whitespace-nowrap px-4"
                >
                    프론트엔드 개발자 <strong>정재욱</strong>입니다.
                </motion.h1>
            </motion.div>

            {/* 최종 단계에서만 나타나는 요소들 */}
            <AnimatePresence>
                {phase >= 3 && (
                    <>
                        {/* 서브 문구 */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -mt-45 text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-2xl leading-relaxed whitespace-nowrap px-4"
                        >
                            문제를 빠르게 인식하고 <strong>해결하려는</strong> 마인드,
                            <br />
                            끝까지 포기하지 않고 <strong>책임감</strong> 있게 일하는 개발자입니다.
                        </motion.p>

                        <ProfileImage />
                        <SocialLinks />
                        <ScrollIndicator />

                        {/* 업데이트 날짜 */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            className="absolute bottom-6 left-6 text-xs text-gray-400"
                        >
                            Last updated 25.06.07
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.section>
    );
}
