import JoinHero from '@/components/JoinHero'
import ApplicationForm from '@/components/ApplicationForm'
import WhyJoinUs from '@/components/WhyJoinUs'
import DepartmentsOverview from '@/components/DepartmentsOverview'

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      <JoinHero />
      <WhyJoinUs />
      <DepartmentsOverview />
      <ApplicationForm />
    </div>
  )
}
