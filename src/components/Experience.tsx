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

const experiences: Experience[] = [
  {
    title: "Web Developer",
    company: "More Ideas General Trading LLC – BYJU'S",
    location: "Dubai, UAE",
    period: "JULY 2022 – PRESENT",
    highlights: [
      "Developed robust and scalable web applications using Laravel, Laravel Inertia, React, and Tailwind CSS",
      "Managed over 500,000+ customer records using multiple CRM API integrations",
      "Integrated and maintained payment gateways processing AED 40K–50K daily",
      "Deployed applications via AWS, WHM, cPanel, GitHub Actions, and CI/CD pipelines",
      "Designed reusable backend architecture to improve scalability and maintainability",
      "Created the Shopify store for BYJU'S Middle East, with custom integration using Shopify API",
      "Independently handled full project lifecycle: architecture, development, deployment, and maintenance"
    ]
  },
  {
    title: "PHP Web Developer",
    company: "HMMBiz Web Solutions",
    location: "Ahmedabad, India",
    period: "APRIL 2018 – JUNE 2022",
    highlights: [
      "Led a development team delivering full-stack web solutions using PHP, Laravel, CodeIgniter, and JavaScript",
      "Built database-driven web applications and developed dynamic frontend interfaces with Bootstrap and jQuery",
      "Designed and implemented scalable APIs and integrated multiple third-party CRMs and payment gateways",
      "Conducted performance reviews, task allocation, and mentoring of junior developers",
      "Collaborated with UI/UX designers and QA teams to deliver responsive, bug-free experiences",
      "Optimized server-side logic, resolved performance bottlenecks, and implemented reusable modules"
    ]
  },
  {
    title: "PHP Developer Intern",
    company: "HMMBiz Web Solutions",
    location: "Ahmedabad, India",
    period: "JANUARY 2018 – MARCH 2018",
    highlights: [
      "Created and maintained the visual aspects of websites, including layout, design, and interactivity",
      "Ensured websites and applications work seamlessly across various devices and screen sizes",
      "Designed and developed custom WordPress themes based on client requirements",
      "Customized existing themes to match specific design needs and branding guidelines"
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="p-8">
        {/* Header with gradient border */}
        <div className="border-b border-gray-100 pb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{experience.title}</h3>
              <p className="text-lg font-semibold text-blue-600 mt-1">
                {experience.company}
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium">
                {experience.period}
              </span>
              <p className="text-gray-600 mt-2">{experience.location}</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <ul className="mt-6 space-y-4">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start space-x-3 group">
              <span className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 flex-shrink-0 group-hover:bg-blue-700 transition-colors"></span>
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Professional Journey
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Over 7 years of experience in building scalable web applications and leading development teams
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
