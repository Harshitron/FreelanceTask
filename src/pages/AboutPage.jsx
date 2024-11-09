import React, { useState } from 'react';
import Layout from '../components/Layout';

const OurValuesSection = () => {
  const [activeSection, setActiveSection] = useState('Vision');

  const sections = [
    {
      title: 'Vision',
      content: 'To be the leading international education service provider, creating a global network of empowered students and alumni. We envision a world where educational boundaries are dissolved, cultural understanding is deepened, and every student has the opportunity to access world-class education that aligns with their aspirations. Our vision extends beyond academics, aiming to foster global citizens who are prepared to tackle the challenges of tomorrow and contribute meaningfully to their communities and the world at large.'
    },
    {
      title: 'Mission',
      content: 'Our mission is to empower students with the knowledge, resources, and support they need to pursue international education opportunities and achieve their academic and career goals. We are committed to providing personalized guidance, leveraging our extensive network of educational institutions, and offering comprehensive support services. From initial counseling to post-graduation career advice, we strive to be a trusted partner throughout the students educational journey. Our mission also includes promoting cultural exchange, fostering global understanding, and preparing students for success in an increasingly interconnected world.'
    },
    {
      title: 'Principles',
      content: 'We are committed to upholding the highest standards of integrity, excellence, and innovation in all aspects of our educational services. Our principles include:\n\n1. Student-Centric Approach: Prioritizing the unique needs and aspirations of each student.\n2. Ethical Practices: Maintaining transparency and honesty in all our interactions and processes.\n3. Continuous Improvement: Constantly updating our knowledge and services to stay ahead in the evolving education landscape.\n4. Cultural Sensitivity: Respecting and celebrating diversity while promoting global citizenship.\n5. Quality Assurance: Partnering only with reputable institutions and providing accurate, up-to-date information.\n6. Holistic Support: Offering comprehensive assistance beyond academics, including personal development and cultural adaptation.\n7. Long-term Commitment: Supporting students not just during their studies, but throughout their career journey.'
    }
  ];

  return (
    <Layout>
      <div className="bg-white p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to GKSAS International Education Services!
            At GKSAS, we are dedicated to opening doors to global education opportunities. Specializing in study abroad programs in Russia, Romania, and Turkey, we aim to provide students with access to high-quality education and diverse cultural experiences.
            Our mission is to empower students by guiding them through every step of their educational journey. From selecting the right program and university to navigating the application process and securing scholarships, our experienced team is here to support you.
            We understand that studying abroad is a significant decision, and we strive to make the transition as seamless as possible. Our comprehensive services include personalized counseling, visa assistance, accommodation support, and ongoing guidance throughout your studies.
            Join us at GKSAS International Education Services and embark on an enriching journey that will shape your future. Discover the world, gain valuable skills, and create lasting memories—your adventure begins here!
          </p>
          <div>
          <h2 className="text-gray-600 text-center text-sm mb-4 mt-12">
            "THE FUTURE BELONGS TO THOSE WHO BELIEVE IN THE BEAUTY OF THEIR DREAMS."
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gray-300 flex-grow"></div>
            <h2 className="text-3xl font-bold px-4">OUR VALUES</h2>
            <div className="h-px bg-gray-300 flex-grow"></div>
          </div>
          
          <p className="text-center text-gray-600 mb-12">
            Find more about us and how we help you with making your dreams a reality.
          </p>
          
          <div className="relative mb-12">
            <div className="h-1 bg-gray-400 absolute w-full top-4"></div>
            <div className="flex justify-between relative">
              {sections.map((section, index) => (
                <button
                  key={section.title}
                  className={`z-10 w-8 h-8 rounded-full border-2 ${
                    activeSection === section.title
                      ? 'bg-red-500 border-red-500'
                      : 'bg-white border-gray-300'
                  }`}
                  onClick={() => setActiveSection(section.title)}
                >
                  <span className="sr-only">{section.title}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {sections.map((section) => (
                <span
                  key={section.title}
                  className={`text-sm font-medium ${
                    activeSection === section.title ? 'text-red-500' : 'text-gray-500'
                  }`}
                >
                  {section.title}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our {activeSection}</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {sections.find((s) => s.title === activeSection)?.content}
            </p>
          </div>
          
          <div className="flex justify-between">
            <button
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              onClick={() => {
                const currentIndex = sections.findIndex((s) => s.title === activeSection);
                const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
                setActiveSection(sections[prevIndex].title);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              onClick={() => {
                const currentIndex = sections.findIndex((s) => s.title === activeSection);
                const nextIndex = (currentIndex + 1) % sections.length;
                setActiveSection(sections[nextIndex].title);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          </div>
          

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-700">
              Our team consists of experienced education consultants, career advisors, and international student support
              specialists who are passionate about helping students succeed in their academic pursuits abroad. With diverse
              backgrounds and expertise in various fields, our team members bring a wealth of knowledge and personal experiences
              to guide students through their international education journey. We are committed to staying up-to-date with the
              latest trends in global education and continuously improving our services to meet the evolving needs of our students.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurValuesSection;