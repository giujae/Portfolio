import IntroSection from '@/components/sections/IntroSection';
import InterviewSection from '@/components/sections/InterviewSection';
import TechStackSection from '@/components/sections/TechStackSection';
import ProjectSection from '@/components/sections/ProjectSection';
import EducationSection from '@/components/sections/EducationSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
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
