import { supabase } from '@/lib/supabase/client';

export type Project = {
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
};

export async function getProjects(): Promise<Project[]> {
    const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching projects:', error);
        return [];
    }

    return (
        data.map((project) => ({
            ...project,
            period: {
                start: project.period_start,
                end: project.period_end,
            },
        })) || []
    );
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
            start: data.period_start,
            end: data.period_end,
        },
    };
}
