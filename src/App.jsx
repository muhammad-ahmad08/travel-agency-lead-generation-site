import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Destinations from './sections/Destinations'
import WhyUs from './sections/WhyUs'
import Testimonials from './sections/Testimonials'
import InquiryForm from './sections/InquiryForm'
import CTABanner from './sections/CTABanner'
import Footer from './sections/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'


function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Destinations />
        <WhyUs />
        <Testimonials />
        <InquiryForm />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}

export default App