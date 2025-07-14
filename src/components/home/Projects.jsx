import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTh, FaNode } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaWordpress, FaReact, FaNodeJs, FaShopify, FaLaravel, FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiLaravel, SiShopify, SiNestjs } from 'react-icons/si';
// Import your images (you'll need to adjust these paths based on your setup)
import Img1 from '@/assets/image-project/ecommerce.jpeg';
import Img2 from '@/assets/image-project/facebook.jpeg';
import Img3 from '@/assets/image-project/todo.jpeg';
import Img4 from '@/assets/image-project/blog.jpeg';
import Img5 from '@/assets/image-project/movies.jpeg';
import Img6 from '@/assets/image-project/port1.jpeg';
import Img7 from '@/assets/image-project/dev.jpeg';
import Img8 from '@/assets/project/Metaverse.png';
import Img9 from '@/assets/project/Gym.png';
import Img10 from '@/assets/project/Store.png';
import Img11 from '@/assets/image-project/special.jpeg';
import Img12 from '@/assets/image-project/twitter.jpeg';
import Img13 from '@/assets/image-project/kasper.jpeg';
import Img15 from '@/assets/image-project/dashboard.jpeg';
import Img16 from '@/assets/image-project/leon.jpeg';
import Img01 from '@/assets/image-project/1barakah.jpeg';
import Img02 from '@/assets/image-project/2blog.jpeg';
import Img03 from '@/assets/image-project/3landing.jpeg';
import Img04 from '@/assets/image-project/3photo.jpeg';
import Img05 from '@/assets/image-project/0mrm.jpeg';
import Img06 from '@/assets/image-project/4pet.jpeg';
import Img07 from '@/assets/image-project/5shopzid.jpeg';
import Img08 from '@/assets/image-project/6real.jpeg';
import Img09 from '@/assets/image-project/ec.jpeg';
import Title from './Title';

import Img001 from '@/assets/projects/m5zoon-task.png';
import Img002 from '@/assets/projects/venuat.png';
import Img003 from '@/assets/projects/washak.png';
import Img004 from '@/assets/projects/m5zoon.png';
import Img005 from '@/assets/projects/m5zoon-dashbard.png';
import Img006 from '@/assets/projects/fraktfinder.png';
import Img007 from '@/assets/projects/barakah.png';
import Img008 from '@/assets/projects/soomha.png';
import Img009 from '@/assets/projects/joe_brain.png';
/**
 * brand hub
 * ecom station 
 * call track
 * 
 * EDMS
 * joe brain




  */
