
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GiftCardProps {
  amount: number;
  image: string;
  popular?: boolean;
}

const GiftCard = ({ amount, image, popular = false }: GiftCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group relative">
      {popular && (
        <div className="absolute top-4 right-4 bg-[#0071E3] text-white text-xs py-1 px-3 rounded-full">
          Популярный выбор
        </div>
      )}
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={`Gift карта ${amount}₽`} 
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-medium text-center mb-2">
          Gift карта {amount.toLocaleString('ru-RU')}₽
        </h3>
        <p className="text-sm text-gray-500 text-center">
          Используйте для покупок в App Store, iTunes, Apple Music и других сервисах Apple.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button 
          asChild
          className="bg-[#0071E3] hover:bg-[#0077ED] rounded-full px-6"
        >
          <Link to={`/cards/${amount}`}>
            Купить за {amount.toLocaleString('ru-RU')}₽
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const CardsShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Выберите свою Gift карту
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Доступны три номинала для любого случая. Идеальный подарок для друзей, семьи или себя.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GiftCard 
            amount={1000} 
            image="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          />
          <GiftCard 
            amount={2500} 
            image="https://images.unsplash.com/photo-1625751541381-2c8b65bfed82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            popular={true}
          />
          <GiftCard 
            amount={5000} 
            image="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          />
        </div>
      </div>
    </section>
  );
};

export default CardsShowcase;
