import React, { useState  ,useRef } from 'react';
import './SkillPage.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoLogoHtml5 ,IoLogoCss3,IoLogoJavascript,IoLogoReact,IoLogoGithub} from "react-icons/io5";
import { SiMongodb,SiMongoose,SiOracle} from "react-icons/si";


const skillDetails = {
  HTML: {
    icon: <IoLogoHtml5 size={40}/>,
    percentage: 81,
    description: 'Semantic tag structure header, main, footer, section, article, etc. Form input validation. Table element usage. Media tag embedding. Anchor image linking. Responsive layout design.',
  },
  CSS: {
    icon: <IoLogoCss3 size={40} />,
    percentage: 75,
    description: 'Practiced Flexbox, Grid, and media queries for responsive layouts. Styled components with transitions, hover effects, and custom fonts. Learned CSS variables and pseudo-classes.',
  },
  JavaScript: {
    icon: <IoLogoJavascript size={40} />,
    percentage: 68,
    description: 'Focused on ES6+ features like arrow functions, destructuring, array methods (map, filter, reduce), and DOM manipulation. Created interactive UI components and practiced basic async logic.',
  },
  ReactJS: {
    icon: <IoLogoReact size={40} />,
    percentage: 65,
    description: 'Built components using hooks (useState, useEffect). Worked with props, state management, conditional rendering, and JSX. Created dynamic UIs using reusable component logic.',
  },
  GitHub: {
    icon: <IoLogoGithub size={40} />,
    percentage: 65,
    description: 'Used GitHub for version control, pushing/pulling commits, resolving merge conflicts. Created branches, managed repositories, and collaborated using issues and pull requests.',
  },
  SQL: {
    icon: <SiOracle size={40} />,
    percentage: 50,
    description: 'Wrote queries using SELECT, JOIN, GROUP BY, and WHERE. Practiced CRUD operations, subqueries, and schema design with relational databases.',
  },
  MongoDB: {
    icon: <SiMongodb size={40} />,
    percentage: 63,
    description: 'Used MongoDB Compass and shell to manage NoSQL documents. Performed operations like insertMany, updateOne, find, and aggregate queries with filters and projections.',
  },
  Mongoose: {
    icon: <SiMongoose size={40} />,
    percentage: 68,
    description: 'Defined schemas with field validation and relationships. Used model methods like findById, populate, and updateMany. Integrated with Express.js for backend development.',
  },
};

const Skill = ({scrollTop}) => {

  const [currentSkill, setCurrentSkill] = useState('HTML');

  const handleSkillChange = (skill) => {
    setCurrentSkill(skill);
    scrollTop();
  };

  const { percentage, description } = skillDetails[currentSkill];

  return (
    <section className='SkillPage'>
      <div className='AboutSkill'>
        <h2>{currentSkill}</h2>
        <div className='skill-bar'>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathColor: `rgba(36, 35, 35,0.6)`,
              textColor: 'white',
              trailColor: 'white',
              textSize: '16px',
              pathTransitionDuration: 3,
              pathTransition:'0.8s 0.5s'
            })}
          />
        </div>
        <p>{description}</p>
      </div>
      <div className='MySkills'>
        <ul>
          {Object.keys(skillDetails).map(skill => {
          const { icon } = skillDetails[skill];
          return (
            <li key={skill} onClick={() => handleSkillChange(skill)}>
              <div className='icon-con'>{icon}</div>
              <h2>{skill.toUpperCase()}</h2>
            </li>
          );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skill;
