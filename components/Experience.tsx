'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const experiences = [
  {
    title: "Web Developer",
    company: "More Ideas General Trading LLC – BYJU'S",
    location: "Dubai, UAE",
    period: "JULY 2022 – PRESENT",
    highlights: [
      "Developed robust web applications using Laravel, Laravel Inertia, React, and Tailwind CSS",
      "Managed 500,000+ customer records via multiple CRM API integrations",
      "Integrated payment gateways processing AED 40K–50K daily",
      "Created Shopify store for BYJU'S Middle East with custom integrations"
    ]
  },
  {
    title: "PHP Web Developer",
    company: "HMMBiz Web Solutions",
    location: "Ahmedabad, India",
    period: "APRIL 2018 – JUNE 2022",
    highlights: [
      "Led development team delivering full-stack web solutions",
      "Built database-driven applications with PHP, Laravel, and CodeIgniter",
      "Integrated multiple third-party CRMs and payment gateways",
      "Mentored junior developers and optimized server-side performance"
    ]
  }
];

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-12 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-blue-100 group-last:h-[50%]"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h3>
            <p className="text-blue-600 font-medium">{experience.company}</p>
          </div>
          <div className="mt-2 md:mt-0 text-right">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              {experience.period}
            </span>
            <p className="text-gray-500 mt-1">{experience.location}</p>
          </div>
        </div>
        
        <ul className="space-y-3">
          {experience.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Professional Experience
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
