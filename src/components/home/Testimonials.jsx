import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from './Title';

const testimonialsData = [
  {
    h1: 'Hamza',
    p: 'Ahmed Abdelrhman has helped my team and I stay on the same page. Previously, we were all over the board. Working with Ahmed Abdelrhman has definitely saved us time and money.',
    p_ar: 'ساعدني أحمد عبد الرحمن وفريقي على البقاء متفقين. كنا سابقًا غير منظمين. العمل مع أحمد عبد الرحمن وفر علينا الوقت والمال بالتأكيد.',
  },
  {
    h1: 'Eslam Abd Elazeem',
    p: 'Working with Ahmed Abdelrhman was a pleasure. Their expertise in both front-end and back-end development allowed us to create a seamless user experience for our project.',
    p_ar: 'كان العمل مع أحمد عبد الرحمن ممتعًا. خبرته في تطوير الواجهات الأمامية والخلفية مكنتنا من إنشاء تجربة مستخدم سلسة لمشروعنا.',
  },
  {
    h1: 'Mohamed Kamal',
    p: 'I had the pleasure of collaborating with Ahmed Abdelrhman on a complex web application. Their ability to quickly grasp new concepts and technologies made them indispensable.',
    p_ar: 'كان لي الشرف في التعاون مع أحمد عبد الرحمن على تطبيق ويب معقد. قدرته على فهم المفاهيم والتقنيات الجديدة بسرعة جعلته لا غنى عنه.',
  },
  {
    h1: 'Islam Abdel Radi',
    p: 'Ahmed Abdelrhman brought a wealth of knowledge to our project. Their dedication to delivering high-quality code was evident throughout our collaboration.',
    p_ar: 'أحضر أحمد عبد الرحمن ثروة من المعرفة لمشروعنا. كان تفانيه في تقديم كود عالي الجودة واضحًا طوال فترة تعاوننا.',
  },
  {
    h1: 'KAREEM EL3SAWY',
    p: "I've always been impressed by Ahmed Abdelrhman's technical skills and professionalism. Their ability to architect scalable solutions makes them an asset to any team.",
    p_ar: 'لطالما أعجبت بالمهارات التقنية والاحترافية لأحمد عبد الرحمن. قدرته على تصميم حلول قابلة للتطوير تجعله إضافة قيمة لأي فريق.',
  },
  {
    h1: 'Omar Fathy',
    p: 'I cannot recommend Ahmed Abdelrhman highly enough. Their expertise allowed us to overcome challenges and deliver a successful project on time.',
    p_ar: 'لا يمكنني التوصية بأحمد عبد الرحمن بما يكفي. خبرته مكنتنا من التغلب على التحديات وتسليم المشروع بنجاح في الوقت المحدد.',
  },
  {
    h1: 'Hamza Ali',
    p: 'Working with Ahmed was fantastic. Their deep understanding of web technologies made them invaluable to our team.',
    p_ar: 'كان العمل مع أحمد رائعًا. فهمه العميق لتقنيات الويب جعله لا يقدر بثمن لفريقنا.',
  },
  {
    h1: 'Islam Hamza',
    p: "Ahmed's technical proficiency delivered a high-quality product that exceeded our client's expectations.",
    p_ar: 'كفاءة أحمد التقنية أنتجت منتجًا عالي الجودة تجاوز توقعات عملائنا.',
  },
  {
    h1: 'Ahmed Mohamed',
    p: "Ahmed's clean code and problem-solving skills were crucial for our project's success.",
    p_ar: 'كان كود أحمد النظيف ومهاراته في حل المشكلات حاسمة لنجاح مشروعنا.',
  },
  {
    h1: 'Youssef Mahmoud',
    p: 'Exceptional developer with great attention to detail. Ahmed delivered beyond our expectations.',
    p_ar: 'مطور استثنائي مع اهتمام كبير بالتفاصيل. قدم أحمد ما يتجاوز توقعاتنا.',
  },
  {
    h1: 'Mahmoud Ali',
    p: "Ahmed's full-stack expertise helped us build a robust application with excellent performance.",
    p_ar: 'ساعدت خبرة أحمد كاملة في بناء تطبيق قوي بأداء ممتاز.',
  },
  {
    h1: 'Abdullah Ibrahim',
    p: 'Professional, reliable, and technically superb. Ahmed is a developer you can trust.',
    p_ar: 'محترف، موثوق وتقنيًا ممتاز. أحمد هو مطور يمكنك الوثوق به.',
  },
];

const Testimonials = ({ t, darkMode, lang }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const testimonialsPerPage = 6;

  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonialsData.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    const section = document.querySelector('#testimonials');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openTestimonialModal = index => {
    setSelectedTestimonial(currentTestimonials[index]);
  };

  const closeTestimonialModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <section id='testimonials' className={`py-16  bg-two `}>
      <div className='container mx-auto'>
        <Title subtitle={t.testimonials.subtitle} title={t.testimonials.title} />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={`${currentPage}-${index}`}
              className={` p-6 rounded-xl 
                dark:bg-gray-800 bg-white 
                shadow-md hover:shadow-lg 
                transition-all duration-500 
                border dark:border-gray-700 border-gray-200  hover:translate-y-[-10px] cursor-pointer transform   h-full flex flex-col`}
              onClick={() => openTestimonialModal(index)}>
              <div className='flex items-center gap-2 mb-4'>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center  text-xl font-bold ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>{testimonial.h1.charAt(0).toUpperCase()}</div>
                <div>
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{testimonial.h1}</h3>
                </div>
              </div>
              <p className={`flex-grow ${darkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2 mb-4`}>{lang === 'ar' ? testimonial.p_ar || testimonial.p : testimonial.p}</p>
              <button className={`mt-auto self-start rtl:rotate-180 font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-200`}>{t.testimonials.readMore} →</button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {/* Pagination */}
        {totalPages > 1 && (
          <div dir="ltr" className='flex justify-center mt-12'>
            <nav className='inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
              <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className={`relative inline-flex items-center px-4 py-2 rounded-l-md border text-sm font-medium ${darkMode ? 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'} disabled:opacity-50 disabled:cursor-not-allowed`}>
                {t.previous}
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button key={page} onClick={() => handlePageChange(page)} className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${darkMode ? 'border-gray-700' : 'border-gray-300'} ${currentPage === page ? (darkMode ? 'bg-purple-600 text-white' : 'bg-[#9333ea] text-white') : darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                  {page}
                </button>
              ))}

              <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className={`relative inline-flex items-center px-4 py-2 rounded-r-md border text-sm font-medium ${darkMode ? 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'} disabled:opacity-50 disabled:cursor-not-allowed`}>
                {t.next}
              </button>
            </nav>
          </div>
        )}

        {/* Testimonial Modal */}
        <AnimatePresence>
          {selectedTestimonial && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50' onClick={closeTestimonialModal}>
              <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }} className={`relative max-w-2xl w-full p-8 rounded-xl ${darkMode ? 'bg-[#272728]' : 'bg-white'}`} onClick={e => e.stopPropagation()}>
                <button onClick={closeTestimonialModal} className={`absolute top-4 right-4 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}>
                  ✕
                </button>

                <div className='flex items-center mb-6'>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 text-2xl font-bold ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>{selectedTestimonial.h1.charAt(0).toUpperCase()}</div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedTestimonial.h1}</h3>
                </div>

                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{lang === 'ar' ? selectedTestimonial.p_ar || selectedTestimonial.p : selectedTestimonial.p}</p>

                <button onClick={closeTestimonialModal} className={`px-6 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>
                  {t.close}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
