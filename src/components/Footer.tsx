import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-emerald-900 text-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-sans text-xl font-bold mb-4 tracking-tight">Исламская Медицина</h3>
            <p className="text-emerald-100/70 mb-6 text-sm leading-relaxed italic">
              Лечение по Сунне Пророка Мухаммада (ﷺ). Мы стремимся оказать помощь всем нуждающимся дозволенными путями.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber-500 font-bold mb-4 uppercase text-xs tracking-widest">Навигация</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">О лекаре</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Услуги лечения</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Запись на прием</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы пациентов</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-amber-500 font-bold mb-4 uppercase text-[10px] tracking-widest">Контакты</h4>
            <ul className="grid sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-white">+7 (702) 910 60 60</p>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-100/50 mt-1">WhatsApp / Telegram</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-white">info@sunnah-med.ru</p>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-100/50 mt-1">Электронная почта</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-white">г. Алматы</p>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-100/50 mt-1">ул. Абая 123, офис 15</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-white">График приема</p>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-100/50 mt-1">Пн-Сб: 09:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-emerald-800 text-center text-[10px] font-bold uppercase tracking-widest text-emerald-100/50">
          <p>© {new Date().getFullYear()} Исламская Медицина - Лечение по Сунне. Истинное исцеление только от Всевышнего.</p>
        </div>
      </div>
    </footer>
  );
}
