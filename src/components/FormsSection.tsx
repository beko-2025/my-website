import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MessageSquare, CreditCard, UserPlus, CheckCircle2 } from 'lucide-react';

type Tab = 'appointment' | 'online' | 'payment';

export function FormsSection() {
  const [activeTab, setActiveTab] = useState<Tab>('appointment');

  const tabs = [
    { id: 'appointment', label: 'Очная Запись', icon: Calendar },
    { id: 'online', label: 'Онлайн Консультация', icon: MessageSquare },
    { id: 'payment', label: 'Оплата услуг', icon: CreditCard },
  ] as const;

  return (
    <section id="booking" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-emerald-900 mb-4 tracking-tight">
            Запись и Услуги
          </h2>
          <p className="text-emerald-800/80 text-base">
            Выберите необходимый тип услуги. После заполнения формы с вами свяжутся для подтверждения.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-emerald-50/50 p-2 rounded-2xl border border-emerald-100 backdrop-blur-sm">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold uppercase tracking-wide text-xs transition-all ${
                  isActive 
                    ? 'bg-amber-500 text-white shadow-sm' 
                    : 'text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-emerald-100 relative">
          <AnimatePresence mode="wait">
            {activeTab === 'appointment' && <AppointmentForm key="appointment" />}
            {activeTab === 'online' && <OnlineConsultForm key="online" />}
            {activeTab === 'payment' && <PaymentForm key="payment" />}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

// -----------------------------------------------------
// Sub Form Components
// -----------------------------------------------------

function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) return <SuccessMessage />;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Формируем сообщение для WhatsApp
    const text = `Ассаляму алейкум! Хочу записаться на очный прием.
    
*Имя:* ${data.name}
*Телефон:* ${data.phone}
*Дата:* ${data.date}
*Цель:* ${data.type}
*Проблема:* ${data.problem}`;

    // Переход в WhatsApp
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/77029106060?text=${encodedText}`, '_blank');
    
    setSubmitted(true);
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="text-center mb-6">
        <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-widest flex justify-center items-center gap-2"><span className="w-2 h-2 bg-amber-500 rounded-full"></span> Запись на очный прием</h3>
        <p className="text-[11px] text-slate-500 mt-2 italic">Вы будете перенаправлены в WhatsApp для подтверждения.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase text-emerald-800 mb-1">Ваше Имя</label>
          <input name="name" required type="text" className="w-full text-xs p-2.5 rounded-lg border border-emerald-50 bg-emerald-50/30 outline-none focus:border-amber-500" placeholder="Абдуллах / Амина" />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase text-emerald-800 mb-1">Телефон (WhatsApp)</label>
          <input name="phone" required type="tel" className="w-full text-xs p-2.5 rounded-lg border border-emerald-50 bg-emerald-50/30 outline-none focus:border-amber-500" placeholder="+7 (999) 000-00-00" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase text-emerald-800 mb-1">Желаемая дата</label>
          <input name="date" required type="date" className="w-full text-xs p-2.5 rounded-lg border border-emerald-50 bg-emerald-50/30 outline-none focus:border-amber-500" />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase text-emerald-800 mb-1">Тип процедуры</label>
          <select name="type" className="w-full text-xs p-2.5 rounded-lg border border-emerald-50 bg-emerald-50/30 outline-none focus:border-amber-500 appearance-none">
            <option>Первичный осмотр / Диагностика</option>
            <option>Рукъя (Чтение аятов Корана)</option>
            <option>Хиджама</option>
            <option>Комплексное лечение</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-[11px] font-bold uppercase text-emerald-800 mb-1">Опишите вашу проблему (кратко)</label>
        <textarea name="problem" rows={3} className="w-full text-xs p-2.5 rounded-lg border border-emerald-50 bg-emerald-50/30 outline-none focus:border-amber-500 resize-none" placeholder="Симптомы, жалобы..."></textarea>
      </div>

      <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg uppercase tracking-widest text-xs transition-colors mt-6">
        Перейти в WhatsApp
      </button>
    </motion.form>
  );
}


function OnlineConsultForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) return <SuccessMessage />;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Формируем сообщение для WhatsApp
    const text = `Ассаляму алейкум! Меня интересует онлайн-консультация.
    
*Имя:* ${data.name}
*Удобный мессенджер:* ${data.messenger}
*Контактные данные:* ${data.contactData}
*Суть обращения:* ${data.requestBody}`;

    // Переход в WhatsApp
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/77029106060?text=${encodedText}`, '_blank');
    
    setSubmitted(true);
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="text-center mb-6">
        <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-widest flex justify-center items-center gap-2"><span className="w-2 h-2 bg-amber-500 rounded-full"></span> Онлайн-Консультация</h3>
        <p className="text-[11px] text-slate-500 mt-2 italic">Помощь и диагностика по всему миру. Вы будете перенаправлены в WhatsApp.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase text-emerald-800 mb-1">Ваше Имя</label>
          <input name="name" required type="text" className="w-full text-xs p-2.5 rounded-lg border border-emerald-50 bg-emerald-50/30 outline-none focus:border-amber-500 transition-all" placeholder="Абдуллах / Амина" />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase text-emerald-800 mb-1">Удобный мессенджер</label>
          <select name="messenger" className="w-full text-xs p-2.5 rounded-lg border border-emerald-50 bg-emerald-50/30 outline-none focus:border-amber-500 transition-all">
            <option>WhatsApp</option>
            <option>Telegram</option>
            <option>Skype</option>
          </select>
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-[11px] font-bold uppercase text-emerald-800 mb-1">Контактные данные</label>
        <input name="contactData" required type="text" className="w-full text-xs p-2.5 rounded-lg border border-emerald-50 bg-emerald-50/30 outline-none focus:border-amber-500 transition-all" placeholder="+7 (999) или @username" />
      </div>

      <div className="mt-4">
        <label className="block text-[11px] font-bold uppercase text-emerald-800 mb-1">Суть обращения</label>
        <textarea name="requestBody" required rows={3} className="w-full text-xs p-2.5 rounded-lg border border-emerald-50 bg-emerald-50/30 outline-none focus:border-amber-500 transition-all resize-none" placeholder="С чем вы обращаетесь?"></textarea>
      </div>

      <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg uppercase tracking-widest text-xs transition-colors mt-6">
        Перейти в WhatsApp
      </button>
    </motion.form>
  );
}


function PaymentForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Оплата успешно проведена!</h3>
        <p className="text-slate-500 text-lg">Джазакаллаху хайран (Да воздаст вам Аллах благом). Чек отправлен на ваш телефон.</p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-widest flex justify-center items-center gap-2">💳 Оплата услуг</h3>
        <p className="text-[11px] text-slate-500 mt-2 italic">Безопасный перевод для онлайн консультаций и брони мест.</p>
      </div>

      <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100/50 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
         <span className="text-xs font-bold uppercase text-emerald-900">Сумма к оплате:</span>
         <div className="relative">
             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold font-sans">₸</span>
             <input required type="number" min="1000" defaultValue="5000" className="w-32 pl-8 pr-4 py-2 rounded-lg border border-emerald-100 bg-white font-bold text-emerald-900 text-sm focus:outline-none focus:border-amber-500" />
         </div>
      </div>

       <div className="space-y-4">
        <div>
          <label className="block text-[11px] font-bold uppercase text-emerald-800 mb-1">Номер карты</label>
          <input required type="text" pattern="\d{16}" maxLength={16} className="w-full text-xs p-2.5 rounded-lg border border-emerald-50 bg-emerald-50/30 outline-none focus:border-amber-500 font-mono tracking-widest" placeholder="0000 0000 0000 0000" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold uppercase text-emerald-800 mb-1">Срок</label>
            <input required type="text" maxLength={5} className="w-full text-xs p-2.5 rounded-lg border border-emerald-50 bg-emerald-50/30 outline-none focus:border-amber-500 font-mono tracking-widest" placeholder="ММ/ГГ" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase text-emerald-800 mb-1">CVC/CVV</label>
            <input required type="password" maxLength={3} className="w-full text-xs p-2.5 rounded-lg border border-emerald-50 bg-emerald-50/30 outline-none focus:border-amber-500 font-mono text-center tracking-widest" placeholder="***" />
          </div>
        </div>
      </div>

      <button type="submit" className="w-full mt-6 bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-3 rounded-lg uppercase tracking-widest text-[10px] transition-colors">
        Оплатить картой
      </button>
    </motion.form>
  );
}


function SuccessMessage() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка успешно отправлена!</h3>
      <p className="text-slate-500 text-lg">Мы свяжемся с вами в ближайшее время. Да исцелит вас Аллах.</p>
    </motion.div>
  );
}
