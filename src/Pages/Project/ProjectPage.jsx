import React, { useRef } from 'react'
import './Project.css'

const ProjectPage = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const projects = [
    {
      title: 'Netflix Clone',
      tech: 'ReactJS',
      desc: 'Built a Netflix-like UI with ReactJS featuring dynamic content display.',
      img: '/Images/Project/Netflix.png',
      link: 'https://project-netflix-copy.web.app/',
      code: 'https://github.com/G-Kesavan/Netflix-clone',
    },
    {
      title: 'Portfolio (ReactJS)',
      tech: 'ReactJS',
      desc: 'Created a responsive personal portfolio with project showcase.',
      img: '/Images/Project/Portfolio.png',
      link: 'https://mr-kesavan.web.app',
      code: 'https://github.com/G-Kesavan/Portfolio',
    },
    {
      title: 'To-Do List',
      tech: 'ReactJS',
      desc: 'Developed a to-do list app with add, delete, and status toggle functions.',
      img: '/Images/Project/Notes.png',
      link: 'https://your-todo-list-link.com',
      code: 'https://github.com/G-Kesavan/React-handle',
    },
    {
      title: 'Shopping Landing Page',
      tech: 'HTML, CSS',
      desc: 'Designed a static shopping page layout with modern responsive design.',
      img: '/Images/Project/empty.png',
      link: 'https://your-shopping-page-link.com',
      code: 'https://github.com/G-Kesavan/CODSOFT/tree/main/CODSOFT_Landing%20page',
    },
    {
      title: 'Portfolio (HTML & CSS)',
      tech: 'HTML, CSS',
      desc: 'Built a simple personal portfolio using pure HTML and CSS.',
      img: '/Images/Project/PortfolioDOM.png',
      link: 'https://portfolio-dom.web.app/',
      code: 'https://github.com/G-Kesavan/CODSOFT/tree/main/CODSOFT_Portfolio',
    },
    {
      title: 'Calculator',
      tech: 'HTML, CSS, JavaScript',
      desc: 'Built a functional calculator with basic operations using JavaScript.',
      img: '/Images/Project/empty.png',
      link: 'https://your-calculator-link.com',
      code: 'https://github.com/G-Kesavan/CODSOFT/tree/main/CODSOFT_Calculator',
    },
  ];

  return (
    <section className='ProjectPage'>
      <div className='glass-box'>
        <button className='scroll-btn scroll-left' onClick={() => scroll('left')}>&lt;</button>
        <div className='project-list' ref={scrollRef}>
          {projects.map((project, index) => (
            <div className='project-item' key={index}>
              <img src={project.img} alt={project.title} className='project-img' />
              <div className='project-content'>
                <h3>{project.title}</h3>
                <label>Tech Used :</label><p className='tech'>&nbsp;{project.tech}</p>
                <p className='detial'>{project.desc}</p>
                <a href={project.link} target='_blank' rel='noreferrer' className='project-link'>🔗 Project : View</a>
                <a href={project.code} target='_blank' rel='noreferrer' className='project-link'>&nbsp;Code</a>
              </div>
            </div>
          ))}
        </div>
        <button className='scroll-btn scroll-right' onClick={() => scroll('right')}>&gt;</button>
      </div>
    </section>
  );
};

export default ProjectPage;
