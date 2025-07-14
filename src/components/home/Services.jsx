import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaShoppingCart, FaSearch, FaLayerGroup } from 'react-icons/fa';
import Title from './Title';
 
const servicesData = [
  {
    en: {
      title: 'Front-end Development',
      description: 'Building responsive and interactive user interfaces with modern frameworks.',
      items: ['Next.js', 'React.js', 'JavaScript', 'Blade', 'Bootstrap', 'TypeScript', 'Tailwind CSS'],
    },
    ar: {
      title: 'تطوير الواجهات الأمامية',
      description: 'بناء واجهات مستخدم تفاعلية وتكيفية باستخدام أحدث الأطر العملية.',
      items: ['Next.js', 'React.js', 'JavaScript', 'Blade', 'Bootstrap', 'TypeScript', 'Tailwind CSS'],
    },
    icon: <FaCode />,
    color: 'blue',
    emoji: '💻',
  },
  {
    en: {
      title: 'Back-end Development',
      description: 'Developing robust server-side applications and APIs with scalable architecture.',
      items: ['Node.js', 'Express.js', 'Nest.js', 'PHP', 'Laravel'],
    },
    ar: {
      title: 'تطوير الواجهات الخلفية',
      description: 'تطوير تطبيقات وواجهات برمجة قوية وقابلة للتوسع للخادم.',
      items: ['Node.js', 'Express.js', 'Nest.js', 'PHP', 'Laravel'],
    },
    icon: <FaServer />,
    color: 'purple',
    emoji: '⚙️',
  },
  {
    en: {
      title: 'SEO Optimization',
      description: 'Optimizing websites for search engines and improving visibility through technical and content strategies.',
      items: ['SEMrush', 'Screaming Frog', 'Content Writing', 'Search Console', 'Keyword Research'],
    },
    ar: {
      title: 'تحسين محركات البحث',
      description: 'تحسين المواقع لمحركات البحث وزيادة الظهور عبر استراتيجيات تقنية ومحتوية.',
      items: ['SEMrush', 'Screaming Frog', 'كتابة المحتوى', 'Search Console', 'بحث الكلمات المفتاحية'],
    },
    icon: <FaSearch />,
    color: 'teal',
    emoji: '🔍',
  },
  {
    en: {
      title: 'Database Management',
      description: 'Designing and managing efficient database systems for optimal performance.',
      items: ['MySQL', 'MongoDB', 'Firebase', 'PostgreSQL', 'Redis'],
    },
    ar: {
      title: 'إدارة قواعد البيانات',
      description: 'تصميم وإدارة أنظمة قواعد بيانات فعالة لأفضل أداء.',
      items: ['MySQL', 'MongoDB', 'Firebase', 'PostgreSQL', 'Redis'],
    },
    icon: <FaDatabase />,
    color: 'green',
    emoji: '🗃️',
  },
  {
    en: {
      title: 'E-commerce Solutions',
      description: 'Developing custom Shopify and WooCommerce solutions for online businesses.',
      items: ['Shopify', 'WooCommerce', 'Payment Gateways', 'Cart Systems'],
    },
    ar: {
      title: 'حلول التجارة الإلكترونية',
      description: 'تطوير حلول مخصصة لـ Shopify و WooCommerce للمتاجر الإلكترونية.',
      items: ['Shopify', 'WooCommerce', 'بوابات الدفع', 'أنظمة السلة'],
    },
    icon: <FaShoppingCart />,
    color: 'orange',
    emoji: '🛒',
  },
  {
    en: {
      title: 'Other Services',
      description: 'Additional platforms and services I specialize in.',
      items: ['WordPress', 'Landing Pages', 'CMS Development', 'Web Hosting'],
    },
    ar: {
      title: 'خدمات أخرى',
      description: 'منصات وخدمات إضافية أتمتع بالخبرة فيها.',
      items: ['WordPress', 'صفحات الهبوط', 'تطوير أنظمة إدارة المحتوى', 'استضافة الويب'],
    },
    icon: <FaLayerGroup />,
    color: 'indigo',
    emoji: '✨',
  },
];
const ServicesSection = ({ darkMode, t , lang }) => {
  // Icon drop animation variants
  const iconDrop = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: {
      y: [0, -15, 0], // Bounce effect
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Card animation variants
  const cardAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  // Background wave effect
  const waveEffect = {
    initial: { scale: 0.8, opacity: 0 },
    hover: {
      scale: 1.2,
      opacity: darkMode ? 0.2 : 0.1,
      transition: { duration: 0.5 },
    },
  };

 
  return (
    <section id='services' className='py-16 bg-one transition-colors duration-300'>
      <div className='container mx-auto px-4'>
				<Title title={t.services.title} />
 

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial='initial'
              animate='animate'
              whileHover='hover'
              variants={cardAnimation}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`
                p-6 rounded-xl 
                dark:bg-gray-800 bg-white 
                shadow-md hover:shadow-lg 
                transition-all duration-300 
                border dark:border-gray-700 border-gray-200
                group overflow-hidden relative
              `}>
              {/* Animated background wave */}
              <motion.div
                variants={waveEffect}
                className={`
    absolute inset-0 
    bg-gradient-to-r 
    ${service.color === 'blue' ? 'from-blue-500 to-purple-600' : ''}
    ${service.color === 'purple' ? 'from-purple-500 to-indigo-600' : ''}
    ${service.color === 'green' ? 'from-green-500 to-teal-600' : ''}
    ${service.color === 'orange' ? 'from-orange-500 to-pink-600' : ''}
    ${service.color === 'teal' ? 'from-teal-500 to-cyan-600' : ''}
    ${service.color === 'indigo' ? 'from-indigo-500 to-violet-600' : ''}
    opacity-0 
    dark:group-hover:opacity-20 group-hover:opacity-10
    transition-opacity duration-500
  `}
              />

              {/* Service Icon with drop animation */}
              <motion.div
                variants={iconDrop}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`
    text-4xl mb-4 
    ${service.color === 'blue' ? 'dark:text-blue-400 text-blue-600' : ''}
    ${service.color === 'purple' ? 'dark:text-purple-400 text-purple-600' : ''}
    ${service.color === 'green' ? 'dark:text-green-400 text-green-600' : ''}
    ${service.color === 'orange' ? 'dark:text-orange-400 text-orange-600' : ''}
    ${service.color === 'teal' ? 'dark:text-teal-400 text-teal-600' : ''}
    ${service.color === 'indigo' ? 'dark:text-indigo-400 text-indigo-600' : ''}
  `}>
                {service.icon}
              </motion.div>

              {/* Service Title */}
              <motion.h3
                className='text-xl font-semibold mb-2 dark:text-white text-gray-800'
                whileHover={{
                  color: service.color === 'blue' ? '#3B82F6' : service.color === 'purple' ? '#8B5CF6' : service.color === 'green' ? '#10B981' : '#F97316',
                }}
                transition={{ duration: 0.3 }}>
                {service?.[lang]?.title}
              </motion.h3>

              {/* Service Description */}
              <motion.p className='text-gray-600 dark:text-gray-300 mb-4' whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                {service?.[lang]?.description}
              </motion.p>

              {/* Skills Tags */}
              <motion.div className='flex flex-wrap gap-2' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                {service?.[lang].items.map((item, itemIndex) => (
                  <motion.span
                    className={`
                      px-3 py-1 rounded-full text-sm 
                      dark:bg-gray-700 bg-gray-100 
                      dark:text-gray-300 text-gray-700 
                      cursor-default
                    `}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: service.color === 'blue' ? '#3B82F6' : service.color === 'purple' ? '#8B5CF6' : service.color === 'green' ? '#10B981' : '#F97316',
                      color: '#FFFFFF',
                    }}>
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
