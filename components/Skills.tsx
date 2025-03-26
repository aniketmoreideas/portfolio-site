'use client';

import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "WordPress", "Tailwind CSS", "Bootstrap", "jQuery"]
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "Laravel Inertia", "CodeIgniter", "MySQL", "MongoDB", "REST APIs", "GraphQL"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "CI/CD", "WHM", "cPanel", "AWS (EC2, S3)"]
  },
  {
    title: "CRM & Payment",
    skills: ["Salesforce", "Freshdesk", "Pardot", "PayPal", "Stripe", "Razorpay", "Tabby", "Tamara"]
  },
  {
    title: "E-commerce",
    skills: ["Shopify", "WooCommerce", "Shopify API", "Shopify App Development"]
  }
];

const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
    >
      {/* Background decoration */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-6 relative">
        {category.title}
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mt-2 rounded-full"></div>
      </h3>
      
      <div className="flex flex-wrap gap-2 relative">
        {category.skills.map((skill, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
            className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-lg text-sm font-medium hover:from-blue-100 hover:to-blue-200 transition-colors duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Technical Expertise
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build modern web applications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
