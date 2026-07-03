export default function Button({ text, onClick, variant = 'primary', type = 'button' }) {
  const base = 'px-6 py-3 rounded-full font-semibold transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'

  const variants = {
    primary: 'bg-accent text-white hover:bg-orange-600',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-primary',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {text}
    </button>
  )
}