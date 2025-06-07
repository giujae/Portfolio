'use client';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ExternalLink, Link } from 'lucide-react';

interface RelatedLink {
    title: string;
    url: string;
}

interface RelatedLinksPopoverProps {
    links: RelatedLink[];
}

export function RelatedLinksPopover({ links }: RelatedLinksPopoverProps) {
    if (!links?.length) return null;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                    <Link className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
                <div className="space-y-2">
                    <h4 className="font-medium leading-none">관련 링크</h4>
                    <p className="text-xs text-muted-foreground">프로젝트와 관련된 문서 및 블로그 포스트입니다.</p>
                    <div className="mt-4 flex flex-col gap-2">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-accent"
                            >
                                <ExternalLink className="h-3 w-3" />
                                <span>{link.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
