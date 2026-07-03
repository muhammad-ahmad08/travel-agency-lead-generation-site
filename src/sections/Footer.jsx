export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-2">
          <h3 className="text-white text-2xl font-heading font-bold mb-4">
            Wanderlust
          </h3>
          <p className="text-sm leading-relaxed max-w-sm">
            Your trusted travel partner for over 10 years. We craft unforgettable
            journeys to the world's most breathtaking destinations.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-accent transition duration-300 text-xl">ⓕ</a>
            <a href="#" className="hover:text-accent transition duration-300 text-xl">🅾 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦</a>
            <a href="#" className="hover:text-accent transition duration-300 text-xl">𝕏</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#hero" className="hover:text-accent transition duration-300">Home</a></li>
            <li><a href="#destinations" className="hover:text-accent transition duration-300">Destinations</a></li>
            <li><a href="#whyus" className="hover:text-accent transition duration-300">Why Us</a></li>
            <li><a href="#contact" className="hover:text-accent transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>📍 123 Travel Street, Lahore</li>
            <li>
              <a
                href="https://wa.me/923245693908"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition duration-300"
              >
                📞 +92 324 5693908
              </a>
            </li>
            <li>
              <a
                href="mailto:info@wanderlust.com"
                className="hover:text-accent transition duration-300"
              >
                ✉️ info@wanderlust.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Wanderlust Travel Agency. All rights reserved.
      </div>

    </footer>
  )
}