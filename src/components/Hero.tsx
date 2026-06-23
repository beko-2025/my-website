import { motion } from 'motion/react';
import { ArrowRight, Leaf } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-emerald-50/50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg text-sm font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Leaf className="w-4 h-4" />
              Лечение по Сунне
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-sans font-bold text-emerald-900 leading-tight mb-6 tracking-tight text-center"
          >
            Исцеление души и тела <br className="hidden sm:block"/>
            <span className="text-amber-500">дозволенными путями</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-emerald-800/80 mb-10 max-w-2xl leading-relaxed mx-auto text-center"
          >
            Центр исламской медицины. Лечение Священным Кораном (Рукъя), хиджама и фитотерапия по сунне Пророка Мухаммада (ﷺ).
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-xs transition-colors"
            >
              Записаться на прием
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-xs transition-colors"
            >
              Подробнее о лекаре
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
