import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div>
        <h1>You-Ran Nai</h1>

        <p>New Taipei City, Taiwan</p>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/you-ran-nai-7b4415ab/">https://www.linkedin.com/in/you-ran-nai-7b4415ab/</a>
        <p>skyran1278@gmail.com</p>
      </div>
      <div>
        <h2>Summary</h2>
        <ul>
          <li>Combines structural engineering domain knowledge with more than three years of practical experience in full-stack web development.</li>
          <li>Experienced with designing frontend and backend system architectures from ground-zero.</li>
          <li>Hunger for web development knowledge all comes from self-learning.</li>
        </ul>
      </div>
      <div>
        <h2>Skills</h2>
        <ul>
          <li>
            Proficient:
            <ul>
              <li>React, Redux</li>
              <li>Node.js, Express.js, Jest, RESTful API, MongoDB, Mongoose, Nginx</li>
              <li>Docker, Linux, CircleCI, GitHub Actions</li>
            </ul>
          </li>
          <li>Intermediate: Azure, Firebase, Heroku, MySQL</li>
        </ul>
      </div>
      <div>
        <h2>Experiences</h2>
        <h3>Elements Structure Inc.</h3>
        <h4 className="margin-bot-0">Full Stack Engineer (Full-time)</h4>
        <p className="right margin-top-0">Aug 2019 - now (11 mos)</p>
        <ul>
          <li>Used React and Redux to build internal systems including an account management system and an issue tracking system.</li>
          <li>Built with RESTful APIs with Node/Express and MongoDB/Mongoose.</li>
          <li>Developed notification and backup services via Node.js.</li>
          <li>Deployed microservices using Docker.</li>
          <li>Used Nginx as an HTTP and reverse proxy server.</li>
          <li>Maintained a CI/CD system with CircleCI and GitHub Actions.</li>
        </ul>
        <h4 className="margin-bot-0">Full Stack Engineer (Internship)</h4>
        <p className="right margin-top-0">Jun 2016 - Jul 2019 (3 yrs 2 mos)</p>
        <ul>
          <li>Worked with RCAD Inc. to develop an on-site management system.</li>
          <li>Built serverless applications using Node.js.</li>
          <li>Addressed authentication via OAuth 2.0.</li>
          <li>Stored and synced data with the NoSQL cloud database.</li>
          <li>Developed the UI/UX using React and Redux.</li>
        </ul>
        <p>Structural engineering domain know-how: writing applications to aid engineers in analyzing and designing construction engineering.</p>
        <ul>
          <li>Developed a program to monitor structured models and analyze whether they are reasonable.</li>
          <li>Optimized for the lap length of reinforcement to reduce construction reinforcement costs.</li>
          <li>Optimizes steel structure members according to their Z values. (Using k-means and hierarchical-clustering algorithm.)</li>
          <li>Designing SRC according to the PMM Curve. (For analysis software far-reaching this area, we developed an assistance program which used Newton&apos;s method and method of slide algorithm.)</li>
          <li>Check whether the designed reinforcement meets the RC specification. (Worked with RCAD Inc..)</li>
          <li>Check whether the angle radius meets the specifications. (Optimized speed to 400 times faster than the previous version.)</li>
        </ul>
      </div>
      <div>
        <h2>Education</h2>
        <h3>National Taiwan University</h3>
        <p className="margin-bot-0">Master&#39;s degree, Structural Engineering</p>
        <p className="right margin-top-0">2017 - 2019</p>
        <p>Thesis - &quot;Feasibility of Beam Reinforcement Optimization for Practical Application&quot;</p>
        <ul>
          <li>Developed an algorithm to optimize beam reinforcement.</li>
          <li>Developed a GUI written in Python for easy engineering use.</li>
          <li>Nonlinear time-history analysis.</li>
        </ul>
        <h3>National Taiwan University</h3>
        <p className="margin-bot-0">Bachelor&#39;s degree, Civil Engineering</p>
        <p className="right margin-top-0">2013 - 2017</p>
        <p>Related courses</p>
        <ul>
          <li>EE 3011 Data Structure and Programming</li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="http://csx.ntu.edu.tw/demo_105-2/index.html">CSX 2003 Website Database Programming</a>
            {' '}
            (Used Azure, Node.js, Express.js to build a website and chrome extension and receive the Gold Medal.)
          </li>
          <li>CIE 5086 Technology and Application of BIM</li>
          <li>CIE 1008 Computer Programming</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
