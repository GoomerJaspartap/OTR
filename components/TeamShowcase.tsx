import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TeamShowcase() {
  const showcaseImages = [
    {
      id: 1,
      src: '/images/showcase/background4.png',
      alt: 'Electric race car assembly',
      title: 'Car Assembly'
    },
    {
      id: 2,
      src: '/images/showcase/background5.jpg',
      alt: 'Vehicle testing session',
      title: 'Testing Phase'
    },
    {
      id: 3,
      src: '/images/showcase/background6.jpg',
      alt: 'FSAE competition day',
      title: 'Competition Day'
    },
    {
      id: 4,
      src: '/images/showcase/background8.jpg',
      alt: 'Team collaboration',
      title: 'Team Collaboration'
    },
    {
      id: 5,
      src: '/images/showcase/background9.jpg',
      alt: 'Workshop environment',
      title: 'Workshop'
    },
    {
      id: 6,
      src: '/images/showcase/background10.jpg',
      alt: 'Design and engineering',
      title: 'Design Process'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Team Showcase</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Behind the scenes of our electric race car development and team activities
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="/team"
            className="inline-flex items-center px-8 py-4 bg-otr-orange hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Meet Our Team
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
