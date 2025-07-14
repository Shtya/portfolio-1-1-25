'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import CustomCursor from '@/components/home/CustomCursor';
import ServicesSection from '@/components/home/Services';
import Title from '@/components/home/Title';
import SkillChart from '@/components/home/Skills';
import Projects from '@/components/home/Projects';
import Testimonials from '@/components/home/Testimonials';
import LoadingScreen from '@/components/home/LoadingScreen';

const sideLinks = [
  {
    href: 'https://www.linkedin.com/in/ahmed-abdelrhman-78bb18230/',
    icon: <Linkedin className='text-blue-600 dark:text-blue-400 w-5 h-5' />,
    hover: 'hover:bg-blue-100 dark:hover:bg-blue-900',
  },
  {
    href: 'https://github.com/Shtya',
    icon: <Github className='text-gray-800 dark:text-gray-100 w-5 h-5' />,
    hover: 'hover:bg-gray-300 dark:hover:bg-gray-600',
  },
  {
    href: 'https://wa.me/201551495772',
    icon: <Phone className='text-green-600 dark:text-green-400 w-5 h-5' />,
    hover: 'hover:bg-green-100 dark:hover:bg-green-900',
  },
  {
    href: 'mailto:ahmedabdelrhman083@gmail.com',
    icon: <Mail className='text-red-600 dark:text-red-400 w-5 h-5' />,
    hover: 'hover:bg-red-100 dark:hover:bg-red-900',
  },
];

