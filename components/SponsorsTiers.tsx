import Image from 'next/image'
import { ExternalLink, Star, Award, Medal, Shield } from 'lucide-react'
import sponsors from '@/data/sponsors.json'

const tierIcons = {
  1: Star,
  2: Award,
  3: Medal,
  4: Shield,
  5: Shield,
  6: Shield
}

const tierColors = {
  1: 'from-yellow-400 to-yellow-600',
  2: 'from-gray-300 to-gray-500',
  3: 'from-yellow-600 to-yellow-800',
  4: 'from-gray-400 to-gray-600',
  5: 'from-amber-600 to-amber-800',
  6: 'from-blue-400 to-blue-600'
}

export default function SponsorsTiers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sponsor Tiers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our sponsors are organized into tiers based on their contribution level
          </p>
        </div>

        {sponsors.tiers.map((tier, tierIndex) => {
          const IconComponent = tierIcons[tier.level as keyof typeof tierIcons]
          const colorClass = tierColors[tier.level as keyof typeof tierColors]
          
          return (
            <div key={tierIndex} className="mb-16">
              {/* Tier Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorClass} rounded-full mb-4`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-otr-orange to-orange-600 mx-auto rounded"></div>
              </div>

              {/* Sponsors Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {tier.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="text-center">
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {sponsor.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {sponsor.description}
                      </p>
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-otr-orange hover:text-orange-700 font-medium text-sm transition-colors duration-200"
                      >
                        Visit Website
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* Sponsorship Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Sponsorship Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-otr-orange/10 rounded-full mb-4">
                <ExternalLink className="h-6 w-6 text-otr-orange" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Brand Visibility</h4>
              <p className="text-sm text-gray-600">
                Logo placement on car, team uniforms, and marketing materials
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-otr-orange/10 rounded-full mb-4">
                <Award className="h-6 w-6 text-otr-orange" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Recruitment Access</h4>
              <p className="text-sm text-gray-600">
                Direct access to top engineering and business students
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-otr-orange/10 rounded-full mb-4">
                <Star className="h-6 w-6 text-otr-orange" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Industry Recognition</h4>
              <p className="text-sm text-gray-600">
                Support for student innovation and STEM education
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
