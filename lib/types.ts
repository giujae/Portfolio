export interface Education {
    id: string;
    title: string;
    institution: string;
    period: {
        start: string;
        end: string;
    };
    description?: string;
    tags?: string[];
}

export interface Interview {
    id: string;
    question: string;
    answer: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    tech_stack: string[];
    repo_url?: string;
    demo_url?: string;
    markdown_content?: string;
    cover_image_url?: string;
    cover_color?: string;
    role: 'solo' | 'team';
    period_start: string;
    period_end: string;
    related_links?: { title: string; url: string }[];
    created_at?: string;
    updated_at?: string;
    gallery_images?: {
        url: string;
        description?: string;
    }[];
}
