import { Education } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface EducationCardProps {
    education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
    return (
        <Card className="group relative rounded-lg overflow-hidden shadow-lg bg-card flex flex-col min-h-[400px]">
            <CardHeader>
                <CardTitle>{education.title}</CardTitle>
                <CardDescription>{education.institution}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-muted-foreground">
                        {education.period.start} ~ {education.period.end}
                    </p>
                    {education.description && <p className="text-sm text-muted-foreground">{education.description}</p>}
                </div>
            </CardContent>
            {education.tags && education.tags.length > 0 && (
                <CardFooter className="flex flex-wrap gap-2 mt-auto">
                    {education.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </CardFooter>
            )}
        </Card>
    );
}
