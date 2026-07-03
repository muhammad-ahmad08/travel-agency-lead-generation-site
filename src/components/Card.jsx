import Button from './Button'

export default function Card({ image, title, description, price }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white group">

      {/* Image */}
      <div className="overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-heading text-primary mb-2">{title}</h3>
        <p className="text-muted text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-accent font-semibold text-lg">{price}</span>
          
          {/* Button */}
          <Button text="Book Now" />
        </div>
      </div>

    </div>
  )
}