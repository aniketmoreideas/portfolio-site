'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Professional Overview
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-6"></div>
                <Image
                  src="/images/profile.jpg"
                  alt="Aniket Sharma"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-xl object-cover"
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Hi, I'm Aniket Sharma
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A results-driven Web Developer with 7 years of experience in full-stack development. 
                  I specialize in delivering scalable, secure, and high-performance web applications 
                  using modern technologies like PHP, Laravel, React, and more.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Throughout my career, I've managed large-scale systems handling over 500K+ customer 
                  records and daily payment transactions of AED 40K–50K. I'm experienced in CRM 
                  integrations and various payment systems.
                </p>
              </div>

              {/* Key Info */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Dubai, UAE</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Experience</h4>
                  <p className="text-gray-600">7+ Years</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">ank8525@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+971 528384100</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/cv/Aniket-Web-Developer-CV-v1.pdf"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-shadow"
                  target="_blank"
                >
                  Download CV
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/aniketsharma4u"
                  className="inline-flex items-center px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors"
                  target="_blank"
                >
                  LinkedIn Profile
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
