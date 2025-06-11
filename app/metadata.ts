import type { Metadata } from 'next';

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
                url: '/og-image.png',
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
        images: ['/og-image.png'],
    },
};
