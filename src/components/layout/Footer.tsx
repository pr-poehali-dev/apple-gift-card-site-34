
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F7] py-8 text-sm text-[#86868B]">
      <div className="container mx-auto px-4">
        <div className="border-b border-gray-300 pb-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-[#1D1D1F]">Gift карты</h3>
              <ul className="space-y-2">
                <li><Link to="/cards" className="hover:underline">Все номиналы</Link></li>
                <li><Link to="/cards/1000" className="hover:underline">Gift карта 1000₽</Link></li>
                <li><Link to="/cards/2500" className="hover:underline">Gift карта 2500₽</Link></li>
                <li><Link to="/cards/5000" className="hover:underline">Gift карта 5000₽</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-[#1D1D1F]">Помощь</h3>
              <ul className="space-y-2">
                <li><Link to="/instructions" className="hover:underline">Инструкция</Link></li>
                <li><Link to="/faq" className="hover:underline">Частые вопросы</Link></li>
                <li><Link to="/support" className="hover:underline">Поддержка</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-[#1D1D1F]">О нас</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:underline">О компании</Link></li>
                <li><Link to="/privacy" className="hover:underline">Конфиденциальность</Link></li>
                <li><Link to="/terms" className="hover:underline">Условия использования</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © {currentYear} Apple Gift Cards. Все права защищены.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/privacy" className="hover:underline">Конфиденциальность</Link>
            <Link to="/terms" className="hover:underline">Условия использования</Link>
            <Link to="/sitemap" className="hover:underline">Карта сайта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
