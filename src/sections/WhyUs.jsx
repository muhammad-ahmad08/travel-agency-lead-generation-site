import SectionTitle from '../components/SectionTitle'
import useScrollAnimation from '../hooks/useScrollAnimation'

const features = [
  {
    id: 1,
    icon: '🌍',
    title: 'Global Coverage',
    description: 'We offer curated travel packages to over 80 countries across all 7 continents. Wherever you dream of going, we will get you there.',
  },
  {
    id: 2,
    icon: '🏆',
    title: 'Award Winning Service',
    description: 'Recognized as one of the top travel agencies for 5 consecutive years. Your satisfaction is our highest priority.',
  },
  {
    id: 3,
    icon: '💰',
    title: 'Best Price Guarantee',
    description: 'We match any competitor price and ensure you always get the best deal without compromising on quality.',
  },
  {
    id: 4,
    icon: '🛡️',
    title: 'Safe & Secure Travel',
    description: 'Your safety is our top priority. All our packages include travel insurance and 24/7 emergency support.',
  },
  {
    id: 5,
    icon: '🎯',
    title: 'Tailored Experiences',
    description: 'Every trip is customized to your preferences, budget and travel style. No two journeys are ever the same.',
  },
  {
    id: 6,
    icon: '📞',
    title: '24/7 Support',
    description: 'Our dedicated travel experts are available around the clock to assist you before, during and after your trip.',
  },
]

export default function WhyUs() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="whyus" aria-label="Why Travel With Us" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 fade-up ${isVisible ? 'visible' : ''}`}
      >
        <SectionTitle
          subtitle="Our Advantages"
          title="Why Travel With Us"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-heading text-primary mb-3">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}