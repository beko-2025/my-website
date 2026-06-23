/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { FormsSection } from './components/FormsSection';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-emerald-200 selection:text-emerald-900 text-[#1A2E26]">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <FormsSection />
        <Reviews />
        <Gallery />
      </main>
      
      <Footer />
    </div>
  );
}
