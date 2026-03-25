import { useState, useEffect } from 'react';
import { Menu, Phone, Instagram, X, Beef, Flame, UtensilsCrossed, Baby, Droplet, ChefHat } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-yellow-400/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-black tracking-wider"
            >
              <span className="text-yellow-400">BITE BOX</span>{' '}
              <span className="text-white">FOODTRUCK</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('menu')}
                className="text-white hover:text-yellow-400 transition-colors duration-200 font-bold"
              >
                MENY
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-yellow-400 transition-colors duration-200 font-bold"
              >
                KONTAKT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/98 backdrop-blur-md border-t border-yellow-400/20"
          >
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left text-white hover:text-yellow-400 transition-colors duration-200 font-bold"
              >
                MENY
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-white hover:text-yellow-400 transition-colors duration-200 font-bold"
              >
                KONTAKT
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764018601476-e5fac1f27893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYnVyZ2VyJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzQ0MTY4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Premium Burger"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Logo */}
            <div className="mb-8">
              <div className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-2">
                <span className="text-yellow-400">BITE BOX</span>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide">
                <span className="text-white">FOODTRUCK</span>
              </div>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-400 mb-2">
                Street Combo – 149 kr
              </p>
              <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
                Alla menyer inkluderar pommes & 33cl dryck
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="tel:+46707514695"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.5 }}
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-12 py-5 text-xl sm:text-2xl font-black tracking-wide transition-all duration-300 shadow-2xl shadow-red-600/50 border-2 border-red-600 hover:border-yellow-400"
            >
              RING & BESTÄLL
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-yellow-400 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-yellow-400 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="text-yellow-400">VÅR</span>{' '}
              <span className="text-white">MENY</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </motion.div>

          <div className="space-y-12 sm:space-y-16">
            {/* Burgers Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Beef className="text-yellow-400" size={32} />
                <h3 className="text-3xl sm:text-4xl font-black text-yellow-400 uppercase">
                  Burgare
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Street Combo - Featured */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="lg:col-span-2 bg-gradient-to-r from-red-600 to-red-700 border-2 border-yellow-400 p-6 sm:p-8 shadow-lg shadow-red-600/30"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-black text-white mb-2">
                        Street Combo
                      </h4>
                      <p className="text-white/90 text-sm sm:text-base">
                        Valfri burgare + Dirty Fries + Dryck
                      </p>
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-yellow-400">
                      149 kr
                    </span>
                  </div>
                </motion.div>

                {/* Bite Classic Smash */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-3">
                    Bite Classic Smash
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Smash Beef, Cheddar, Pickles, House-sås, Krispsallad
                  </p>
                  <div className="flex gap-4 text-yellow-400">
                    <span className="text-lg sm:text-xl font-bold">75 kr</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-lg sm:text-xl font-bold">Meny 129 kr</span>
                  </div>
                </motion.div>

                {/* Bite Bacon */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-3">
                    Bite Bacon
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Smash Beef, Cheddar, Bacon, House-sås, Krisplök, Krispsallad
                  </p>
                  <div className="flex gap-4 text-yellow-400">
                    <span className="text-lg sm:text-xl font-bold">80 kr</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-lg sm:text-xl font-bold">Meny 139 kr</span>
                  </div>
                </motion.div>

                {/* Bite Chili */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-3">
                    Bite Chili
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Smash Beef, Cheddar, Jalapeño, Chili mayo, Krisplök, Krispsallad
                  </p>
                  <div className="flex gap-4 text-yellow-400">
                    <span className="text-lg sm:text-xl font-bold">80 kr</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-lg sm:text-xl font-bold">Meny 139 kr</span>
                  </div>
                </motion.div>

                {/* Bite Chicken */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-3">
                    Bite Chicken
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Panerad kyckling, Chili mayo, Tomat, Ranch, Krispsallad
                  </p>
                  <div className="flex gap-4 text-yellow-400">
                    <span className="text-lg sm:text-xl font-bold">80 kr</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-lg sm:text-xl font-bold">Meny 139 kr</span>
                  </div>
                </motion.div>

                {/* Double Up */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="lg:col-span-2 bg-yellow-400 border-2 border-yellow-400 p-4 sm:p-5 text-center"
                >
                  <h4 className="text-xl sm:text-2xl font-black text-black">
                    Double up burger +39 kr
                  </h4>
                </motion.div>
              </div>
            </motion.div>

            {/* Loaded Fries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Flame className="text-yellow-400" size={32} />
                <h3 className="text-3xl sm:text-4xl font-black text-yellow-400 uppercase">
                  Loaded Fries
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl sm:text-2xl font-black text-white">
                      Veckans Loaded
                    </h4>
                    <span className="text-2xl sm:text-3xl font-black text-yellow-400">
                      129 kr
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-3">
                    Dirty Mix Fries
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Popcorn chicken, ost, bacon, ranch
                  </p>
                  <span className="text-2xl sm:text-3xl font-black text-yellow-400">
                    129 kr
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Sides */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <UtensilsCrossed className="text-yellow-400" size={32} />
                <h3 className="text-3xl sm:text-4xl font-black text-yellow-400 uppercase">
                  Sides
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg sm:text-xl font-black text-white">Dirty Fries</h4>
                    <span className="text-xl sm:text-2xl font-black text-yellow-400">75 kr</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg sm:text-xl font-black text-white">Salted Fries</h4>
                    <span className="text-xl sm:text-2xl font-black text-yellow-400">45 kr</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg sm:text-xl font-black text-white">Nuggets 8 st</h4>
                    <span className="text-xl sm:text-2xl font-black text-yellow-400">105 kr</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Kids Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Baby className="text-yellow-400" size={32} />
                <h3 className="text-3xl sm:text-4xl font-black text-yellow-400 uppercase">
                  Kids Meny
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg sm:text-xl font-black text-white">Kids burgare</h4>
                    <span className="text-xl sm:text-2xl font-black text-yellow-400">75–105 kr</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg sm:text-xl font-black text-white">Kids nuggets 4 st</h4>
                    <span className="text-xl sm:text-2xl font-black text-yellow-400">70–89 kr</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Drinks & Dips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Droplet className="text-yellow-400" size={32} />
                <h3 className="text-3xl sm:text-4xl font-black text-yellow-400 uppercase">
                  Dricka & Dipp
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg sm:text-xl font-black text-white">Juicebox</h4>
                    <span className="text-xl sm:text-2xl font-black text-yellow-400">15 kr</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg sm:text-xl font-black text-white">33cl</h4>
                    <span className="text-xl sm:text-2xl font-black text-yellow-400">25 kr</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-yellow-400/20 p-5 sm:p-6 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg sm:text-xl font-black text-white">Dipp</h4>
                    <span className="text-xl sm:text-2xl font-black text-yellow-400">15 kr</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="text-yellow-400">HITTA</span>{' '}
              <span className="text-white">OSS</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Phone */}
            <motion.a
              href="tel:+46707514695"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-red-600 hover:bg-red-700 p-6 sm:p-8 flex flex-col items-center justify-center transition-all duration-300 group border-2 border-red-600 hover:border-yellow-400"
            >
              <Phone className="text-white mb-4 group-hover:rotate-12 transition-transform duration-300" size={40} />
              <span className="text-white text-lg sm:text-xl font-black mb-2">RING OSS</span>
              <span className="text-white/90 text-sm sm:text-base">070-751 46 95</span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com/bite_box_food_truck"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-6 sm:p-8 flex flex-col items-center justify-center transition-all duration-300 group border-2 border-purple-600 hover:border-yellow-400"
            >
              <Instagram className="text-white mb-4 group-hover:rotate-12 transition-transform duration-300" size={40} />
              <span className="text-white text-lg sm:text-xl font-black mb-2">INSTAGRAM</span>
              <span className="text-white/90 text-sm sm:text-base">@bite_box_food_truck</span>
            </motion.a>

            {/* TikTok */}
            <motion.a
              href="https://tiktok.com/@bite.box.foodtruck"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-black to-gray-900 hover:from-gray-900 hover:to-black p-6 sm:p-8 flex flex-col items-center justify-center transition-all duration-300 group border-2 border-white hover:border-yellow-400"
            >
              <svg
                className="w-10 h-10 mb-4 text-white group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span className="text-white text-lg sm:text-xl font-black mb-2">TIKTOK</span>
              <span className="text-white/90 text-sm sm:text-base">@bite.box.foodtruck</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-400/20 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xl sm:text-2xl font-black text-center md:text-left">
              <span className="text-yellow-400">BITE BOX</span>{' '}
              <span className="text-white">FOODTRUCK</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p className="text-sm sm:text-base">&copy; 2026 Bite Box Foodtruck</p>
              <p className="text-xs sm:text-sm mt-1">Premium Street Food</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
