import React from 'react';
import { Link } from 'react-router-dom';
import './Programs.css';

const programsData = [
  {
    title: 'Kids Program',
    path: '/kids-program',
    description: 'Confidence, discipline, and fun for children.',
    image: 'https://static.wixstatic.com/media/c5947c_ac4e41c0457d42fcbc4f4f070b3eb0b8~mv2.jpeg',
    alt: 'Kids class in session'
  },
  {
    title: 'Homeschool Jiu Jitsu',
    path: '/homeschool-program',
    description: 'Daytime classes for homeschool families.',
    image: 'https://placehold.co/280x180?text=Homeschool+BJJ',
    alt: 'Homeschool Jiu Jitsu class'
  },
  {
    title: 'Adult Jiu Jitsu',
    path: '/adult-program',
    description: 'For self-defense, fitness, and growth.',
    image: 'https://placehold.co/280x180?text=Adults+Rolling',
    alt: 'Adults rolling on mats'
  },
  {
    title: 'Fundamentals Program',
    path: '/fundamentals-program',
    description: 'Perfect for new students.',
    image: 'https://placehold.co/280x180?text=Fundamentals',
    alt: 'Fundamentals class'
  },
  {
    title: 'Competition Training',
    path: '/competition-training',
    description: 'For athletes who want to test themselves on the mat.',
    image: 'https://placehold.co/280x180?text=Competition+Highlight',
    alt: 'Competition highlight photo'
  },
  {
    title: 'Private Lessons',
    path: '/private-lessons',
    description: 'One-on-one coaching for faster progress.',
    image: 'https://placehold.co/280x180?text=Private+Lesson',
    alt: 'Private BJJ lesson'
  }
];

const Programs = () => {
  return (
    <section id="programs" className="programs-section">
      <h2 className="section-title">Our Programs</h2>
      <div className="programs-grid">
        {programsData.map((program, index) => (
          <Link to={program.path} key={index} className="program-card">
            <div className="program-image-wrapper">
              <img src={program.image} alt={program.alt} />
            </div>
            <div className="program-content">
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Programs;