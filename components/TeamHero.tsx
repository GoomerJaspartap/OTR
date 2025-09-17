import Image from 'next/image'

export default function TeamHero() {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/team/team-hero.jpg"
          alt="Ontario Tech Racing Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Meet Our Team
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          71 passionate students working together to build the future of electric racing
        </p>
      </div>
    </section>
  )
}
