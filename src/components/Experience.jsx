import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experiences = [
  {
    period: 'January 2024 - June 2024',
    company: 'Consultant Saputra',
    position: 'Web Development | SEO',
    description: 'Creating a landing page website for SP Consultant company. Manage website SEO to get better ranking from search result page Wordpress',
    links: {
      site: 'https://spkonsultan.com/',
    },
  },
  {
    period: 'September 2023 - December 2023',
    company: 'PT IBP Consultant',
    position: 'Full Stack Developer',
    description: 'Design, develop GPS attendance application, and implement web-based software to improve operational efficiency using PHP framework Laravel',
    links: {
      site: 'https://ibpkonsultan.com/',
    },
  },
  {
    period: 'December 2022 - June 2023',
    company: 'PT Sahaware Teknologi (Intern)',
    position: 'Full Stack Developer',
    description: 'Designing, developing, and implementing HRIS Human Resource Information System applications in the Performances module for HRD needs using PHP Framework (Codeigniter).',
    links: {
      site: 'https://sahaware.co.id/id/',
    },
  },
];

const Experience = () => {
  return (
    <section className='p-8 max-w-[600px] mx-auto' id='experience'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
      <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className='border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
            >
              <p className='text-gray-300'>{experience.period}</p>
              <h2 className='text-gray-100 text-2xl'>{experience.company}</h2>
              <p className='text-gray-300 text-2xl font-semibold'>{experience.position}</p>
              <p className='text-gray-400 mt-4'>{experience.description}</p>
              <a
                href={experience.links.site}
                className='px-4 py-2 mt-6 text-center bg-purple-600 text-gray-200 rounded-lg hover:bg-purple-700 transition duration-300 block'
                target="_blank"
                rel="noopener noreferrer"
              >
                View Site
              </a>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
