import React from 'react';
import './About.css';
import Photo from '/Images/MyPhotos/About.png';

const About = () => {
  return (
    <section className='AboutPage'>
      <div className="about-img">
        <img src={Photo} alt="Profile" />
      </div>

      <ul className="about-details">
        <li className="about-item " id='a-d-f-c'>
          <h3>Name</h3>
          <p>Kesava Perumal G</p>
        </li>

        <li className="about-item">
          <h3>Qualification</h3>
          <p>BCA bachelor of Computer Application</p>
        </li>

        <li className="about-item">
          <h3>Finishing Batch Year</h3>
          <p>2021 - 2024</p>
        </li>

        <li className="about-item">
          <h3>Interests</h3>
          <p>Front-end Development, UI/UX Design, Responsive Web Design, JavaScript Animation</p>
        </li>

        <li className="about-item">
          <h3>Current Work</h3>
          <p>Practicing ReactJS projects and learning advanced front-end frameworks. Working on a personal portfolio and contributing to open source.</p>
        </li>

        <li className="about-item">
          <h3>Soft Skills</h3>
          <p>Problem Solving, Team Collaboration, Communication, Time Management</p>
        </li>

        <li className="about-item" id='a-d-l-c'>
          <h3>Tools/Technologies</h3>
          <p>VS Code, GitHub, Figma, Netlify, Chrome DevTools</p>
        </li>
      </ul>
    </section>
  );
};

export default About;
