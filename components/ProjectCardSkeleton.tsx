'use client';

import { Skeleton } from './ui/skeleton';

export default function ProjectCardSkeleton() {
    return (
        <div className="group relative rounded-lg overflow-hidden shadow-lg bg-card flex flex-col min-h-[200px]">
            {/* 썸네일 영역 */}
            <div className="aspect-video relative">
                <Skeleton className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Skeleton className="h-10 w-[100px] rounded-md" />
                    <Skeleton className="h-10 w-[120px] rounded-md" />
                    <Skeleton className="h-10 w-[100px] rounded-md" />
                </div>
            </div>

            {/* 본문 콘텐츠 */}
            <div className="p-4 flex flex-col flex-1">
                {/* 제목 */}
                <Skeleton className="h-[24px] w-[70%] mb-2 rounded-md" />

                {/* 설명: 2~3줄 */}
                <div className="mb-4 space-y-1">
                    <Skeleton className="h-[16px] w-full rounded-md" />
                </div>

                {/* 기술스택: 태그 4~5개 */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-[28px] w-[70px] rounded-full" />
                    ))}
                </div>
            </div>
        </div>
    );
}
