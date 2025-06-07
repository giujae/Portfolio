'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

export default function EducationCardSkeleton() {
    return (
        <Card className="group relative rounded-lg overflow-hidden shadow-lg bg-card flex flex-col min-h-[400px]">
            <CardHeader>
                {/* 교육 과정명 */}
                <Skeleton className="h-7 w-[80%] mb-2" />
                {/* 교육 기관명 */}
                <Skeleton className="h-5 w-[60%]" />
            </CardHeader>
            <CardContent className="flex-1">
                <div className="flex flex-col gap-4">
                    {/* 기간 */}
                    <Skeleton className="h-4 w-[40%]" />
                    {/* 설명 */}
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[90%]" />
                </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-6 w-16 rounded-full" />
                ))}
            </CardFooter>
        </Card>
    );
}
