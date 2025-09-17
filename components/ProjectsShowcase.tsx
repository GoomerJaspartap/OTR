import Image from 'next/image'
import { Zap, Gauge, Battery, GaugeCircle } from 'lucide-react'
import historyData from '@/data/history.json'

export default function ProjectsShowcase() {
  const projects = historyData.projects

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cars</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four generations of electric race cars, each one more advanced than the last
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <p className="text-lg opacity-90">{project.year}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {project.name} - {project.year}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Zap className="h-5 w-5 text-otr-orange mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Power</div>
                          <div className="font-semibold text-gray-900">{project.specifications.power}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Gauge className="h-5 w-5 text-otr-orange mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Weight</div>
                          <div className="font-semibold text-gray-900">{project.specifications.weight}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Battery className="h-5 w-5 text-otr-orange mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Battery</div>
                          <div className="font-semibold text-gray-900">{project.specifications.battery}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <GaugeCircle className="h-5 w-5 text-otr-orange mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Top Speed</div>
                          <div className="font-semibold text-gray-900">{project.specifications.topSpeed}</div>
                        </div>
                      </div>
                      {project.specifications.motor && (
                        <div className="flex items-center">
                          <Zap className="h-5 w-5 text-otr-orange mr-3" />
                          <div>
                            <div className="text-sm text-gray-600">Motor</div>
                            <div className="font-semibold text-gray-900">{project.specifications.motor}</div>
                          </div>
                        </div>
                      )}
                      {project.specifications.frame && (
                        <div className="flex items-center">
                          <Gauge className="h-5 w-5 text-otr-orange mr-3" />
                          <div>
                            <div className="text-sm text-gray-600">Frame</div>
                            <div className="font-semibold text-gray-900">{project.specifications.frame}</div>
                          </div>
                        </div>
                      )}
                      {project.specifications.acceleration && (
                        <div className="flex items-center">
                          <GaugeCircle className="h-5 w-5 text-otr-orange mr-3" />
                          <div>
                            <div className="text-sm text-gray-600">Acceleration</div>
                            <div className="font-semibold text-gray-900">{project.specifications.acceleration}</div>
                          </div>
                        </div>
                      )}
                      {project.specifications.torque && (
                        <div className="flex items-center">
                          <Battery className="h-5 w-5 text-otr-orange mr-3" />
                          <div>
                            <div className="text-sm text-gray-600">Torque</div>
                            <div className="font-semibold text-gray-900">{project.specifications.torque}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Competition Info */}
                  {project.competition && (
                    <div className="bg-otr-orange/10 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Competition Results</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Event:</span>
                          <span className="font-semibold">{project.competition.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Location:</span>
                          <span className="font-semibold">{project.competition.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-semibold">{project.competition.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Placement:</span>
                          <span className="font-semibold text-otr-orange">{project.competition.placement}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-center text-gray-700"
                        >
                          <div className="w-2 h-2 bg-otr-orange rounded-full mr-3"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
