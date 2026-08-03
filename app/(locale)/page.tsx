import EducationPage from '@/components/education';
import HeroSection from '@/components/header/hero';
import ContactPage from './contact-component';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EducationPage />
      <ContactPage />
    </div>
  );
}