import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: '정재욱의 포트폴리오',
    description: '정재욱의 프론트엔드 웹 포트폴리오 입니다.',
    openGraph: {
        title: '정재욱의 포트폴리오',
        description: '정재욱의 프론트엔드 웹 포트폴리오 입니다.',
        type: 'website',
        locale: 'ko_KR',
        url: 'https://portfolio-oxpx7fhai-giujaes-projects.vercel.app',
        siteName: '정재욱의 포트폴리오',
        images: [
            {
                url: '/og-image.png', // OG 이미지 경로
                width: 1200,
                height: 630,
                alt: '정재욱의 포트폴리오',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '정재욱의 포트폴리오',
        description: '정재욱의 프론트엔드 웹 포트폴리오 입니다.',
        images: ['/og-image.png'], // Twitter 카드 이미지
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>{children}</body>
        </html>
    );
}
