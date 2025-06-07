import { supabase } from './supabase/client';
import { Education } from './types';

export async function getEducations(): Promise<Education[]> {
    const { data, error } = await supabase.from('education').select('*').order('start_period', { ascending: false });

    if (error) {
        console.error('Error fetching educations:', error);
        return [];
    }

    return data.map((item) => ({
        id: item.id,
        title: item.title,
        institution: item.institution,
        period: {
            start: item.start_period,
            end: item.end_period,
        },
        description: item.description,
        tags: item.tags,
    }));
}
