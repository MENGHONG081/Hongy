'use client'; // ← Add this if you're using Next.js App Router

import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, MapPin, Mail, Phone, Sparkles } from 'lucide-react';

interface HomeProps {
  isAuthenticated: boolean;
  onLogin: () => void;
}

// Reusable variants (typed for better TypeScript support)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const roles = [
  'Manager',
  'Designer',
  'Creative Coder',
  'Storyteller',
  'Explorer',
  'Photographer',
  'Dreamer',
];

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const gradientText: Variants = {
  initial: { backgroundPosition: '0% 50%' },
  animate: {
    backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'],
    transition: { duration: 10, repeat: Infinity, ease: 'linear' },
  },
};

const roleVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const Home = ({ isAuthenticated, onLogin }: HomeProps) => {
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto relative z-10 text-center"
        >
          <motion.div variants={fadeInUp} className="mb-10 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
            <img
              src="/Gemini_Generated_Image_59qc7z59qc7z59qc.png" // adjust path if needed (public folder in Vite)
              alt="Hongy"
              className="w-60 h-60 mx-auto rounded-full border-4 border-white shadow-2xl object-cover z-10 relative ring-2 ring-purple-400/50"
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-gray-900">Hey, I'm </span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-[length:200%_auto]"
              variants={gradientText}
              initial="initial"
              animate="animate"
            >
              Menghong
            </motion.span>
          </motion.h1>

          {/* Rotating roles */}
          <div className="h-12 sm:h-16 flex justify-center items-center mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRoleIndex}
                variants={roleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-2xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                {roles[currentRoleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10 font-light"
          >
            Creative explorer • Storyteller • Capturing moments through code
             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover my journey, experiences, and the stories that shape who I am. 
              This is where I share my life, work, and thoughts with the world.
            </p>
          </motion.p>
         
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/about">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 shadow-lg hover:shadow-xl transition-all duration-500 text-lg"
              >
                Discover My World
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>

            {!isAuthenticated ? (
              <Button
                size="lg"
                variant="outline"
                onClick={onLogin}
                className="border-2 border-purple-500/70 hover:bg-purple-50 text-lg px-8"
              >
                Unlock Private Content
              </Button>
            ) : (
              <Link to="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-indigo-500/70 hover:bg-indigo-50 text-lg px-8"
                >
                  Read My Stories
                </Button>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '5+', label: 'Years Creating', color: 'blue' },
              { value: '60+', label: 'Blog Posts', color: 'purple' },
              { value: '120+', label: 'Photos', color: 'blue' },
              { value: '20+', label: 'Projects', color: 'purple' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className={`p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center`}
              >
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-br from-${stat.color}-600 to-${stat.color}-400 bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-gray-100"
          >
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-10">
              Let's Connect
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { Icon: Mail, text: 'Knews4265@gmail.com', color: 'blue' },
                { Icon: Phone, text: '+855 964 324 308', color: 'green' },
                { Icon: MapPin, text: 'Phnom Penh, Cambodia', color: 'red' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-300 transition-all"
                >
                  <div className={`p-3 rounded-lg bg-${item.color}-100 text-${item.color}-600`}>
                    <item.Icon className="h-6 w-6" />
                  </div>
                  <span className="text-gray-800 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl px-10 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;