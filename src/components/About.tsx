import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HeartPulse, CheckCircle2, ChevronLeft, ChevronRight, FileX } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import healerImage from '../assets/images/healer_portrait.jpeg';

export function About() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdfError, setPdfError] = useState<boolean>(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPdfError(false);
  }

  function onDocumentLoadError() {
    setPdfError(true);
  }

  const credentials = [
    "Сертифицированный специалист по исламской медицине",
    "Многолетняя практика чтения Рукъи (шариатского заклинания)",
    "Глубокие знания в области фитотерапии и свойств трав",
    "Соблюдение всех норм Ислама при лечении"
  ];

  return (
    <section id="about" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16 bg-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-emerald-100">
          
          {/* Top Row: Photo + Kazakh Text space */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-emerald-50 rounded-xl overflow-hidden relative z-10 border-2 border-amber-500/20 shadow-sm flex items-center justify-center">
                <img 
                  src={healerImage} 
                  alt="Ашiрбек Емшi" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Имя под фото */}
              <div className="mt-6 text-center relative z-20">
                <h3 className="text-2xl font-bold text-emerald-900 font-sans tracking-tight">Ашiрбек Емшi</h3>
                <p className="text-emerald-700 font-medium mt-1">Аширбек Акбердиев</p>
              </div>

              {/* Decoration */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-emerald-50 rounded-2xl -z-0 bg-amber-500/10" />
              
              <div className="absolute top-8 -right-8 bg-white p-4 rounded-xl shadow-sm border border-emerald-100 z-20 hidden md:flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-800 text-white rounded-full flex items-center justify-center">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-emerald-900 text-lg">10+ лет</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">Практики</p>
                </div>
              </div>
            </motion.div>

            {/* Kazakh Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:pl-8"
            >
              <h2 className="text-sm font-bold uppercase text-amber-600 tracking-widest mb-2 text-center">Рухани шипа</h2>
              <h3 className="text-4xl sm:text-5xl font-sans font-bold text-emerald-900 mb-6 tracking-tight text-center">
                Жан мен тән саулығы
              </h3>
              
              <div className="space-y-4 text-base leading-relaxed text-slate-600 mb-8 italic">
                <p>
                  Жын мен көзге көрінбейтін ауыртпалық, адам рухын әлсіретеді. 
                  Рухани тазалық пен дұға, адамның ең үлкен қорғаны.
                </p>
                <p>
                  Кей жағдайларда адамға Құран оқылып, дем салдыру қажет болады. 
                  Себебі рухани дерт уақытында емделмесе, жан тыныштығына әсер етуі мүмкін.
                </p>
                <p>
                  Таза жүріп, дәретпен болып, намазын оқып, Алланы еске алған жанға жамандықтың жолы ауырлайды. 
                  Өйткені жүрегі нұрланған адам — рухани қорған ішінде болады.
                </p>
                <div className="mt-6 p-5 bg-emerald-50 rounded-xl border-l-4 border-emerald-600 shadow-sm">
                  <p className="font-bold text-emerald-900 tracking-tight text-lg mb-1">Құран — шипа.</p>
                  <p className="font-bold text-emerald-900 tracking-tight text-lg mb-1">Дұға — қорған.</p>
                  <p className="font-bold text-emerald-900 tracking-tight text-lg">Сабыр — жүректің емі.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="h-px w-full bg-emerald-100/50 my-2" />

          {/* Bottom Row: PDF + Russian Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Открытый PDF */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xs font-bold uppercase text-amber-600 tracking-widest mb-2 text-center">Документ</h2>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4 tracking-tight text-center">
                Автобиография PDF
              </h3>
              <div className="w-full border-2 border-emerald-100 rounded-xl overflow-hidden shadow-sm h-auto bg-slate-50 relative z-30 flex flex-col items-center">
                <div className="w-full flex justify-between items-center p-3 bg-white border-b border-emerald-100">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}
                      disabled={pageNumber <= 1}
                      className="p-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 disabled:opacity-50 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setPageNumber(prev => Math.min(numPages || 1, prev + 1))}
                      disabled={pageNumber >= (numPages || 1)}
                      className="p-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 disabled:opacity-50 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  <span className="text-sm font-medium text-slate-600">
                    Страница {pageNumber} из {numPages || '-'}
                  </span>
                  <a 
                    href="/autobiography.pdf" 
                    download
                    className="text-xs font-medium bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded transition-colors"
                  >
                    Скачать
                  </a>
                </div>
                
                <div className="w-full flex justify-center overflow-auto p-4 max-h-[600px] min-h-[400px]">
                  {!pdfError ? (
                    <Document
                      file="/autobiography.pdf"
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={onDocumentLoadError}
                      loading={<div className="flex items-center justify-center h-64 text-emerald-600 font-medium animate-pulse">Загрузка документа...</div>}
                    >
                      <Page 
                        pageNumber={pageNumber} 
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                        width={Math.min(window.innerWidth - 64, 500)}
                        className="shadow-md"
                      />
                    </Document>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-center px-4">
                      <FileX className="w-12 h-12 text-slate-300 mb-3" />
                      <p className="text-slate-500 text-sm mb-2">Не удалось загрузить PDF в окне предпросмотра.</p>
                      <a href="/autobiography.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm underline">
                        Открыть файл напрямую
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Russian Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:pl-8 lg:pt-14"
            >
              <h2 className="text-sm font-bold uppercase text-amber-600 tracking-widest mb-2 text-center">Об авторе</h2>
              <h3 className="text-4xl sm:text-5xl font-sans font-bold text-emerald-900 mb-6 tracking-tight text-center">
                Ваш путь к исцелению
              </h3>
              
              <div className="space-y-4 text-base leading-relaxed text-slate-600 mb-8 italic">
                <p>
                  Специалист исламской медицины. Главная цель — помочь 
                  вам обрести здоровье, физическое и духовное, используя исключительно те методы, 
                  которые дозволены Всевышним и практиковались нашим Пророком Мухаммадом (мир ему и благословение).
                </p>
                <p>
                  Истинное исцеление исходит только от Аллаха, а мы являемся лишь причиной. 
                  В практике используется чтение аятов Священного Корана для избавления от духовных недугов (Рукъя), 
                  проводится хиджама и подбираются индивидуальные курсы лечения целебными травами, медом и маслом черного тмина.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {credentials.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-emerald-900 font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bismillah.svg/1200px-Bismillah.svg.png" 
                  alt="Bismillah" 
                  className="h-12 opacity-60"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
