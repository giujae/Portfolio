import { supabase } from '@/lib/supabase/client';

export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    tech_stack: string[];
    repo_url?: string;
    demo_url?: string;
    markdown_content?: string;
    created_at?: string;
    updated_at?: string;
    cover_image_url?: string;
    cover_color?: string;
    role: 'solo' | 'team';
    period: {
        start: string;
        end: string;
    };
    gallery_images?: {
        url: string;
        description?: string;
    }[];
    related_links?: { title: string; url: string }[];
}

export async function getProjects(): Promise<Project[]> {
    const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching projects:', error);
        return [];
    }

    return data.map((project) => ({
        id: project.id,
        title: project.title,
        description: project.description,
        thumbnail: project.thumbnail,
        tech_stack: project.tech_stack,
        repo_url: project.repo_url,
        demo_url: project.demo_url,
        markdown_content: project.markdown_content,
        cover_image_url: project.cover_image_url,
        cover_color: project.cover_color,
        role: project.role,
        period: {
            start: project.period_start.substring(0, 7), // YYYY-MM
            end: project.period_end.substring(0, 7), // YYYY-MM
        },
        gallery_images: project.gallery_images || [],
        related_links: project.related_links || [],
    }));
}

export async function getProjectById(id: string): Promise<Project | null> {
    const { data, error } = await supabase.from('projects').select('*').eq('id', id).single();

    if (error) {
        console.error('Error fetching project:', error);
        return null;
    }

    if (!data) return null;

    return {
        ...data,
        period: {
            start: data.period_start.substring(0, 7), // YYYY-MM
            end: data.period_end.substring(0, 7), // YYYY-MM
        },
    };
}
