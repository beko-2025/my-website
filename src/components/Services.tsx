import { motion } from 'motion/react';
import { BookOpen, Leaf, Stethoscope, Video } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Рукъя (Лечение Кораном)',
    description: 'Чтение аятов Корана и достоверных дуа от порчи, сглаза, сихра (колдовства) и одержимости джиннами. Мощное духовное очищение с дозволения Аллаха.',
  },
  {
    icon: Leaf,
    title: 'Траволечение по Сунне',
    description: 'Индивидуальный подбор дозволенных средств (масло черного тмина, кыст аль-хинди, сенна мекканская, пчелиный мед) для восстановления физического здоровья.',
  },
  {
    icon: Stethoscope,
    title: 'Хиджама',
    description: 'Капиллярное кровопускание по Сунне. Обновление организма, улучшение кровообращения, снятие застоев и лечение широкого спектра заболеваний.',
  },
  {
    icon: Video,
    title: 'Онлайн Консультации',
    description: 'Удаленный прием по видеосвязи. Диагностика по симптомам, назначение курсов лечения травами и рекомендации по самостоятельному чтению Рукъи.',
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase text-amber-600 mb-2 tracking-widest flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Наши Услуги
          </h2>
          <h3 className="text-4xl sm:text-5xl font-sans font-bold text-emerald-900 mb-4 tracking-tight">
            Методы исцеления
          </h3>
          <p className="text-base leading-relaxed text-emerald-800/80">
            Каждая процедура проходит в строгом соответствии с нормами Шариата, 
            с глубоким пониманием физиологии и духовного состояния пациента.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                
                <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center mb-5 relative z-10 text-white">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-xl font-bold text-emerald-900 mb-2 relative z-10 font-sans tracking-tight">
                  {service.title}
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed relative z-10 italic">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
