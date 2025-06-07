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
