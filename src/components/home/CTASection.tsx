
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Готовы получить свою Gift карту?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Приобретите Gift карту Apple сегодня и откройте для себя мир приложений, игр, музыки, фильмов, сериалов и многого другого.
        </p>
        <Button 
          asChild
          className="bg-[#0071E3] hover:bg-[#0077ED] rounded-full px-8 py-6 text-base"
        >
          <Link to="/cards">
            Выбрать Gift карту
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
