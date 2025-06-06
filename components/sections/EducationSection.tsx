import { Education } from '@/lib/types';
import { EducationCard } from '../EducationCard';

const EDUCATION_DATA: Education[] = [
    {
        id: '1',
        title: '멋쟁이사자처럼 프론트엔드 스쿨 5기',
        institution: '멋쟁이사자처럼',
        period: {
            start: '2023.01',
            end: '2023.06',
        },
        description: '프론트엔드 개발자 양성 교육 과정',
        tags: ['React', 'JavaScript', 'HTML/CSS'],
    },
    {
        id: '2',
        title: '코드스테이츠 Advanced 과정',
        institution: '코드스테이츠',
        period: {
            start: '2023.07',
            end: '2023.12',
        },
        description: '프론트엔드 심화 학습 및 실전 프로젝트 수행',
        tags: ['TypeScript', 'Next.js', 'Testing', 'CI/CD'],
    },
    {
        id: '3',
        title: 'AWS Cloud Practitioner 과정',
        institution: 'AWS Training and Certification',
        period: {
            start: '2024.01',
            end: '2024.03',
        },
        description: 'AWS 클라우드 기초 및 실습 교육',
        tags: ['AWS', 'Cloud Computing', 'DevOps'],
    },
    // 추가 교육 데이터는 여기에 추가
];

export default function EducationSection() {
    return (
        <section className="w-full py-12" id="education">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter mb-8">교육 이수내역</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {EDUCATION_DATA.map((education) => (
                        <EducationCard key={education.id} education={education} />
                    ))}
                </div>
            </div>
        </section>
    );
}
