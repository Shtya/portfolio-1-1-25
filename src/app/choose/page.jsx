'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import * as d3 from 'd3';

const Portfolio = () => {
  // State management
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(null);
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');
  
  // Data
  const projects = [
    { 
      type: "wordpress", 
      img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Barakah", 
      visit: "https://barakah-ivory.vercel.app/",
      github: "https://github.com/example/barakah"
    },
    { 
      type: "wordpress", 
      img: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      title: "Web Blog", 
      visit: "https://blogs-ruby-five.vercel.app/",
      github: "https://github.com/example/blog"
    },
    { 
      type: "next", 
      img: "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Albarsha Alomshriqa", 
      visit: "https://landing0.vercel.app/",
      github: "https://github.com/example/albarsha"
    },
    { 
      type: "next", 
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Photography Services", 
      visit: "https://n-mrm.vercel.app/",
      github: "https://github.com/example/photography"
    },
    { 
      type: "laravel", 
      img: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "MRM Advertising", 
      visit: "https://mrmadvertisingdubai.com/",
      github: "https://github.com/example/mrm"
    },
    { 
      type: "shopify", 
      img: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Pets Store", 
      visit: "https://www.thepetslot.com/",
      github: "https://github.com/example/pets"
    },
    { 
      type: "shopify", 
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      title: "Shopzid Store", 
      visit: "https://www.shopzid.com/",
      github: "https://github.com/example/shopzid"
    },
    { 
      type: "next", 
      img: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80",
      title: "Lime Brook", 
      visit: "https://real-estate0.vercel.app/",
      github: "https://github.com/example/real-estate"
    },
    { 
      type: "react", 
      img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Ecwid", 
      visit: "https://ecwid-lemon.vercel.app/",
      github: "https://github.com/example/ecwid"
    }
  ];

  const svgChart = {
    width: 360,
    height: 360,
    radius: 100,
    sectorWidth: 0.2,
    radScale: 55,
    sectorScale: 1,
    shorten: 1.33,
    index: {
      start: 0,
      increase: 0.2,
    },
    class: 'chart',
    elements: [
      { id: 1, type: 'g', class: 'bars', transform: { translate: { x: 180, y: 194 } } },
      { id: 2, type: 'text', class: 'rating', transform: { translate: { x: 240, y: 262 } }, style: 'font: 11px "Open Sans", Arial; text-transform: uppercase; fill: #888;' },
      { id: 3, type: 'text', class: 'label', transform: { translate: { x: 290, y: 263 } }, style: 'font: 15px "Open Sans", Arial; text-transform: uppercase;' },
      { id: 4, type: 'text', class: 'title', transform: { translate: { x: 180, y: 32 } }, style: 'font: 28px "Open Sans", Arial; ' },
    ],
    borderColor: '#eee',
    barColors: ['#161E26', '#3B4249', '#4F7CAC', '#9EC5EF', '#C0D0E0'],
  };

  const chartData = {
    'front-end': {
      title: 'Front-End Dev',
      entries: [
        { value: 95, label: 'HTML' },
        { value: 90, label: 'CSS / SCSS' },
        { value: 85, label: 'JavaScript' },
        { value: 80, label: 'React' },
        { value: 75, label: 'Next.js' },
      ],
    },
    'back-end': {
      title: 'Back-End Dev',
      entries: [
        { value: 85, label: 'Node.js' },
        { value: 80, label: 'Express' },
        { value: 75, label: 'NestJS' },
        { value: 70, label: 'PHP' },
        { value: 65, label: 'Laravel' },
      ],
    },
    'database': {
      title: 'Database',
      entries: [
        { value: 85, label: 'MySQL' },
        { value: 80, label: 'MongoDB' },
        { value: 75, label: 'Firebase' },
        { value: 70, label: 'PostgreSQL' },
        { value: 65, label: 'Redis' },
      ],
    },
    'other': {
      title: 'Other Skills',
      entries: [
        { value: 90, label: 'Git' },
        { value: 85, label: 'Docker' },
        { value: 80, label: 'AWS' },
        { value: 75, label: 'Shopify' },
        { value: 70, label: 'WordPress' },
      ],
    },
  };

  const services = [
    {
      title: "Front-end Development",
      description: "Building responsive and interactive user interfaces with modern frameworks like React, Next.js, and Vue.",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
    },
    {
      title: "Back-end Development",
      description: "Creating robust server-side applications with Node.js, Express, NestJS, PHP, and Laravel.",
      icon: "https://cdn-icons-png.flaticon.com/512/1082/1082561.png"
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database schemas for MySQL, MongoDB, and Firebase applications.",
      icon: "https://cdn-icons-png.flaticon.com/512/1199/1199128.png"
    },
    {
      title: "E-commerce Solutions",
      description: "Developing custom Shopify and WooCommerce solutions for online businesses.",
      icon: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
    }
  ];

  const testimonials = [
    {
      name: "Hamza Ali",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Ahmed Abdelrhman has helped my team and I stay on the same page. Previously, we were all over the board. Working with Ahmed has definitely saved us time and money.",
      date: "14 June, 2023"
    },
    {
      name: "Eslam Abd Elazeem",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "Working with Ahmed was a pleasure. Their expertise in both front-end and back-end development allowed us to create a seamless user experience for our project.",
      date: "10 May, 2023"
    },
    {
      name: "Mohamed Kamal",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      quote: "I had the pleasure of collaborating with Ahmed on a complex web application. Their ability to quickly grasp new concepts and technologies was impressive.",
      date: "22 April, 2023"
    },
    {
      name: "Islam Abdel Radi",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "As a full-stack developer, Ahmed brought a wealth of knowledge to our project. Their dedication to delivering high-quality code was evident throughout our collaboration.",
      date: "5 March, 2023"
    }
  ];

  // Translations
  const locales = {
    en: {
      header: {
        home: 'Home',
        projects: 'Projects',
        skills: 'Skills',
        about: 'About',
        contact: 'Contact',
        resume: 'Resume',
        testimonials: 'Testimonials',
      },
      hero: {
        title: "Hi, I'm ",
        name: "Ahmed",
        subtitle: 'Full Stack Developer specialized in React & NestJS',
        description: "I'm Ahmed Abdelrhman, a passionate developer with 6+ years of experience building web applications. I love creating efficient, scalable solutions that deliver real value.",
        cta: 'Contact Me',
        downloadCv: 'Download CV',
      },
      projects: {
        title: 'My Projects',
        description: 'Here are some of my most notable projects',
        all: 'All',
        frontend: 'Frontend',
        backend: 'Backend',
        shopify: 'Shopify',
        demo: 'Live Demo',
        code: 'View Code',
      },
      skills: {
        title: 'My Skills',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        other: 'Other',
      },
      about: {
        title: 'About Me',
        content: "I'm a software developer with 6+ years of experience, including 4 years in frontend and backend development and 2 years as a Senior Full Stack Developer. I have a strong grasp of the software development lifecycle and a track record of delivering scalable, high-performance projects.",
        hire: 'Hire Me',
        download: 'Download CV',
      },
      contact: {
        title: 'Get In Touch',
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Thank you! Your message has been sent.',
      },
      testimonials: {
        title: 'What People Say',
      },
      services: {
        title: 'My Services',
      }
    },
    ar: {
      header: {
        home: 'الرئيسية',
        projects: 'المشاريع',
        skills: 'المهارات',
        about: 'عني',
        contact: 'اتصل بي',
        resume: 'السيرة الذاتية',
        testimonials: 'آراء العملاء',
      },
      hero: {
        title: 'مرحبًا، أنا ',
        name: 'أحمد',
        subtitle: 'مطور Full Stack متخصص في React و NestJS',
        description: 'أنا أحمد عبد الرحمن، مطور شغوف بخبرة تزيد عن 6 سنوات في بناء تطبيقات الويب. أحب إنشاء حلول فعالة وقابلة للتوسع توفر قيمة حقيقية.',
        cta: 'اتصل بي',
        downloadCv: 'تحميل السيرة',
      },
      projects: {
        title: 'مشاريعي',
        description: 'هنا بعض من أبرز مشاريعي',
        all: 'الكل',
        frontend: 'واجهة المستخدم',
        backend: 'الخلفية',
        shopify: 'Shopify',
        demo: 'عرض مباشر',
        code: 'عرض الكود',
      },
      skills: {
        title: 'مهاراتي',
        frontend: 'واجهة المستخدم',
        backend: 'الخلفية',
        database: 'قواعد البيانات',
        other: 'أخرى',
      },
      about: {
        title: 'عني',
        content: 'أنا مطور برمجيات بخبرة تزيد عن 6 سنوات، بما في ذلك 4 سنوات في تطوير الواجهات الأمامية والخلفية وسنتين كمطور Full Stack كبير. لدي فهم قوي لدورة حياة تطوير البرمجيات وسجل حافل في تقديم مشاريع قابلة للتوسع وعالية الأداء.',
        hire: 'وظفني',
        download: 'تحميل السيرة',
      },
      contact: {
        title: 'تواصل معي',
        name: 'اسمك',
        email: 'بريدك الإلكتروني',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
        success: 'شكرًا لك! تم إرسال رسالتك بنجاح.',
      },
      testimonials: {
        title: 'آراء العملاء',
      },
      services: {
        title: 'خدماتي',
      }
    },
  };

  // Refs
  const skillsRef = useRef(null);
  const sectionRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const nameRef = useRef(null);
  const [t, setT] = useState(locales[language]);

  // Effects
  useEffect(() => {
    setT(locales[language]);
  }, [language]);

  useEffect(() => {
    // Check for saved preferences
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
      const sections = ['home', 'projects', 'skills', 'about', 'contact', 'testimonials'];
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

  useEffect(() => {
    // Apply dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Name animation
  useEffect(() => {
    if (nameRef.current) {
      const letters = "Ahmed".split('');
      nameRef.current.innerHTML = letters.map((letter, i) => 
        i === 0 ? `<span class="text-red-500">${letter}</span>` : letter
      ).join('');
    }
  }, [nameRef, language]);

  // Skills animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (!hasAnimatedRef.current || !entry.target.classList.contains('was-animated')) {
              adjustSizes();
              showAll();
              hasAnimatedRef.current = true;
              entry.target.classList.add('was-animated');
            }
          } else {
            entry.target.classList.remove('was-animated');
            hasAnimatedRef.current = false;
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handlers
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const openTestimonialModal = (index) => {
    setActiveTestimonial(testimonials[index]);
    setIsModalOpen(true);
  };

  const closeTestimonialModal = () => {
    setIsModalOpen(false);
    setActiveTestimonial(null);
  };

  const filterProjects = (type) => {
    setActiveProjectFilter(type);
  };

  // Skills functions
  const adjustSizes = () => {
    if (!skillsRef.current) return;

    const div = skillsRef.current;
    const style = window.getComputedStyle(div);
    const marginBottom = parseInt(style.marginBottom, 10);

    const h1 = div.offsetHeight;
    const h2 = div.getBoundingClientRect().height;
    div.style.marginBottom = '-' + (Math.floor(Math.abs(h1 - h2)) + Math.abs(marginBottom) - 16 + 'px');

    window.requestAnimationFrame(adjustSizes);
  };

  const drawBarCircleChart = id => {
    const data = [...chartData[id].entries].sort((a, b) => (a.value < b.value ? 1 : -1));
    const size = 100 * svgChart.shorten;

    const bars = d3.select(`#${id} .${svgChart.elements.find(x => x.id === 1).class}`);
    const rating = d3.select(`#${id} .${svgChart.elements.find(x => x.id === 2).class}`);
    const label = d3.select(`#${id} .${svgChart.elements.find(x => x.id === 3).class}`);
    const title = d3.select(`#${id} .${svgChart.elements.find(x => x.id === 4).class}`);

    title.text(t.skills[id.replace('-', ' ')] || chartData[id].title);

    const arc = d3
      .arc()
      .innerRadius((d, i) => ((svgChart.index.start + i * svgChart.index.increase) / svgChart.sectorScale) * svgChart.radius + svgChart.radScale)
      .outerRadius((d, i) => ((svgChart.index.start + i * svgChart.index.increase) / svgChart.sectorScale + svgChart.sectorWidth / svgChart.sectorScale) * svgChart.radius + svgChart.radScale)
      .startAngle(Math.PI)
      .endAngle(d => Math.PI + (d.value / size) * 2 * Math.PI);

    const path = bars.selectAll('path').data(data);

    path
      .enter()
      .append('svg:path')
      .attr('fill', (d, i) => svgChart.barColors[i])
      .attr('stroke', svgChart.borderColor)
      .transition()
      .ease(d3.easeElastic)
      .duration(2000)
      .delay((d, i) => i * 75)
      .attrTween('d', arcTween);

    rating
      .selectAll('tspan')
      .data(data)
      .enter()
      .append('tspan')
      .attr('x', -50)
      .attr('y', (d, i) => i * 20)
      .html(d => {
        if (d.value === 100) return language === 'en' ? 'Ninja' : 'خبير';
        if (d.value >= 95) return language === 'en' ? 'Expert' : 'محترف';
        if (d.value >= 80) return language === 'en' ? 'Pro' : 'متقدم';
        if (d.value >= 65) return language === 'en' ? 'Good' : 'جيد';
        if (d.value >= 50) return language === 'en' ? 'OK' : 'مقبول';
        if (d.value >= 35) return language === 'en' ? 'Fair' : 'متوسط';
        if (d.value >= 10) return language === 'en' ? 'Basic' : 'مبتدئ';
        return '';
      });

    label
      .selectAll('tspan')
      .data(data)
      .enter()
      .append('tspan')
      .attr('x', -50)
      .attr('y', (d, i) => i * 20)
      .html(d => d.label);

    function arcTween(b, j) {
      const i = d3.interpolate({ value: 0 }, b);
      return function (t) {
        return arc(i(t), j);
      };
    }
  };

  const show = id => {
    const existingElement = document.getElementById(id);
    if (existingElement) {
      existingElement.outerHTML = '';
    }

    svgCreate(id, 'skills');
    setTimeout(() => {
      drawBarCircleChart(id);
    }, 10);
  };

  const svgCreate = (id, targetElm) => {
    const div = document.createElement('DIV');
    div.id = id;
    div.className = 'inline-block mx-auto mb-12';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${svgChart.width} ${svgChart.height}`);
    svg.setAttribute('width', `${svgChart.width}px`);
    svg.setAttribute('height', `${svgChart.height}px`);
    svg.setAttribute('class', svgChart.class);

    svgChart.elements.forEach(elm => {
      svg.appendChild(svgCreateElement(svg.namespaceURI, elm.type, elm.class, elm.transform, elm.style));
    });

    div.appendChild(svg);

    if (!targetElm) {
      return document.body.appendChild(div);
    }
    return document.getElementById(targetElm).appendChild(div);
  };

  const svgCreateElement = (svgNS, elmType, elmClass, elmTransform, elmStyle) => {
    const elm = document.createElementNS(svgNS, elmType);
    elm.setAttribute('class', elmClass);

    if (elmClass === 'title') {
      elm.setAttribute('text-anchor', 'middle');
    }

    if (elmTransform?.translate) {
      elm.setAttribute('transform', `translate(${elmTransform.translate.x}, ${elmTransform.translate.y})`);
    }

    if (elmStyle) {
      elm.setAttribute('style', elmStyle);
    }

    return elm;
  };

  const showAll = () => {
    show('front-end');
    show('back-end');
    show('database');
    show('other');
  };

  if (!t.header) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-[#111111] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Head>
        <title>{t.hero.title} | Portfolio</title>
        <meta name='description' content='Professional portfolio website' />
        <link rel='icon' href='/favicon.ico' />
        <style>{`
          body {
            cursor: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='8' fill='${darkMode ? '%23ffffff' : '%23000000'}' fill-opacity='0.5'/%3E%3C/svg%3E"), auto;
          }
          .custom-cursor {
            cursor: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='8' fill='${darkMode ? '%23ffffff' : '%23000000'}' fill-opacity='0.8'/%3E%3C/svg%3E"), auto;
          }
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          .typing-animation {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 3.5s steps(40, end);
          }
        `}</style>
      </Head>

      {/* Header */}
      <header className='sticky top-0 z-50 bg-white/80 dark:bg-[#1e1e1f]/80 backdrop-blur-md shadow-sm'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <a href='#home' className='text-xl font-bold dark:text-white'>
            {language === 'en' ? 'Portfolio' : 'معرض الأعمال'}
          </a>

          <nav className='hidden md:flex items-center space-x-8'>
            {Object.entries(t.header).map(([key, value]) => (
              <a 
                key={key} 
                href={`#${key}`} 
                className={`transition-colors ${activeSection === key ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
              >
                {value}
              </a>
            ))}
          </nav>

          <div className='flex items-center space-x-4'>
            <button 
              onClick={toggleLanguage} 
              className='px-3 py-1 rounded-md bg-gray-200 dark:bg-[#272728] text-sm'
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            <button 
              onClick={toggleDarkMode} 
              className='p-2 rounded-full bg-gray-200 dark:bg-[#272728]'
            >
              {darkMode ? (
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clipRule='evenodd' />
                </svg>
              ) : (
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id='home' className='py-20 px-4 dark:bg-[#111111] bg-gray-100'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
          <div className={`md:w-1/2 mb-12 md:mb-0 ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
              <span className='typing-animation'>{t.hero.title}</span>
              <span ref={nameRef} className='text-blue-600 dark:text-blue-400'></span>
            </h1>
            <h2 className='text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6'>
              {t.hero.subtitle}
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg'>
              {t.hero.description}
            </p>
            <div className='flex flex-wrap gap-4'>
              <a 
                href='#contact' 
                className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
              >
                {t.hero.cta}
              </a>
              <a 
                href='/resume.pdf' 
                download 
                className='px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-[#272728] transition-colors flex items-center gap-2'
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {t.hero.downloadCv}
              </a>
            </div>
            
            {/* Social Links */}
            <div className='flex gap-4 mt-8'>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-gray-200 dark:bg-[#272728] hover:bg-gray-300 dark:hover:bg-[#383839] transition-colors'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
                </svg>
              </a>
              <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-gray-200 dark:bg-[#272728] hover:bg-gray-300 dark:hover:bg-[#383839] transition-colors'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                </svg>
              </a>
              <a href='https://wa.me/201551495772' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-gray-200 dark:bg-[#272728] hover:bg-gray-300 dark:hover:bg-[#383839] transition-colors'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z'/>
                </svg>
              </a>
              <a href='mailto:shtya54@gmail.com' className='p-2 rounded-full bg-gray-200 dark:bg-[#272728] hover:bg-gray-300 dark:hover:bg-[#383839] transition-colors'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z'/>
                </svg>
              </a>
            </div>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <div className='relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'>
              <div className={`absolute inset-0 rounded-full bg-blue-500 opacity-10 animate-pulse ${language === 'ar' ? 'left-10' : 'right-10'}`}></div>
              <div className={`absolute inset-0 rounded-full bg-blue-500 opacity-5 animate-pulse ${language === 'ar' ? 'left-20' : 'right-20'}`}></div>
              <img 
                src='/developer.png' 
                alt='Developer' 
                className='relative z-10 w-full h-full object-contain' 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-16 px-4 dark:bg-[#1e1e1f] bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>{t.services.title}</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {services.map((service, index) => (
              <div 
                key={index} 
                className='p-6 rounded-xl bg-white dark:bg-[#272728] shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-[#383839]'
              >
                <div className='w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30'>
                  <img src={service.icon} alt={service.title} className='w-8 h-8' />
                </div>
                <h3 className='text-xl font-semibold text-center mb-3'>{service.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 text-center'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-16 px-4 dark:bg-[#111111] bg-gray-100'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-4'>{t.projects.title}</h2>
          <p className='text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto'>
            {t.projects.description}
          </p>
          
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            <button 
              onClick={() => filterProjects('all')} 
              className={`px-4 py-2 rounded-full ${activeProjectFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-[#272728] text-gray-700 dark:text-gray-300'}`}
            >
              {t.projects.all}
            </button>
            <button 
              onClick={() => filterProjects('frontend')} 
              className={`px-4 py-2 rounded-full ${activeProjectFilter === 'frontend' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-[#272728] text-gray-700 dark:text-gray-300'}`}
            >
              {t.projects.frontend}
            </button>
            <button 
              onClick={() => filterProjects('backend')} 
              className={`px-4 py-2 rounded-full ${activeProjectFilter === 'backend' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-[#272728] text-gray-700 dark:text-gray-300'}`}
            >
              {t.projects.backend}
            </button>
            <button 
              onClick={() => filterProjects('shopify')} 
              className={`px-4 py-2 rounded-full ${activeProjectFilter === 'shopify' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-[#272728] text-gray-700 dark:text-gray-300'}`}
            >
              {t.projects.shopify}
            </button>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects
              .filter(project => activeProjectFilter === 'all' || project.type === activeProjectFilter)
              .map((project, index) => (
                <div 
                  key={index} 
                  className='bg-white dark:bg-[#272728] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-[#383839]'
                >
                  <div className='relative h-48 overflow-hidden'>
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                      <div className='flex gap-4'>
                        <a 
                          href={project.visit} 
                          target='_blank' 
                          rel='noopener noreferrer'
                          className='w-12 h-12 flex items-center justify-center bg-white/80 rounded-full hover:bg-white transition-colors duration-300'
                          title={t.projects.demo}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        {project.github && (
                          <a 
                            href={project.github} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='w-12 h-12 flex items-center justify-center bg-white/80 rounded-full hover:bg-white transition-colors duration-300'
                            title={t.projects.code}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                    <div className='flex flex-wrap gap-2 mt-4'>
                      <span className='px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'>
                        {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' ref={sectionRef} className='py-16 px-4 dark:bg-[#1e1e1f] bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>{t.skills.title}</h2>
          <div id='skills' ref={skillsRef} className='flex flex-wrap justify-center gap-8'></div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-16 px-4 dark:bg-[#111111] bg-gray-100'>
        <div className='container mx-auto flex flex-col lg:flex-row items-center gap-12'>
          <div className='lg:w-1/2 relative'>
            <div className='w-full max-w-md mx-auto'>
              <div className='relative z-10 rounded-xl overflow-hidden shadow-xl'>
                <img 
                  src='/developer-about.jpg' 
                  alt='Ahmed Abdelrhman' 
                  className='w-full h-auto'
                />
              </div>
              <div className='absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-blue-500 opacity-20 z-0'></div>
              <div className='absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-500 opacity-10 z-0'></div>
            </div>
          </div>
          <div className='lg:w-1/2'>
            <h2 className='text-3xl font-bold mb-6'>{t.about.title}</h2>
            <p className='text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed'>
              {t.about.content}
            </p>
            <div className='flex flex-wrap gap-4'>
              <a 
                href='#contact' 
                className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
              >
                {t.about.hire}
              </a>
              <a 
                href='/resume.pdf' 
                download 
                className='px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-[#272728] transition-colors flex items-center gap-2'
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {t.about.download}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id='testimonials' className='py-16 px-4 dark:bg-[#1e1e1f] bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>{t.testimonials.title}</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className='bg-white dark:bg-[#272728] p-6 rounded-xl shadow-md border border-gray-200 dark:border-[#383839] hover:shadow-lg transition-shadow duration-300 cursor-pointer'
                onClick={() => openTestimonialModal(index)}
              >
                <div className='flex items-center mb-4'>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className='w-12 h-12 rounded-full object-cover mr-4'
                  />
                  <div>
                    <h3 className='font-semibold'>{testimonial.name}</h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>{testimonial.date}</p>
                  </div>
                </div>
                <p className='text-gray-600 dark:text-gray-300 line-clamp-4'>
                  {testimonial.quote}
                </p>
                <button className='mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium'>
                  {language === 'en' ? 'Read more' : 'قراءة المزيد'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      {isModalOpen && activeTestimonial && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70'>
          <div className='relative bg-white dark:bg-[#272728] rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto'>
            <button 
              onClick={closeTestimonialModal}
              className='absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-[#383839] hover:bg-gray-200 dark:hover:bg-[#484849] transition-colors'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className='flex flex-col items-center text-center'>
              <img 
                src={activeTestimonial.avatar} 
                alt={activeTestimonial.name} 
                className='w-20 h-20 rounded-full object-cover mb-4'
              />
              <h3 className='text-xl font-semibold'>{activeTestimonial.name}</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>{activeTestimonial.date}</p>
              <p className='text-gray-600 dark:text-gray-300'>
                {activeTestimonial.quote}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id='contact' className='py-16 px-4 dark:bg-[#111111] bg-gray-100'>
        <div className='container mx-auto max-w-4xl'>
          <h2 className='text-3xl font-bold text-center mb-12'>{t.contact.title}</h2>
          
          <form className='bg-white dark:bg-[#272728] p-8 rounded-xl shadow-md border border-gray-200 dark:border-[#383839]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
              <div>
                <label htmlFor='name' className='block text-gray-700 dark:text-gray-300 mb-2'>
                  {t.contact.name}
                </label>
                <input 
                  type='text' 
                  id='name' 
                  className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-[#383839] dark:bg-[#1e1e1f] focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-gray-700 dark:text-gray-300 mb-2'>
                  {t.contact.email}
                </label>
                <input 
                  type='email' 
                  id='email' 
                  className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-[#383839] dark:bg-[#1e1e1f] focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>
            </div>
            <div className='mb-6'>
              <label htmlFor='message' className='block text-gray-700 dark:text-gray-300 mb-2'>
                {t.contact.message}
              </label>
              <textarea 
                id='message' 
                rows='5' 
                className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-[#383839] dark:bg-[#1e1e1f] focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              ></textarea>
            </div>
            <button 
              type='submit' 
              className='w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
            >
              {t.contact.submit}
            </button>
          </form>
          
          <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center'>
            <div className='bg-white dark:bg-[#272728] p-6 rounded-xl shadow-md border border-gray-200 dark:border-[#383839]'>
              <div className='w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className='font-medium mb-2'>Email</h3>
              <p className='text-gray-600 dark:text-gray-300'>shtya54@gmail.com</p>
            </div>
            <div className='bg-white dark:bg-[#272728] p-6 rounded-xl shadow-md border border-gray-200 dark:border-[#383839]'>
              <div className='w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className='font-medium mb-2'>Phone</h3>
              <p className='text-gray-600 dark:text-gray-300'>+201551495772</p>
            </div>
            <div className='bg-white dark:bg-[#272728] p-6 rounded-xl shadow-md border border-gray-200 dark:border-[#383839]'>
              <div className='w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className='font-medium mb-2'>Location</h3>
              <p className='text-gray-600 dark:text-gray-300'>North-Sinai, Egypt</p>
            </div>
            <div className='bg-white dark:bg-[#272728] p-6 rounded-xl shadow-md border border-gray-200 dark:border-[#383839]'>
              <div className='w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className='font-medium mb-2'>Availability</h3>
              <p className='text-gray-600 dark:text-gray-300'>Mon - Fri, 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 px-4 dark:bg-[#1e1e1f] bg-gray-800 text-white'>
        <div className='container mx-auto text-center'>
          <p>&copy; {new Date().getFullYear()} Ahmed Abdelrhman. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}</p>
          <div className='flex justify-center gap-4 mt-4'>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-400 transition-colors'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
              </svg>
            </a>
            <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-400 transition-colors'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
              </svg>
            </a>
            <a href='https://wa.me/201551495772' target='_blank' rel='noopener noreferrer' className='hover:text-blue-400 transition-colors'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z'/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;