import HeroSection from '@/components/header/hero';
import ContactPage from './contact-component';
import SkillSection from '@/components/skills';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillSection />
     <ContactPage />
    </div>
  );
}