const projects = [
  { img: Img001, type: 'next', title: 'Sponsored Ad', visit: 'https://landing-22.vercel.app' },
  { img: Img002, type: 'next nest', title: 'Venuat', visit: 'https://venuat-frontend.vercel.app' },
  { img: Img003, type: 'next', title: 'Washak Store', visit: 'https://washak.vercel.app' },
  { img: Img004, type: 'next', title: 'm5zoon', visit: 'https://m5zoon.com/' },
  { img: Img005, type: 'next', title: 'm5zoon dashboard', visit: 'https://m5zoon-merchant-react.vercel.app' },
  { img: Img006, type: 'next', title: 'FraktFinder', visit: 'https://www.fraktfinder.se/en' },
  { img: Img007, type: 'next nest', title: 'Barakah management', visit: 'https://barakah.vercel.app/en' },
  { img: Img008, type: 'next', title: 'Soomha', visit: 'https://soomha.net/en' },
  { img: Img009, type: 'next nest', title: 'Joe Brain', visit: 'https://joebrain.codelooms.dev/en/thread' },

  { type: 'wordpress', img: Img01, title: 'Barakah', visit: 'https://barakah-ivory.vercel.app/' },
  { type: 'wordpress', img: Img02, title: 'web blog', visit: 'https://blogs-ruby-five.vercel.app/' },
  { type: 'next', img: Img03, title: 'Albarsha Alomshriqa', visit: 'https://landing0.vercel.app/' },
  { type: 'next', img: Img04, title: 'photography services', visit: 'https://n-mrm.vercel.app/' },
  { type: 'laravel', img: Img05, title: 'mrm advertising', visit: 'https://mrmadvertisingdubai.com/' },
  { type: 'shopify', img: Img06, title: 'pets store', visit: 'https://www.thepetslot.com/' },
  { type: 'shopify', img: Img07, title: 'shopzid store', visit: 'https://www.shopzid.com/' },
  { type: 'next', img: Img08, title: 'lime brook', visit: 'https://real-estate0.vercel.app/' },
  { type: 'ReactJS', img: Img09, title: 'Ecwid', visit: 'https://ecwid-lemon.vercel.app/' },
  { type: 'Node ReactJS', img: Img2, title: 'Facebook', visit: 'https://facebook-client-ecpsxf3ve-shtya.vercel.app/' },
  { type: 'Node next', img: Img3, title: 'ToDoList', visit: 'https://todo-client-eqwp.vercel.app/' },
  { type: 'Node next', img: Img4, title: 'Blog', visit: 'https://blog-client-npfusj49f-shtya.vercel.app/' },
  { type: 'next', img: Img5, title: 'Movie', visit: 'https://movies-swart-iota.vercel.app/' },
  { type: 'ReactJS', img: Img6, title: 'Portfolio', visit: 'https://afa341e2.portfolio-2-3qb.pages.dev/' },
  { type: 'javaScript', img: Img7, title: 'Dev Design Template', visit: 'https://shtya.github.io/Dev/' },
  { type: 'ReactJS', img: Img8, title: 'Metaverse Template', visit: 'https://metaversuslite.netlify.app/' },
  { type: 'ReactJS', img: Img9, title: 'Gym Template', visit: 'https://gym-etg.pages.dev/' },
  { type: 'ReactJS', img: Img10, title: 'Hamad store Template', visit: 'https://test-next-36e5.vercel.app/' },
  { type: 'javaScript', img: Img11, title: 'Special Design Template', visit: 'https://shtya.github.io/Special_Design/' },
  { type: 'javaScript', img: Img12, title: 'Twitter Template', visit: 'https://shtya.github.io/Clone-Twitter/' },
  { type: 'javaScript', img: Img13, title: 'Kasper Template', visit: 'https://shtya.github.io/Kasper/' },
  { type: 'javaScript', img: Img15, title: 'Dashboard Template', visit: 'https://shtya.github.io/Dashboard/' },
  { type: 'javaScript', img: Img16, title: 'Leon Template', visit: 'https://shtya.github.io/Project-Leon/' },
];

// Extract unique categories from project types
const allCategories = projects.flatMap(project => project.type.split(' ').filter(cat => cat !== 'all'));
const uniqueCategories = [...new Set(allCategories)];

// Updated getCategoryLabel function with icons
function getCategoryLabel(category, lang) {
  const labels = {
    wordpress: {
      en: 'WordPress',
      ar: 'ووردبريس',
      icon: <FaWordpress />,
    },
    next: {
      en: 'NextJS',
      ar: 'نيكست',
      icon: <SiNextdotjs />,
    },
    nest: {
      en: 'NestJS',
      ar: ' نيست',
      icon: <SiNestjs />,
    },
    laravel: {
      en: 'Laravel',
      ar: 'لارافيل',
      icon: <SiLaravel />,
    },
    shopify: {
      en: 'Shopify',
      ar: 'شوبيفاي',
      icon: <SiShopify />,
    },
    reactjs: {
      en: 'ReactJS',
      ar: 'رياكت',
      icon: <FaReact />,
    },
    javascript: {
      en: 'JavaScript',
      ar: 'جافاسكريبت',
      icon: <SiJavascript />,
    },
    node: {
      en: 'NodeJS',
      ar: 'نود',
      icon: <FaNode />,
    },
    // Add more categories as needed
  };

  const categoryData = labels[category.toLowerCase()] || {
    en: category.charAt(0).toUpperCase() + category.slice(1),
    ar: category.charAt(0).toUpperCase() + category.slice(1),
    icon: null,
  };

  return (
    <>
      {categoryData.icon}
      {lang === 'ar' ? categoryData.ar : categoryData.en}
    </>
  );
}
const PROJECTS_PER_PAGE = 8;

