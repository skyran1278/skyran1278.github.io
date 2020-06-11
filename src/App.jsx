import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div>
        <h1>You-Ran Nai</h1>

        <p>New Taipei City, Taiwan</p>
        <a href="https://www.linkedin.com/in/you-ran-nai-7b4415ab/">https://www.linkedin.com/in/you-ran-nai-7b4415ab/</a>
        <p>
          <i className="material-icons">mail</i>
          &nbsp;skyran1278@gmail.com
        </p>
      </div>
      <div>
        <h2>Summary</h2>
        <p>
          Combines structural engineering domain knowledge with more than three years of practical experience in full stack web development.
          Experienced with building front-end and back-end system architectures from ground-zero.
          Enthusiasm in coding and web development knowledge all come from self-learning.
        </p>
      </div>
      <div>
        <h2>Skills</h2>
        <p>
          <ul>
            <li>
              Proficient:
              <ul>
                <li>React, Redux</li>
                <li>Node.js, Express.js, Jest, Restful API, MongoDB, Mongoose, Nginx</li>
                <li>Docker, Linux, CI/CD</li>
              </ul>
            </li>
            <li>Intermediate: Azure, Firebase, Heroku, MySQL</li>
          </ul>
        </p>
      </div>
      <div>
        <h2>
          <i className="material-icons">computer</i>
          &nbsp;Experiences
        </h2>
        <h3>
          Elements Structure Inc.
          (
          <a target="_blank" rel="noopener noreferrer" href="https://www.elements-str.com/">website</a>
          )
        </h3>
        <p>Full Stack Engineer (Full-time)</p>
        <p>Aug 2019 – now (11 mos)</p>
        <ul>
          <li>Used React and Redux for building internal management of systems, including account management and reporting systems.</li>
          <li>Built RESTful APIs using Node/Express and MongoDB/Mongoose.</li>
          <li>Developed notification and backup services via Node.js.</li>
          <li>Deployed servers using Docker and used Nginx as an HTTP and reverse proxy server.</li>
          <li>Maintained a CI/CD system with Circle and GitHub flow.</li>
        </ul>
        <p>Full Stack Engineer (Internship)</p>
        <p>Jun 2016 – Jul 2019 (3 yrs 2 mos)</p>
        <ul>
          <li>Developed an on-site management system using React and Redux.</li>
          <li>Built serverless application using node.js.</li>
          <li>Addressed authentication using OAuth 2.0.</li>
          <li>Stored and synced data with NoSQL cloud database.</li>
        </ul>
        <p>Structural engineering domain problem: wrote programs to aid engineers in designing and analyzing structure engineering.</p>
        <ul>
          <li>EtabsScan: Checked the structure and analyze whether it is reasonable.</li>
          <li>LapLength: Optimizing the lap length of reinforcement.</li>
          <li>TimeSheetManageSystem: Project cost statistics system.</li>
          <li>BeamZValue: Steel structure members are optimized according to the Z value.</li>
          <li>SRCSelector: Select the SRC section according to PMM Curve.</li>
          <li>BeamForces: Help design the SRC section.</li>
          <li>RCScan: Check whether the RC reinforcement meets the specifications.</li>
          <li>AngleChange: Check whether the angle radius meets the specifications.</li>
          <li>AttendanceRecords: Staff hour statistics.</li>
          <li>StoryDrifts: Automatically generate story drifts chart.</li>
        </ul>
      </div>
      <div>
        <h2>Education</h2>
        <h3>National Taiwan University</h3>
        <p>Master&#39;s degree, Structural Engineering</p>
        <p>2017 – 2019</p>
        <p>Thesis - &quot;Feasibility of Beam Reinforcement Optimization for Practical Application&quot;</p>
        <ul>
          <li>Developed an Algorithm to Optimize Reinforcement.</li>
          <li>Nonlinear dynamic analysis.</li>
          <li>Developed a GUI which written in Python.</li>
        </ul>
        <h3>National Taiwan University</h3>
        <p>Bachelor&#39;s degree, Civil Engineering</p>
        <p>2013 – 2017</p>
        <p>Related courses</p>
        <ul>
          <li>EE 3011 Data Structure and Programming</li>
          <li>CSX 2003 Website Database Programming (Used Azure, Express, and Bootstrap to build a website.)</li>
          <li>CIE 5086 Technology and Application of BIM</li>
          <li>CIE 1008 Computer Programming</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
