'use client'

import { useState, useEffect } from 'react'
import { Calendar, Car, Users, UserCheck } from 'lucide-react'
import teamStats from '@/data/team-stats.json'

const iconMap = {
  calendar: Calendar,
  car: Car,
  users: Users,
  'user-check': UserCheck,
}

export default function TeamStats() {
  const [memberCount, setMemberCount] = useState(71)

  useEffect(() => {
    // Simulate auto-updating member count
    const interval = setInterval(() => {
      setMemberCount(prev => {
        const variation = Math.floor(Math.random() * 3) - 1
        return Math.max(65, Math.min(75, prev + variation))
      })
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamStats.stats.map((stat) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
            const value = stat.autoUpdate ? memberCount : stat.value
            
            return (
              <div
                key={stat.id}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-otr-red/10 rounded-full mb-4">
                  <IconComponent className="h-6 w-6 text-otr-red" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {value}
                  {stat.autoUpdate && (
                    <span className="text-sm text-green-500 ml-1">*</span>
                  )}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
                {stat.autoUpdate && (
                  <div className="text-xs text-gray-500 mt-1">
                    *Auto-updates
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