export default function Projects({ t, lang }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    // Initialize AOS when component mounts
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    }
  }, []);
  const handleFilterClick = filter => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.type.toLowerCase().split(' ').includes(activeFilter.toLowerCase()));

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * PROJECTS_PER_PAGE, currentPage * PROJECTS_PER_PAGE);

  const handlePageChange = page => {
    setCurrentPage(page);
    const section = document.querySelector('#projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    async function get() {
      try {
        const response = await fetch('https://api.github.com/users/Shtya/repos');

        if (!response.ok) {
          console.error('Failed to fetch repos. Status:', response.status);
          return;
        }

        const repos = await response.json();

        const projects = repos.map(repo => ({
          type: repo.language || 'Unknown',
          img: '',
          title: repo.name,
          view: '',
          repo_link: repo.html_url,
        }));

        console.log('projects:', projects);
        // يمكنك هنا وضع setState لحفظ المشاريع مثلاً
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    }

    get();
  }, []);

  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' />
      </Head>

      <section id='projects' className='!py-32 max-md:!py-12 px-4 bg-two text-white'>
        <div className='container mx-auto'>
          <div className='text-center mb-8'>
            <Title title={t.projects.title} subtitle={t.projects.description} />
          </div>

          <div className='flex flex-wrap justify-center gap-3 max-sm:gap-2 mb-12'>
            <button type='button' className={`flex items-center gap-2 max-sm:text-xs max-sm:px-3 px-5 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${activeFilter === 'all' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'}`} onClick={() => handleFilterClick('all')}>
              <FaTh />
              {t.projects.filters.all}
            </button>

            {uniqueCategories.map(category => (
              <button key={category} type='button' className={`flex items-center gap-2 max-sm:px-3 px-5 py-2 rounded-full max-sm:text-xs font-medium transition-all duration-300 transform hover:-translate-y-1 ${activeFilter === category.toLowerCase() ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'}`} onClick={() => handleFilterClick(category.toLowerCase())}>
                {getCategoryLabel(category, lang)}
              </button>
            ))}
          </div>

          {/* Project Cards with Framer Motion */}
          <ul dir='ltr' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' key={`${activeFilter}-${currentPage}`}>
            {paginatedProjects.map((project, index) => (
              <li key={index}  data-aos='zoom-in'  className=' border border-gray-100/30 relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
                <span className='absolute inset-0 bg-black/20 z-10 pointer-events-none' />

                {/* Image Section */}
                <div className='relative h-64 overflow-hidden flex items-center justify-center p-2 bg-two'>
                  <img src={project.img.src} alt={project.title} className='w-full h-full object-contain rounded-lg transition-transform duration-700 group-hover:scale-105' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                </div>

                {/* Card Content */}
                <div className='absolute inset-0 flex flex-col justify-end !pb-2 p-6'>
                  <div className='transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500'>
                    <h3 className='text-xl font-semibold text-white mb-3 drop-shadow-md'>{project.title}</h3>

                    {/* Tech Tags */}
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.type
                        .split(' ')
                        .filter(cat => cat !== 'all')
                        .map((tech, i) => (
                          <span key={i} className='flex items-center justify-center gap-1 text-xs px-3 py-1 rounded-full bg-black/40 text-white/90 border border-white/20 backdrop-blur-md shadow-sm'>
                            {getCategoryLabel(tech, lang)}
                          </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className='flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      {/* GitHub */}
                      {project.github && (
                        <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all backdrop-blur-md' title='GitHub Repo'>
                          <FaGithub />
                          <span className='text-sm font-medium'>Code</span>
                        </a>
                      )}

                      {/* Visit Site */}
                      <a href={project.visit} target='_blank' rel='noopener noreferrer' className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-blue-500 hover:from-fuchsia-700 hover:to-blue-600 rounded-lg text-white transition-all shadow-md' title='Live Preview'>
                        <FaExternalLinkAlt />
                        <span className='text-sm font-medium'>Visit</span>
                      </a>

                      {/* View Image */}
                      <a href={project.img.src} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center px-3 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all backdrop-blur-md' title='View Image'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-4.553a1.2 1.2 0 00-1.697-1.697L13 8.3m-1 6.4a5 5 0 100-10 5 5 0 000 10z' />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination */}
          {totalPages > 1 && (
            <div dir='ltr' className='flex justify-center mt-12'>
              <nav className='inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
                <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className='relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'>
                  {t.previous}
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button key={page} onClick={() => handlePageChange(page)} className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === page ? 'bg-purple-600 text-white border-purple-600' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
                    {page}
                  </button>
                ))}

                <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className='relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'>
                  {t.next}
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

[
  {
    type: 'JavaScript',
    img: '',
    title: 'Barakah',
    view: '',
    repo_link: 'https://github.com/Shtya/Barakah',
  },
  {
    type: 'JavaScript',
    img: '',
    title: 'blog-client',
    view: '',
    repo_link: 'https://github.com/Shtya/blog-client',
  },
  {
    type: 'CSS',
    img: '',
    title: 'blogs',
    view: '',
    repo_link: 'https://github.com/Shtya/blogs',
  },
  {
    type: 'HTML',
    img: '',
    title: 'Clone-Twitter',
    view: '',
    repo_link: 'https://github.com/Shtya/Clone-Twitter',
  },
  {
    type: 'HTML',
    img: '',
    title: 'Dashboard',
    view: '',
    repo_link: 'https://github.com/Shtya/Dashboard',
  },
  {
    type: 'SCSS',
    img: '',
    title: 'Dev',
    view: '',
    repo_link: 'https://github.com/Shtya/Dev',
  },
  {
    type: 'JavaScript',
    img: '',
    title: 'e-commerce-client',
    view: '',
    repo_link: 'https://github.com/Shtya/e-commerce-client',
  },
  {
    type: 'SCSS',
    img: '',
    title: 'Ecwid',
    view: '',
    repo_link: 'https://github.com/Shtya/Ecwid',
  },
  {
    type: 'JavaScript',
    img: '',
    title: 'facebook-client',
    view: '',
    repo_link: 'https://github.com/Shtya/facebook-client',
  },
  {
    type: 'SCSS',
    img: '',
    title: 'GYM',
    view: '',
    repo_link: 'https://github.com/Shtya/GYM',
  },
  {
    type: 'nextjs nestjs',
    img: '/projects/joe-13.png',
    title: 'JOE13 Company',
    view: 'https://joe13th.com/en',
    repo_link: 'https://github.com/Shtya/joe13-frontend',
  },
  {
    type: 'SCSS',
    img: '/projects/kasper.png',
    title: 'HTML',
    view: 'https://shtya.github.io/Kasper/',
    repo_link: 'https://github.com/Shtya/Kasper',
  },
  {
    type: 'JavaScript',
    img: '',
    title: 'landing',
    view: '',
    repo_link: 'https://github.com/Shtya/landing',
  },
  {
    type: 'reactjs nextjs',
    img: '',
    title: 'Movies',
    view: '',
    repo_link: 'https://github.com/Shtya/Movies',
  },
  {
    type: 'CSS',
    img: '',
    title: 'MRM',
    view: '',
    repo_link: 'https://github.com/Shtya/MRM',
  },
];
