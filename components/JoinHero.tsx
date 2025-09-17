import Image from 'next/image'

export default function JoinHero() {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/join/join-hero.jpg"
          alt="Join Ontario Tech Racing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          JOIN OUR TEAM
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
          Student Built Electric Race Car.
        </p>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto">
          At Ontario Tech Racing, students have the opportunity to gain valuable
          EV motorsport experiences with hands-on work in the mechanical,
          electrical, or business realms. Apply today!
        </p>
      </div>
    </section>
  )
}
