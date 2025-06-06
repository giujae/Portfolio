import { Education } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface EducationCardProps {
    education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
    return (
        <Card className="w-full transition-all hover:shadow-md">
            <CardHeader>
                <CardTitle>{education.title}</CardTitle>
                <CardDescription>{education.institution}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-muted-foreground">
                        {education.period.start} ~ {education.period.end}
                    </p>
                    {education.description && <p className="text-sm">{education.description}</p>}
                </div>
            </CardContent>
            {education.tags && education.tags.length > 0 && (
                <CardFooter className="flex flex-wrap gap-2">
                    {education.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </CardFooter>
            )}
        </Card>
    );
}
