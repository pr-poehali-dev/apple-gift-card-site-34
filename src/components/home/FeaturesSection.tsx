
import Icon from '@/components/ui/icon';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-5 bg-[#F5F5F7] rounded-full">
        <Icon name={icon} className="w-8 h-8 text-[#0071E3]" />
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Преимущества Gift карт Apple
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Откройте для себя множество возможностей с Apple Gift картами
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Feature 
            icon="ShoppingBag" 
            title="Покупки в Apple Store" 
            description="Используйте для покупок приложений, игр, музыки, фильмов и многого другого." 
          />
          <Feature 
            icon="Gift" 
            title="Идеальный подарок" 
            description="Подарите близким возможность самостоятельно выбрать то, что им действительно нравится." 
          />
          <Feature 
            icon="ShieldCheck" 
            title="Безопасность" 
            description="Все транзакции защищены. Пополняйте счёт без риска утечки данных." 
          />
          <Feature 
            icon="Music" 
            title="Apple Music"

            description="Используйте для оплаты подписки Apple Music и наслаждайтесь миллионами треков." 
          />
          <Feature 
            icon="VideoIcon" 
            title="Apple TV+" 
            description="Откройте доступ к эксклюзивным шоу и фильмам на Apple TV+." 
          />
          <Feature 
            icon="Cloud" 
            title="iCloud+" 
            description="Увеличьте объем хранилища iCloud для надежного хранения ваших данных." 
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
