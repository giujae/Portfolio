'use client';

import { Button } from '@/components/ui/button';
import { Github, Mail, Globe } from 'lucide-react';

export default function FooterSection() {
    return (
        <footer className="w-full bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col items-center gap-6">
                    {/* 소셜 링크 */}
                    <div className="flex gap-4">
                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="mailto:your.email@example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary"
                            >
                                <Mail className="h-6 w-6" />
                                <span className="sr-only">이메일</span>
                            </a>
                        </Button>

                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary"
                            >
                                <Github className="h-6 w-6" />
                                <span className="sr-only">GitHub</span>
                            </a>
                        </Button>

                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://your-blog-url.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary"
                            >
                                <Globe className="h-6 w-6" />
                                <span className="sr-only">블로그</span>
                            </a>
                        </Button>
                    </div>

                    {/* 저작권 텍스트 */}
                    <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 JaeUk. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
