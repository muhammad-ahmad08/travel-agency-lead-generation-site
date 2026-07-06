import SectionTitle from '../components/SectionTitle'
import useScrollAnimation from '../hooks/useScrollAnimation'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    review: 'Wanderlust made our honeymoon in Bali absolutely perfect. Every detail was taken care of and the experience exceeded all our expectations. We will definitely book with them again!',
  },
  {
    id: 2,
    name: 'James Thornton',
    location: 'London, UK',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    review: 'The Safari package in Kenya was a life changing experience. The team was professional, responsive and genuinely passionate about creating an unforgettable journey.',
  },
  {
    id: 3,
    name: 'Amelia Rodriguez',
    location: 'Toronto, Canada',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    review: 'From Santorini to Amalfi Coast, our Italy and Greece trip was flawlessly organized. The accommodations were stunning and the local guides were incredibly knowledgeable.',
  },
]

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="testimonials" aria-label="Customer Testimonials" className="py-24 bg-light">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 fade-up ${isVisible ? 'visible' : ''}`}
      >
        <SectionTitle
          subtitle="Happy Travelers"
          title="What Our Clients Say"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">"{t.review}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-primary font-semibold">{t.name}</p>
                  <p className="text-muted text-xs">{t.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}