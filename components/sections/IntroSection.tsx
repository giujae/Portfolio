'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Mail, Globe } from 'lucide-react';

export default function IntroSection() {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container px-4 py-16 md:py-24 text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">안녕하세요, 저는 재욱입니다.</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    프론트엔드 개발자로서 사용자 경험을 개선하는데 열정을 가지고 있습니다.
                </p>

                <div className="flex gap-4 justify-center">
                    <Button variant="outline" size="lg" asChild>
                        <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
                            <Mail className="mr-2 h-5 w-5" />
                            이메일
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" />
                            GitHub
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer">
                            <Globe className="mr-2 h-5 w-5" />
                            블로그
                        </a>
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
