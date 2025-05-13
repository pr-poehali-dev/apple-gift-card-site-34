
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const Step = ({ number, title, description, icon }: StepProps) => {
  return (
    <div className="flex items-start">
      <div className="mr-5 flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 bg-[#0071E3] text-white rounded-full">
          {number}
        </div>
      </div>
      <div>
        <div className="mb-2 flex items-center">
          <Icon name={icon} className="w-5 h-5 mr-2 text-[#0071E3]" />
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const HowToUseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Как использовать Gift карту
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Активация Gift карты — это просто. Следуйте нашим инструкциям и пользуйтесь всеми возможностями экосистемы Apple.
            </p>
            
            <div className="space-y-12">
              <Step 
                number={1} 
                icon="ShoppingCart" 
                title="Приобретите Gift карту" 
                description="Выберите номинал и оформите заказ на нашем сайте. После оплаты вы получите код на указанный email." 
              />
              <Step 
                number={2} 
                icon="Smartphone" 
                title="Откройте App Store" 
                description="На вашем iPhone, iPad или Mac, зайдите в App Store и авторизуйтесь под своим Apple ID." 
              />
              <Step 
                number={3} 
                icon="CreditCard" 
                title="Активируйте карту" 
                description="Нажмите на свой профиль, выберите 'Пополнить счёт' и введите полученный код Gift карты." 
              />
            </div>
            
            <div className="mt-10">
              <Button 
                asChild
                className="bg-[#0071E3] hover:bg-[#0077ED] rounded-full px-6"
              >
                <Link to="/instructions">
                  Подробная инструкция
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Использование Gift карты" 
              className="rounded-xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#F5F5F7] rounded-xl hidden lg:block"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#0071E3]/10 rounded-xl hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
