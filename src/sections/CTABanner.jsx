import Button from '../components/Button'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function CTABanner() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-primary py-20">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 text-center fade-up ${isVisible ? 'visible' : ''}`}
      >
        <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
          Limited Time Offer
        </p>
        <h2 className="text-4xl md:text-5xl font-heading text-white font-bold mb-6">
          Ready to Start Your Adventure?
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Book your dream trip today and get up to 20% off on selected packages.
          Our travel experts are ready to craft your perfect journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            text="Book Now"
            variant="primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          />
          <Button
            text="Talk to an Expert"
            variant="secondary"
            onClick={() => window.open('https://wa.me/923245693908', '_blank')}
          />
        </div>
      </div>
    </section>
  )
}