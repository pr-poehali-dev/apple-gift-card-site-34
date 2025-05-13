
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CardsShowcase from '@/components/home/CardsShowcase';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowToUseSection from '@/components/home/HowToUseSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Apple Gift Cards | Официальный магазин</title>
        <meta name="description" content="Приобретите Gift карты Apple разных номиналов. Идеальный подарок для любителей продукции Apple." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <HeroSection />
          <CardsShowcase />
          <FeaturesSection />
          <HowToUseSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
