'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function IntroSection() {
    const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4>(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase(1), 1000), // 1.5초 → 1초
            setTimeout(() => setPhase(2), 1600), // 2.5초 → 1.6초
            setTimeout(() => setPhase(3), 2200), // 3.5초 → 2.2초
            setTimeout(() => setPhase(4), 2800), // 4.5초 → 2.8초
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    // Front-End 텍스트의 opacity를 phase에 따라 계산
    const getFrontEndOpacity = () => {
        switch (phase) {
            case 1:
                return 0.32; // 0.08 * 4
            case 2:
                return 0.48; // 0.12 * 4
            case 3:
                return 0.64; // 0.16 * 4
            case 4:
                return 0.8; // 0.2 * 4
            default:
                return 0;
        }
    };

    return (
        <motion.section
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 transition-colors duration-1000"
            style={{
                backgroundImage: phase >= 3 ? "url('/marbleTexture.png')" : 'none', // phase === 4 → phase >= 3
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                backgroundColor: phase < 3 ? '#f5f5f7' : undefined, // phase < 4 → phase < 3
            }}
        >
            {/* 텍스트 그룹 */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center"
                animate={{
                    y: phase >= 1 ? 'calc(-50% - 240px)' : '-50%',
                    scale: phase >= 1 ? 0.9 : 1,
                }}
                transition={{
                    duration: 1,
                    ease: [0.43, 0.13, 0.23, 0.96],
                }}
            >
                {/* Front-End 대형 텍스트 */}
                <AnimatePresence>
                    {phase >= 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 1.1, filter: 'blur(4px)' }}
                            animate={{
                                opacity: getFrontEndOpacity(),
                                y: 0,
                                scale: 1,
                                filter: 'blur(0px)',
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            className="absolute -z-10 text-8xl md:text-[150px] font-bold text-white select-none tracking-tight whitespace-nowrap"
                            style={{
                                bottom: '100%', // 메인 문구의 바로 위에 위치
                                marginBottom: '-40px', // 살짝 겹치도록 조정
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

                        {/* 프로필 이미지 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -mt-35 w-[480px] h-auto md:w-[640px]"
                        >
                            <Image
                                src="/profile.png"
                                alt="프로필 이미지"
                                width={640}
                                height={640}
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        {/* 좌측 상단 링크 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="absolute top-6 left-6 flex gap-4"
                        >
                            <a
                                href="https://github.com/giujae"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 border-b-4 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-200 px-2"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://giujae.github.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 border-b-4 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-200 px-2"
                            >
                                Blog
                            </a>
                        </motion.div>

                        {/* 아래 스크롤 유도 */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: [0, 10, 0] }}
                            transition={{
                                delay: 0.6,
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute bottom-6 left-1/2 -translate-x-1/2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 5v14M19 12l-7 7-7-7" />
                            </svg>
                        </motion.div>

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