export default function Portfolio() {
  // State management
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Translations
  const locales = {
    en: {
      previous: 'Previous',
      next: 'Next',
      close: 'Close',
      header: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        skills: 'Skills',
        projects: 'Projects',
        testimonials: 'Testimonials',
      },
      hero: {
        greeting: "Hello, I'm",
        name: 'Ahmed Abdelrhman',
        title: 'Full Stack Developer',
        description: "I'm a passionate developer who loves building web applications that leverage my skills in both frontend and backend development. Check out some of my work in the projects section.",
        hireMe: 'Hire Me',
        downloadCV: 'Download CV',
        viewProjects: 'View Projects',
      },
      about: {
        title: 'About Me',
        content: 'I am a software developer with 6+ years of experience, including 4 years in frontend and backend development and 2 years as a Senior Full Stack Developer. I have a strong grasp of the software development lifecycle and a track record of delivering scalable, high-performance projects.',
        yearsExperience: '6+ Years',
        experienceLabel: 'Experience',
        clients: '50+',
        clientsLabel: 'Clients',
        projects: '100+',
        projectsLabel: 'Projects',
      },
      services: {
        title: 'My Services',
      },
      skills: {
        title: 'My Skills',
        proficiency: {
          expert: 'Expert',
          pro: 'Pro',
          good: 'Good',
          intermediate: 'Intermediate',
          basic: 'Basic',
        },
      },
      projects: {
        title: 'My Projects',
        description: 'Check out my latest projects',
        filters: {
          all: 'All',
          frontend: 'Front End',
          backend: 'Back End',
          shopify: 'Shopify',
        },
        viewDemo: 'View Demo',
        viewCode: 'View Code',
      },
      testimonials: {
        title: 'Client Testimonials',
        subtitle: 'What people say about working with me',
      },
      contact: {
        title: 'Get In Touch',
        email: 'shtya54@gmail.com',
        phone: '+201551495772',
        location: 'North-Sinai, Egypt',
        sendMessage: 'Send Message',
        name: 'Your Name',
        emailPlaceholder: 'Your Email',
        message: 'Your Message',
      },
      footer: {
        copyright: '© 2021 Ahmed Abdelrhman. All rights reserved.',
      },
    },
    ar: {
      previous: 'السابق',
      next: 'التالي',
      close: 'إغلاق',
      header: {
        home: 'الرئيسية',
        about: 'عني',
        services: 'خدماتي',
        skills: 'مهاراتي',
        projects: 'مشاريعي',
        testimonials: 'آراء العملاء',
      },
      hero: {
        greeting: 'مرحبًا، أنا',
        name: 'أحمد عبد الرحمن',
        title: 'مطور Full Stack',
        description: 'أنا مطور شغوف أحب بناء تطبيقات الويب التي تستفيد من مهاراتي في تطوير الواجهات الأمامية والخلفية. يمكنك الاطلاع على بعض أعمالي في قسم المشاريع.',
        hireMe: 'وظفني',
        downloadCV: 'تحميل السيرة الذاتية',
        viewProjects: 'عرض المشاريع',
      },
      about: {
        title: 'عني',
        content: 'أنا مطور برمجيات لدي أكثر من 6 سنوات من الخبرة، منها 4 سنوات في تطوير الواجهات الأمامية والخلفية وسنتين كمطور Full Stack كبير. لدي فهم قوي لدورة حياة تطوير البرمجيات وسجل حافل في تقديم مشاريع قابلة للتطوير وعالية الأداء.',
        yearsExperience: '6+ سنوات',
        experienceLabel: 'خبرة',
        clients: '50+',
        clientsLabel: 'عميل',
        projects: '100+',
        projectsLabel: 'مشروع',
      },
      services: {
        title: 'خدماتي',
      },
      skills: {
        title: 'مهاراتي',
        proficiency: {
          expert: 'خبير',
          pro: 'محترف',
          good: 'جيد',
          intermediate: 'متوسط',
          basic: 'مبتدئ',
        },
      },
      projects: {
        title: 'مشاريعي',
        description: 'اطلع على أحدث مشاريعي',
        filters: {
          all: 'الكل',
          frontend: 'واجهة أمامية',
          backend: 'واجهة خلفية',
          shopify: 'Shopify',
        },
        viewDemo: 'عرض التجربة',
        viewCode: 'عرض الكود',
      },
      testimonials: {
        title: 'آراء العملاء',
        subtitle: 'ما يقوله الناس عن العمل معي',
      },
      contact: {
        title: 'تواصل معي',
        email: 'shtya54@gmail.com',
        phone: '+201551495772',
        location: 'شمال سيناء، مصر',
        sendMessage: 'إرسال رسالة',
        name: 'اسمك',
        emailPlaceholder: 'بريدك الإلكتروني',
        message: 'رسالتك',
      },
      footer: {
        copyright: '© 2021 أحمد عبد الرحمن. جميع الحقوق محفوظة.',
      },
    },
  };

  const t = locales[language];

  // Handle scroll to section
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');

    // Update the state
    setDarkMode(isDark);

    // Store preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Use saved theme if exists, otherwise use system preference
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    setDarkMode(initialTheme === 'dark');
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle language
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  // Set dark mode on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLang = localStorage.getItem('language');

    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    if (savedLang) {
      setLanguage(savedLang);
    }

    // Scroll spy
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Name animation effect
  const nameRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      const name = t.hero.name;
      const firstLetter = name.charAt(0);
      const restOfName = name.slice(1);

      nameRef.current.innerHTML = `
        <span class="text-red-500">${firstLetter}</span>${restOfName}
      `;
    }
  }, [t.hero.name]);

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Variants for Framer Motion animations
  const overlayVariants = {
    open: { opacity: 1, pointerEvents: 'auto' },
    closed: { opacity: 0, pointerEvents: 'none' },
  };

  const mobileMenuVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '100%', transition: { delay: 0.15 } },
  };

  const menuItemVariants = {
    open: i => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
    closed: {
      x: 20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const hamburgerVariants = {
    open: { rotate: 45, y: 6 },
    closed: { rotate: 0, y: 0 },
  };

  const hamburgerMiddleVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const hamburgerBottomVariants = {
    open: { rotate: -45, y: -6 },
    closed: { rotate: 0, y: 0 },
  };

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div dir={language == 'ar' ? 'rtl' : 'ltr'} className={` ${language == 'ar' && 'ar'} min-h-screen transition-colors duration-300  dark:bg-[#111111] dark:text-white  bg-gray-50 text-gray-900 `}>
      <Head>
        <title>
          {t.hero.name} | {t.hero.title}
        </title>
        <meta name='description' content='Professional portfolio of Ahmed Abdelrhman, Full Stack Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* {isLoading ? (
        <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : ( */}
        <>
          {/* Header */}
          <motion.header className={`fixed w-full z-40 dark:bg-gray-900/95 bg-opacity-95 bg-white/95  backdrop-blur-sm`} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <motion.div
              className={`container mx-auto !shadow-none px-2 flex justify-between items-center transition-all duration-300 ${scrolled ? '!py-2' : '!py-5'}`}
              initial={false} >
              <motion.a href='#home' className='text-xl font-bold dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors' onClick={() => scrollToSection('home')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <img src='/assets/fav.png' className='w-12' />
              </motion.a>

              {/* Desktop Navigation */}
              <nav className='hidden md:flex items-center space-x-3'>
                {Object.entries(t.header).map(([key, value]) => (
                  <div key={key} className='relative group'>
                    <motion.a href={`#${key}`} className={`relative px-2 py-2 transition-colors ${activeSection === key ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`} onClick={() => scrollToSection(key)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      {value}
                      {activeSection === key && <motion.div className='absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 w-full' layoutId='activeIndicator' transition={{ type: 'spring', stiffness: 500, damping: 30 }} />}
                    </motion.a>
                    {!activeSection === key && <motion.div className='absolute  bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 w-0 group-hover:w-full' initial={{ width: 0 }} whileHover={{ width: '100%' }} transition={{ duration: 0.3 }} />}
                  </div>
                ))}
              </nav>

              {/* Right Side Controls */}
              <div className='flex items-center gap-2 '>
                <motion.button onClick={toggleLanguage} className=' text-xs w-[35px] h-[35px] flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {language === 'en' ? 'AR' : 'EN'}
                </motion.button>

                <motion.button onClick={toggleDarkMode} className='p-2  w-[35px] h-[35px] flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors' whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }}>
                  {darkMode ? (
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                      <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clipRule='evenodd' />
                    </svg>
                  ) : (
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                      <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                    </svg>
                  )}
                </motion.button>

                {/* Mobile Menu Button - Hamburger */}
                <motion.button className='md:hidden w-[35px] h-[35px] p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors relative z-50' onClick={() => setIsMenuOpen(!isMenuOpen)} initial={false} animate={isMenuOpen ? 'open' : 'closed'}>
                  <div className='w-full flex flex-col items-center'>
                    <motion.div className='h-0.5 w-full bg-current mb-1 ' variants={hamburgerVariants} />
                    <motion.div className='h-0.5 w-full bg-current mb-1 ' variants={hamburgerMiddleVariants} />
                    <motion.div className='h-0.5 w-full bg-current' variants={hamburgerBottomVariants} />
                  </div>
                </motion.button>
              </div>

              {/* Mobile Menu Overlay */}
              <AnimatePresence>
                {isMenuOpen && (
                  <>
                    <motion.div className='md:hidden fixed inset-0 dark:bg-gray-800 bg-gray-300/70 z-40 backdrop-blur-lg  h-screen ' initial='closed' animate='open' exit='closed' variants={overlayVariants} onClick={() => setIsMenuOpen(false)} />

                    <motion.div className='md:hidden fixed top-0 right-0  w-64 z-40 dark:!bg-gray-900 h-screen !bg-white shadow-xl' initial='closed' animate='open' exit='closed' variants={mobileMenuVariants}>
                      <div className='h-full flex flex-col pt-24 px-6 space-y-4'>
                        {Object.entries(t.header).map(([key, value], index) => (
                          <motion.a
                            key={key}
                            href={`#${key}`}
                            className={`py-3 px-4 rounded-md ${activeSection === key ? 'bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-blue-400' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600'}`}
                            custom={index}
                            initial='closed'
                            animate='open'
                            exit='closed'
                            variants={menuItemVariants}
                            onClick={() => {
                              scrollToSection(key);
                              setIsMenuOpen(false);
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}>
                            {value}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.header>

          {/* Hero Section */}
          <section id='home' className='min-h-screen flex items-center pt-20 pb-16 bg-one'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
                <div className='text-center md:text-left order-2 md:order-1'>
                  {/* Main title */}
                  <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                    <span className='block md:rtl:text-right text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2'>{t.hero.greeting}</span>

                    {/* Name with typing effect */}
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className='md:rtl:text-right block text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-500 whitespace-nowrap overflow-hidden border-r-4 border-transparent animate-typing'>
                      {t.hero.name}
                    </motion.span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className='md:rtl:text-right text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-200'>
                    {t.hero.title}
                  </motion.h2>

                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className='md:rtl:text-right text-base md:text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0'>
                    {t.hero.description}
                  </motion.p>

                  {/* Buttons */}
                  <motion.div className='flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4' initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.6 }}>
                    <a href='https://wa.me/201551495772' target='_blank' onClick={() => scrollToSection('contact')} className='max-sm:hidden px-5 py-2.5 max-md:px-2 max-md:py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base'>
                      {t.hero.hireMe}
                    </a>
                    <a href='/resume.pdf' download className='px-5 py-2.5 max-md:px-2 max-md:py-2 sm:px-6 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 transition-all duration-300 shadow-md text-sm sm:text-base'>
                      {t.hero.downloadCV}
                    </a>
                    <a href='#projects' onClick={() => scrollToSection('projects')} className='  px-5 py-2.5 max-md:px-2 max-md:py-2 sm:px-6 sm:py-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg sm:rounded-xl transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base'>
                      {t.hero.viewProjects}
                    </a>
                  </motion.div>

                  {/* Social links */}
                  <div className='flex gap-2 z-10 justify-center md:justify-start mt-6 md:mt-8'>
                    {sideLinks.map((link, i) => (
                      <motion.a key={i} href={link.href} target='_blank' rel='noopener noreferrer' initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15, duration: 0.5 }} className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-colors shadow-md hover:shadow-lg dark:shadow-black/30 ${link.hover} bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600`}>
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Image container - order changes on mobile */}
                <div className='order-1 md:order-2 flex justify-center md:justify-end'>
                  <motion.div className='relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96' initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <div className='absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-600 shadow-lg dark:shadow-black/30'></div>
                    <div className='absolute inset-4 rounded-full bg-gray-100 dark:bg-gray-700 shadow-inner dark:shadow-black/20'></div>
                    <div className='absolute inset-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden'>
                      <img src='/assets/main.jpg' alt='Profile' className='w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105' />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id='about' className={` bg-two !py-24 max-sm:!py-8 transition-colors duration-300`}>
            <div className='container mx-auto px-4'>
              <Title title={t.about.title} />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <motion.div className='order-2 md:order-1' initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                  <p className='text-lg max-sm:text-base max-md:text-center max-sm:text-center mb-6 dark:text-gray-300 text-gray-600'>{t.about.content}</p>

                  <div className='grid grid-cols-3 gap-4 mt-8'>
                    <CounterBox endValue={6} suffix='+' label={t.about.experienceLabel} darkMode={darkMode} />
                    <CounterBox endValue={12} suffix='+' label={t.about.clientsLabel} darkMode={darkMode} />
                    <CounterBox endValue={56} suffix='+' label={t.about.projectsLabel} darkMode={darkMode} />
                  </div>
                </motion.div>

                <div className='order-1 md:order-2 flex justify-center'>
                  <div className='relative w-64 h-64 md:w-80 md:h-80'>
                    <div className={`absolute inset-0 rounded-2xl dark:bg-gray-700 bg-gray-200 transform rotate-6`}></div>
                    <div className={`absolute inset-0 rounded-2xl dark:bg-gray-800 bg-gray-100 transform -rotate-6`}></div>
                    <div className={`absolute inset-0 rounded-2xl dark:bg-gray-900 bg-white overflow-hidden`}>
                      <img src='/assets/main.jpg' alt='About Me' className='w-full h-full object-cover object-top ' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <ServicesSection lang={language == 'ar' ? 'ar' : 'en'} t={t} darkMode={darkMode} />

          {/* Skills Section */}
          <SkillChart t={t} darkMode={darkMode} />

          {/* Projects Section */}
          <Projects lang={language == 'ar' ? 'ar' : 'en'} t={t} />

          {/* Testimonials Section */}
          <Testimonials lang={language} t={t} darkMode={darkMode} />
        </>
      {/* )} */}

      {/* Custom Cursor */}
      <CustomCursor />
    </div>
  );
}

const CounterBox = ({ endValue, suffix = '', label, darkMode }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start counting when component is in view
          const duration = 1000; // 2 seconds
          const startTime = Date.now();

          const animateCount = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentCount = Math.floor(progress * endValue);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [endValue]);

  return (
    <motion.div ref={ref} className={`p-4 rounded-lg text-center dark:bg-gray-800 bg-white shadow-md hover:shadow-lg transition-all`} whileHover={{ y: -5 }}>
      <div className='text-3xl font-bold text-blue-600 dark:text-blue-400'>
        {count}
        {suffix}
      </div>
      <div className='text-gray-600 dark:text-gray-300'>{label}</div>
    </motion.div>
  );
};
