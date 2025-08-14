import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import BrandSection from '../components/BrandSection'
import StatsSection from '../components/StatsSection'
import ServicesSection from '../components/ServicesSection'
import PortfolioSection from '../components/PortfolioSection'
import TeamSection from '../components/TeamSection'
import TestimonialsSection from '../components/TestimonialsSection'
import PricingSection from '../components/PricingSection'
import FAQSection from '../components/FAQSection'
import AwardsSection from '../components/AwardsSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dooha - Building Bold Brands with Thoughtful Design</title>
        <meta name="description" content="At Dooha, we help small startups tackle the world's biggest challenges with tailored solutions, guiding you from strategy to success in a competitive market." />
        <meta name="keywords" content="design agency, branding, web development, UI/UX design, digital marketing" />
        <meta property="og:title" content="Dooha Agency - Building Bold Brands with Thoughtful Design" />
        <meta property="og:description" content="At Dooha, we help small startups tackle the world's biggest challenges with tailored solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <BrandSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </>
  )
}