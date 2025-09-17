import TeamHero from '@/components/TeamHero'
import TeamDepartments from '@/components/TeamDepartments'
import TeamStats from '@/components/TeamStats'

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <TeamHero />
      <TeamStats />
      <TeamDepartments />
    </div>
  )
}
