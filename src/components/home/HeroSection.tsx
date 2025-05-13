
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-60"></div>
      
      {/* Hero Image */}
      <div 
        className="w-full h-[80vh] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" 
        }}
      ></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Подарите Apple Gift карту
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Идеальный подарок для любителей техники Apple. Используйте для покупок в App Store, Apple Music и многом другом.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              className="bg-[#0071E3] hover:bg-[#0077ED] rounded-full px-8 py-6 text-base"
            >
              <Link to="/cards">Выбрать карту</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-6 text-base"
            >
              <Link to="/instructions">Как использовать</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
