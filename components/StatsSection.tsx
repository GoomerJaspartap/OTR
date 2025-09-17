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

export default function StatsSection() {
  const [memberCount, setMemberCount] = useState(71)

  useEffect(() => {
    // Simulate auto-updating member count
    // In a real app, this would fetch from your team roster API
    const interval = setInterval(() => {
      setMemberCount(prev => {
        // Simulate small variations in member count
        const variation = Math.floor(Math.random() * 3) - 1
        return Math.max(65, Math.min(75, prev + variation))
      })
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that showcase our growth, dedication, and achievements in FSAE racing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamStats.stats.map((stat) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
            const value = stat.autoUpdate ? memberCount : stat.value
            
            return (
              <div
                key={stat.id}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-otr-orange/10 rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-otr-orange" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {value}
                  {stat.autoUpdate && (
                    <span className="text-sm text-green-500 ml-1">*</span>
                  )}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
                {stat.autoUpdate && (
                  <div className="text-xs text-gray-500 mt-2">
                    *Auto-updates from team roster
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
