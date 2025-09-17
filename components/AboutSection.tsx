import Image from 'next/image'
import { Award, Users, Wrench, Target } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              <b>Ontario Tech Racing</b> is a team of 71 passionate engineering and business students 
              who design, manufacture, and market a Formula-style electric race car while staying 
              within a strict budget. Every year at the Michigan International Speedway, the team 
              competes in Formula SAE with other universities across America, showcasing innovation 
              in vehicle design, build quality, and team operations. With ten technical and three 
              business departments, the team of students gain incredible hands-on experiences as a 
              fully functioning motorsports team.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-otr-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">FSAE Competition</h3>
                  <p className="text-gray-600 text-sm">Competing at Michigan International Speedway</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-otr-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">13 Departments</h3>
                  <p className="text-gray-600 text-sm">Technical and business expertise</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Wrench className="h-6 w-6 text-otr-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Hands-on Experience</h3>
                  <p className="text-gray-600 text-sm">Real motorsports engineering</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Target className="h-6 w-6 text-otr-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Innovation Focus</h3>
                  <p className="text-gray-600 text-sm">Cutting-edge electric vehicle design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Picture */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/team-photo.jpg"
                alt="Ontario Tech Racing Team"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-otr-orange">71</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-otr-orange text-white rounded-xl shadow-lg p-6">
              <div className="text-center">
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm">Electric Cars</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
