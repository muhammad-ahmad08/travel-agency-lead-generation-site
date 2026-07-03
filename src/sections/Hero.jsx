import Button from '../components/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-20">
        <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
          Your Journey Begins Here
        </p>
        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
          Explore the World with Wanderlust
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Handcrafted travel experiences to the world's most breathtaking destinations.
          Let us take care of every detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button text="Explore Destinations" variant="primary" onClick={() => document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' })} />
          <Button text="Contact Us" variant="secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} />
        </div>
      </div>

    </section>
  )
}