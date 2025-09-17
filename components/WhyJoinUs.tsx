import { Wrench, Users, Award, Zap, BookOpen, Trophy } from 'lucide-react'

export default function WhyJoinUs() {
  const benefits = [
    {
      icon: Wrench,
      title: 'Hands-on Experience',
      description: 'Work on real electric race cars and gain practical engineering skills'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work with 70+ passionate students across 13 different departments'
    },
    {
      icon: Award,
      title: 'Competition Experience',
      description: 'Compete at FSAE events and showcase your work to industry professionals'
    },
    {
      icon: Zap,
      title: 'EV Technology',
      description: 'Learn cutting-edge electric vehicle technology and battery systems'
    },
    {
      icon: BookOpen,
      title: 'Skill Development',
      description: 'Develop technical, leadership, and project management skills'
    },
    {
      icon: Trophy,
      title: 'Industry Recognition',
      description: 'Build a portfolio that stands out to employers and graduate schools'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Ontario Tech Racing?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gain invaluable experience while working on cutting-edge electric vehicle technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-otr-red/10 rounded-full mb-6">
                <benefit.icon className="h-8 w-8 text-otr-red" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
