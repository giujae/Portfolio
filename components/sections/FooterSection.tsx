'use client';

import { motion } from 'framer-motion';

export default function FooterSection() {
    return (
        <footer
            className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
            style={{
                backgroundImage: "url('/marbleTexture.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Main Content - Centered */}
            <div className="flex flex-col w-full min-h-screen">
                {/* Center Content */}
                <div className="flex-1 flex items-center justify-center py-16">
                    <div className="container flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                            className="flex flex-col items-center gap-8 text-center w-full max-w-[85vw] md:max-w-3xl"
                        >
                            {/* Thank You Message */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="relative"
                            >
                                <h2 className="text-[4rem] sm:text-[4rem] md:text-[6rem] font-bold tracking-tight leading-none whitespace-nowrap">
                                    Thank You
                                </h2>
                                <p
                                    className="text-2xl sm:text-2xl md:text-3xl absolute left-1/2 -translate-x-1/2 -bottom-[10%] whitespace-nowrap"
                                    style={{ color: '#373737' }}
                                >
                                    봐주셔서 감사합니다
                                </p>
                            </motion.div>

                            {/* Brief Introduction */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="text-[12px] sm:text-lg md:text-xl text-center whitespace-nowrap mt-16 px-4"
                                style={{ color: '#373737' }}
                            >
                                프론트엔드 개발자로 성장하기 위해 낯선 기술에도 적극적으로 도전하고,
                                <br />
                                사용자 경험을 개선하는 데 집중하고 있습니다.
                            </motion.p>

                            {/* External Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                className="flex gap-12"
                            >
                                <a
                                    href="https://github.com/chojieun"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 border-b-4 border-gray-800"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://velog.io/@chojieun"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 border-b-4 border-gray-800"
                                >
                                    Blog
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Copyright - At the bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="w-full border-t border-border/40 mt-auto"
                >
                    <div className="container mx-auto flex items-center justify-center py-8">
                        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
                            <p>Copyright 2025. JungJaeuk all rights reserved.</p>
                            <p>Built with Next.js, ShadCN, TailwindCSS</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
