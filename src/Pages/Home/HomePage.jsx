import React from "react";
import "./Home.css";
import Photo from "/Images/MyPhotos/MyPhoto.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const HomePage = ({ setPageName }) => {
  const percentageT = 90;
  const percentageE = 65;

  return (
    <section className="HomePage">
      <div className="profile">
        <div className="about">
          <h2>Hi, I'm Kesava Perumal </h2>
          <p>
            A passionate web developer dedicated to crafting responsive,
            user-friendly websites that blend creativity with clean, efficient
            code. With hands-on experience in HTML, CSS, and ReactJS, I
            specialize in turning ideas into dynamic digital experiences.
          </p>
        </div>
        <img src={Photo} alt="profile" />
      </div>

      <div className="gole">
        <p>
          My goal is to grow into a full-stack developer, contribute to
          impactful projects, and build intuitive digital experiences that solve
          real-world problems.
        </p>
      </div>

      <ul className="skills">
        <li className="skill" onClick={() => setPageName("skill")}>
          <Link to="/skill">
            <p>Skills Count : 8+</p>
          </Link>
        </li>
        <li className="skill" onClick={() => setPageName("project")}>
          <Link to="/project">
            <p>Project Count : 5</p>
          </Link>
        </li>
        <li className="skill" onClick={() => setPageName("certificate")}>
          <Link to="/certificate">
            <p>Certifications : 6</p>
          </Link>
        </li>
        <li className="skill">
          <p>Problam solving : 0</p>
        </li>
      </ul>

      <div className="language-box">
        <div className="language">
          <p>English</p>
          <div className="language-bar">
            <CircularProgressbar
              value={percentageE}
              text={`${percentageE}%`}
              styles={buildStyles({
                pathColor: `rgba(36, 35, 35,0.6)`,
                textColor: "white",
                trailColor: "white",
                textSize: "16px",
                pathTransitionDuration: 0.8,
              })}
            />
          </div>
        </div>
        <hr />
        <div className="language">
          <p>Tamil</p>
          <div className="language-bar">
            <CircularProgressbar
              value={percentageT}
              text={`${percentageT}%`}
              styles={buildStyles({
                pathColor: `rgba(36, 35, 35,0.6)`,
                textColor: "white",
                trailColor: "white",
                textSize: "16px",
                pathTransitionDuration: 0.8,
              })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
