import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import useScrollAnimation from '../hooks/useScrollAnimation'

const destinations = [
  {
    id: 1,
    title: 'Bali, Indonesia',
    description: 'Experience the magic of tropical temples, rice terraces, and pristine beaches.',
    price: 'From $899',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=70&fm=webp&auto=format',
  },
  {
    id: 2,
    title: 'Santorini, Greece',
    description: 'Discover iconic white-washed buildings, volcanic beaches and stunning sunsets.',
    price: 'From $1,199',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=70&fm=webp&auto=format',
  },
  {
    id: 3,
    title: 'Kyoto, Japan',
    description: 'Immerse yourself in ancient temples, cherry blossoms and traditional culture.',
    price: 'From $1,099',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=70&fm=webp&auto=format',
  },
  {
    id: 4,
    title: 'Machu Picchu, Peru',
    description: 'Trek through the clouds to the legendary lost city of the Inca Empire.',
    price: 'From $1,299',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=70&fm=webp&auto=format',
  },
  {
    id: 5,
    title: 'Amalfi Coast, Italy',
    description: 'Wind along dramatic clifftop roads overlooking the sparkling Mediterranean.',
    price: 'From $1,399',
    image: 'https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=600&q=70&fm=webp&auto=format',
  },
  {
    id: 6,
    title: 'Safari, Kenya',
    description: 'Witness the great migration and encounter the Big Five in their natural habitat.',
    price: 'From $1,599',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=70&fm=webp&auto=format',
  },
];

export default function Destinations() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="destinations" aria-label="Featured Destinations" className="py-24 bg-light">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto px-6 fade-up ${isVisible ? 'visible' : ''}`}>
        
        <SectionTitle subtitle="Our Picks" title="Featured Destinations" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              image={destination.image}
              title={destination.title}
              description={destination.description}
              price={destination.price}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
