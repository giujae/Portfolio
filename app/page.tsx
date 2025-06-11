import EducationSection from '@/components/sections/EducationSection';
import FooterSection from '@/components/sections/FooterSection';
import IntroSection from '@/components/sections/IntroSection';
import InterviewSection from '@/components/sections/InterviewSection';
import ProjectSection from '@/components/sections/ProjectSection';
import TechStackSection from '@/components/sections/TechStackSection';

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <IntroSection />
            <InterviewSection />
            <TechStackSection />
            <ProjectSection />
            <EducationSection />
            <FooterSection />
        </main>
    );
}
