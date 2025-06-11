import { Geist, Geist_Mono } from 'next/font/google';

import { metadata } from './metadata';
import './globals.css';

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>;

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export { metadata };

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ko">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>{children}</body>
        </html>
    );
}
