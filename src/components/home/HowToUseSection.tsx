import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

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
              Активация Gift карты — это просто. Следуйте нашим инструкциям и
              пользуйтесь всеми возможностями экосистемы Apple.
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
                <Link to="/instructions">Подробная инструкция</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Использование Gift карты"
              className="rounded-xl shadow-xl"
            />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hidden lg:flex">
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2325 12.2284C16.2434 10.4863 17.3607 9.48248 17.4264 9.4375C16.7045 8.40357 15.5858 8.26096 15.1794 8.24688C14.2059 8.15357 13.2691 8.83232 12.7723 8.83232C12.2624 8.83232 11.507 8.25938 10.6886 8.27768C9.60516 8.29527 8.60829 8.91357 8.06985 9.87093C6.96516 11.8048 7.77173 14.6357 8.82798 16.2557C9.35016 17.0502 9.97454 17.9405 10.7959 17.9073C11.5939 17.8713 11.8998 17.3757 12.8475 17.3757C13.7826 17.3757 14.0678 17.9073 14.9085 17.8885C15.7756 17.8713 16.3185 17.0871 16.8192 16.2854C17.4155 15.383 17.6623 14.5073 17.6725 14.4666C17.6522 14.4591 16.2213 13.938 16.2325 12.2284Z"
                  fill="black"
                />
                <path
                  d="M14.667 7.09322C15.0992 6.55699 15.3801 5.8226 15.3073 5.08008C14.6776 5.11283 13.8873 5.51572 13.4359 6.04072C13.035 6.50283 12.6982 7.26791 12.7824 7.9741C13.4968 8.03275 14.2158 7.62072 14.667 7.09322Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#0071E3]/10 rounded-xl z-[-1] hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
