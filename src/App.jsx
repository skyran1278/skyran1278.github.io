import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div>
        <h1>You-Ran Nai</h1>
        <p>New Taipei City, Taiwan</p>
        <a href="https://www.linkedin.com/in/you-ran-nai-7b4415ab/">https://www.linkedin.com/in/you-ran-nai-7b4415ab/</a>
        <p>skyran1278@gmail.com</p>
      </div>
      <div>
        <h2>CAREER SUMMARY</h2>
        <p>I am a web developer and a structure engineer with more than three years of experience working at Elements Structure. Combines structural engineering domain knowledge with web development to add product value.</p>
      </div>
      <div>
        <h2>SKILL SUMMARY</h2>
        <ul>
          <li>
            Frontend
            <ul>
              <li>Proficient: React, Redux</li>
              <li>Intermediate: Styled Component, CSS Module, Webpack, Electron</li>
            </ul>
          </li>
          <li>
            Backend
            <ul>
              <li>Proficient: Node.js, Express.js, Restful API, MongoDB, Mongoose, Nginx, Jest</li>
              <li>Intermediate: Firebase, MySQL, PM2, Gulp</li>
            </ul>
          </li>
          <li>
            DevOps
            <ul>
              <li>Proficient: Docker, Linux, CI/CD</li>
              <li>Intermediate: Azure, GCP</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h2>WORK EXPERIENCES</h2>
        <h3>Full Stack Engineer</h3>
        <p>Elements Structure</p>
        <p>Aug 2019 – Present (11 mos)</p>
        <ul>
          <li>Used React and Redux for internal management of systems, including account management and reporting systems.</li>
          <li>Built RESTful APIs for Node/Express and MongoDB/Mongoose.</li>
          <li>Developed notification and backup services via Node.js.</li>
          <li>Deploy servers using Docker and use Nginx as an HTTP and reverse proxy server.</li>
          <li>Maintained a CI/CD system with Circle and GitHub flow.</li>
        </ul>
        <h3>Full Stack Engineer</h3>
        <p>Elements Structure</p>
        <p>Jun 2016 – Jul 2019 (3 yrs 2 mos)</p>
        <ul>
          <li>Developed as an on-site management system using React and Redux.</li>
          <li>Use Firebase to address Authentication, Database, Storage, Hosting, and Functions.</li>
        </ul>
        <p>Writing programs to aid engineers in designing and analyzing structure engineering.</p>
        <ul>
          <li>EtabsScan: Check the structure and analyze whether it is reasonable.</li>
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
        <h2>EDUCATION</h2>
        <h3>National Taiwan University</h3>
        <p>Master&#39;s degree, Structural Engineering</p>
        <p>2017 – 2019</p>
        <p>Thesis - &quot;Feasibility of Beam Reinforcement Optimization for Practical Application&quot;</p>
        <ul>
          <li>Developing an Algorithm to Optimize Reinforcement.</li>
          <li>Nonlinear dynamic analysis.</li>
          <li>Developing a GUI which written in Python.</li>
        </ul>
        <h3>National Taiwan University</h3>
        <p>Bachelor&#39;s degree, Civil Engineering</p>
        <p>2013 – 2017</p>
        <p>Related courses</p>
        <ul>
          <li>EE 3011 Data Structure and Programming</li>
          <li>CSX 2003 Website Database Programming (Using Azure, Express, and Bootstrap to build a website.)</li>
          <li>CIE 5086 Technology and Application of BIM</li>
          <li>CIE 1008 Computer Programming</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
