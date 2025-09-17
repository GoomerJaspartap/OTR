import SponsorsHero from '@/components/SponsorsHero'
import SponsorsTiers from '@/components/SponsorsTiers'
import BecomeSponsor from '@/components/BecomeSponsor'

export default function SponsorsPage() {
  return (
    <div className="min-h-screen">
      <SponsorsHero />
      <SponsorsTiers />
      <BecomeSponsor />
    </div>
  )
}
