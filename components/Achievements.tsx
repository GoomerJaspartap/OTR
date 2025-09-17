import { Award, Trophy, Star, Target } from 'lucide-react'
import historyData from '@/data/history.json'

const categoryIcons = {
  Design: Award,
  Performance: Trophy,
  Competition: Star,
  Recognition: Target
}

const categoryColors = {
  Design: 'from-blue-500 to-blue-600',
  Performance: 'from-green-500 to-green-600',
  Competition: 'from-yellow-500 to-yellow-600',
  Recognition: 'from-purple-500 to-purple-600'
}

export default function Achievements() {
  const achievements = historyData.achievements

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our achievements and recognition in FSAE competitions over the years
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = categoryIcons[achievement.category as keyof typeof categoryIcons]
            const colorClass = categoryColors[achievement.category as keyof typeof categoryColors]
            
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorClass} rounded-full mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-2xl font-bold text-otr-red mb-2">
                    {achievement.year}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {achievement.description}
                  </p>
                  
                  <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {achievement.category}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-otr-red mb-2">6</div>
              <div className="text-gray-600">Years of Competition</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-otr-red mb-2">4</div>
              <div className="text-gray-600">Electric Cars Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-otr-red mb-2">5</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-otr-red mb-2">Top 10</div>
              <div className="text-gray-600">Best Finish</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
