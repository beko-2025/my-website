import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageCircleHeart } from 'lucide-react';

const STATIC_REVIEWS = [
  {
    id: 1,
    name: 'Мухаммад Азим',
    rating: 5,
    text: 'Альхамдулиллях, после нескольких сеансов Рукъи состояние сильно улучшилось. Прошли ночные кошмары и постоянная усталость. Брат очень знающий и читает правильно, без нововведений.',
    date: '2 недели назад'
  },
  {
    id: 2,
    name: 'Айша',
    rating: 5,
    text: 'Обращалась за онлайн консультацией. Лекарь назначил курс масла черного тмина и сбор трав. Результат почувствовала уже через неделю. Также помогли советы по дуа из Сунны.',
    date: '1 месяц назад'
  },
  {
    id: 3,
    name: 'Руслан',
    rating: 5,
    text: 'Делал хиджаму впервые. Ощущения невероятные, словно сняли груз с плеч. Все стерильно, профессионально, с поминанием Аллаха.',
    date: '2 месяца назад'
  }
];

export function Reviews() {
  const [reviews, setReviews] = useState(STATIC_REVIEWS);
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="reviews" className="py-24 bg-white border-t border-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase text-amber-600 mb-2 tracking-widest">Свидетельства</h2>
            <h3 className="text-4xl sm:text-5xl font-sans font-bold text-emerald-900 mb-4 tracking-tight">
              Отзывы пациентов
            </h3>
            <p className="text-emerald-800/80 text-base leading-relaxed">
              По воле Аллаха, мы помогли многим людям обрести здоровье. 
              Прочтите истории тех, кто уже прошел курс лечения у нас.
            </p>
          </div>
          
          <button 
            onClick={() => setShowForm(!showForm)}
            className="shrink-0 bg-white border border-emerald-200 hover:border-emerald-500 hover:text-emerald-700 text-emerald-800 px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-[10px] transition-all flex items-center gap-2"
          >
            <MessageCircleHeart className="w-4 h-4" />
            Оставить свой отзыв
          </button>
        </div>

        {/* Review Form Expansion */}
        {showForm && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            className="mb-12"
          >
            <div className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-100 max-w-3xl">
              <h4 className="text-sm font-bold text-emerald-900 mb-6 uppercase tracking-widest">Написать отзыв</h4>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const newReview = {
                    id: Date.now(),
                    name: (form.elements.namedItem('author') as HTMLInputElement).value,
                    rating: 5,
                    text: (form.elements.namedItem('content') as HTMLTextAreaElement).value,
                    date: 'Только что'
                  };
                  setReviews([newReview, ...reviews]);
                  setShowForm(false);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-[11px] font-bold text-emerald-800 uppercase mb-1">Как к вам обращаться</label>
                  <input name="author" required type="text" className="w-full text-xs p-2.5 rounded-lg border border-emerald-100 bg-white focus:ring-1 focus:ring-amber-500 outline-none" placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-emerald-800 uppercase mb-1">Ваш отзыв</label>
                  <textarea name="content" required rows={3} className="w-full text-xs p-2.5 rounded-lg border border-emerald-100 bg-white focus:ring-1 focus:ring-amber-500 outline-none resize-none" placeholder="Поделитесь вашим результатом..."></textarea>
                </div>
                <div className="pt-2 flex justify-end gap-3">
                  <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-[10px] font-bold text-slate-500 hover:text-slate-700 uppercase">Отмена</button>
                  <button type="submit" className="px-6 py-2 bg-emerald-900 hover:bg-emerald-800 text-white rounded-lg font-bold text-[10px] uppercase tracking-widest transition-colors">Опубликовать</button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-emerald-50/30 p-6 rounded-2xl shadow-sm border border-emerald-100 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-4 text-amber-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 mb-6 flex-grow italic">
                "{review.text}"
              </p>
              <div className="mt-auto border-t border-emerald-100/50 pt-3 flex items-center justify-between">
                <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-wide">{review.name}</span>
                <span className="text-[10px] text-emerald-600/70 font-medium">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
