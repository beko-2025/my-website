import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const imageModules = import.meta.glob('/public/gallery/*.{png,jpg,jpeg,webp}', { eager: true });
const uploadedImages = Object.keys(imageModules).map((path) => ({
  url: path.replace('/public', ''),
  alt: "Фото из галереи"
}));

const fallbackImages = [
  {
    url: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=1200",
    alt: "Устаз (Учитель)"
  },
  {
    url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200",
    alt: "Родители"
  },
  {
    url: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=1200",
    alt: "Благословение на этот путь"
  }
];

const images = uploadedImages.length > 0 ? uploadedImages : fallbackImages;

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight' && selectedIndex !== null) nextSlide();
      if (e.key === 'ArrowLeft' && selectedIndex !== null) prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const prevSlide = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const nextSlide = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section id="gallery" className="py-24 bg-zinc-50 border-t border-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold uppercase text-amber-600 mb-2 tracking-widest flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Преемственность и бата
          </h2>
          <h3 className="text-4xl sm:text-5xl font-sans font-bold text-emerald-900 mb-4 tracking-tight">
            Устаз и Родители
          </h3>
          <p className="text-base leading-relaxed text-emerald-800/80">
            Люди, чья мудрость, воспитание и искреннее благословение (бата) стали главной опорой на этом благом пути помощи людям.
          </p>
        </div>

        {/* Сетка фотографий (миниатюры) */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto space-y-4">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer overflow-hidden rounded-xl shadow-sm bg-gray-200 break-inside-avoid"
              onClick={() => setSelectedIndex(idx)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto block hover:opacity-90 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Лайтбокс на весь экран */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          >
            {/* Кнопка закрытия */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Изображение в центре */}
            <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center p-4 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={images[selectedIndex].url}
                  alt={images[selectedIndex].alt}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </AnimatePresence>

              {/* Навигация */}
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
            
            {/* Счетчик */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-mono text-sm tracking-widest">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
