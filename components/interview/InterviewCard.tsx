import { Card, CardContent } from '@/components/ui/card';
import { Interview } from '@/lib/types';
import { motion } from 'framer-motion';

interface InterviewCardProps {
    interview: Interview;
}

export default function InterviewCard({ interview }: InterviewCardProps) {
    // 마크다운 스타일의 텍스트를 HTML로 변환
    const formattedAnswer = interview.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="min-h-[340px] h-full hover:shadow-lg transition-shadow duration-200">
                <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 !text-white">{interview.question}</h3>
                    <div
                        className="prose prose-sm dark:prose-invert [&:not(strong)]:!text-gray-300 [&_strong]:!text-white"
                        dangerouslySetInnerHTML={{ __html: formattedAnswer }}
                    />
                </CardContent>
            </Card>
        </motion.div>
    );
}
