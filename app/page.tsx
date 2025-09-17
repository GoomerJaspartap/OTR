import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import AboutSection from '@/components/AboutSection'
import SocialSection from '@/components/SocialSection'
import TeamShowcase from '@/components/TeamShowcase'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <TeamShowcase />
      <SocialSection />
    </div>
  )
}
