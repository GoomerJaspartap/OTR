import HistoryHero from '@/components/HistoryHero'
import Timeline from '@/components/Timeline'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import Achievements from '@/components/Achievements'

export default function HistoryPage() {
  return (
    <div className="min-h-screen">
      <HistoryHero />
      <Timeline />
      <ProjectsShowcase />
      <Achievements />
    </div>
  )
}
