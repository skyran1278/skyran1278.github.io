import React from 'react';
import './App.css';

const App: React.FC = function App() {
  return (
    <div className="container">
      <div className="headline">
        <div>
          <h1>You-Ran Nai</h1>
        </div>
        <div className="contact-info">
          <div>Phone: (+886) 920-785-026</div>
          <div>Email: nai@u-ran.com</div>
          <div>
            GitHub:{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/skyran1278"
            >
              https://github.com/skyran1278
            </a>
          </div>
        </div>
      </div>
      <div>
        <h2>Summary</h2>
        <ul>
          <li>
            Multi-talented software developer with 3+ years of practical
            experience in web/desktop development and cloud-based
            infrastructure.
            {/* 加上實習甚至達到 6 年的經驗了, 熟悉 web 技術, c++ windows 桌面軟體, 雲端 AWS */}
          </li>
          <li>
            Experienced with designing 3-tier architecture (Client, Server, and
            Database) from scratch, in addition to renovating desktop
            applications from a legacy codebase.
            {/*
            最開始的公司是小公司, 公司只有我一個開發人員, 所有的東西都是從頭開始建置
            - 前端, 後端與資料庫的架構設計
            - CI/CD
            - 維運怎麼從 linux docker 遷移到 AWS
            - 資料備份等等

            後來來到 RCAD 後, 雖然已經是領導品牌, 但同時也是因為在 10 年前就成立了, 所以挑戰變成了
            - 看懂前人的程式碼
            - 翻新舊有的技術棧
            */}
          </li>
          <li>
            Expertise in end-to-end software development life cycle processes
            and experience in carrying out impact analysis, project review, and
            documentation In-depth knowledge of object-oriented programming and
            design techniques.
            {/* 與同事協同合作, 歷經需求分析, 架構設計, 實作, 撰寫文件 */}
          </li>
        </ul>
      </div>
      <div>
        <h2>Skills</h2>
        <div>
          Javascript, C++, Python, React, Redux, Jest, Node, Express, RESTful
          API, MongoDB, Mongoose, Nginx, Docker, Azure Pipeline, GCP Vision API,
          Firebase, AWS API Gateway, Cloudfront, VPC, ECS, Lambda, S3, CDK
        </div>
      </div>
      <div>
        <h2>Experiences</h2>
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://building.rcad.com.tw/"
          >
            RCAD Inc.
          </a>
        </h3>
        <div className="job-title">
          <div>C++ Desktop Developer</div>
          <div>Aug 2020 - now (2 yrs)</div>
        </div>
        <ul>
          <li>
            Handled the design, development, integration testing, review, and
            documentation of the various modules for structural analysis
            applications.
          </li>
          <li>
            Utilized Visual C++, MFC, STL, and OO Design Patterns to develop
            desktop applications.
          </li>
          <li>
            Developed a script using python to smoothly migrate from multi-bytes
            to Unicode applications.
            {/* 開發 codemod, 快速遷移既有的程式碼, C++ 的語法不容易開發類似的 tool, 所以網路上相關的工具也比較少 */}
          </li>
          <li>
            Responsible for designing and maintaining the GIT/TFS repositories
            and their pipeline strategies.
            {/* 重新制定並開發 CI/CD 流程, 包含遷移所有的集中式版本控管系統到分布式 monorepo */}
          </li>
          <li>
            Developed and maintained integration test suites based on functional
            specifications and user edge cases.
            {/* 撰寫桌面端 end to end 自動化測試的 script */}
          </li>
        </ul>
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://elements-str.com/"
          >
            Elements Structure Inc.
          </a>
        </h3>
        <div className="job-title">
          <div>Full Stack Web Developer</div>
          <div>Aug 2019 - Aug 2020 (1 yr)</div>
          {/*
          主要的產品線有
          - 利用 react node.js aws 開發雲端打卡與專案工時計算系統
          - 利用 PyTorch 與 Google Vision API 開發 AI 辨識結構平面圖
          */}
        </div>
        <ul>
          <li>
            Used React and Redux to build{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://espm.in">
              a web application for account management and issue tracking
            </a>
            .
          </li>
          <li>
            Built with RESTful APIs using Node/Express and MongoDB/Mongoose.
          </li>
          <li>Developed notification and backup services with Node.js.</li>
          <li>
            Migrated the current self-hosted Linux environment to AWS
            auto-scaling infrastructure, and from single-tenant to multi-tenant
            architecture.
          </li>
          <li>
            Responsible for managing infrastructure provisioning (Route 53,
            Cloudfront, S3, ELB, ECS, MongoDB Atlas, IAM, VCP).
          </li>
          <li>
            Worked on implementing AWS using CDK to define cloud infrastructure
            in code and provisioning it through AWS CloudFormation.
          </li>
          <li>
            Build out server automation with Continuous Integration - Continuous
            Deployment tools like GitHub Actions for deployment and build
            management system.
          </li>
          <li>
            Created a structure plan vision system by using PyTorch and GCP
            Vision API.
          </li>
        </ul>
        <div className="job-title">
          <div>Full Stack Web Developer (Internship)</div>
          <div>Jun 2016 - Jul 2019 (3 yrs 2 mos)</div>
          {/*
          主要的產品線有
          - 與 RCAD 合作, 開發現場工地查驗的雲端輔助系統
          - 利用 k-means 與集群演算法, 最佳化結構桿件
          - 用牛頓法與半切法, 開發設計異材質接合的桿件
          - 優化既有程式, 使速度大幅度提升, 原本要跑半天一天的程式, 現在不用一分鐘就跑完了
          */}
        </div>
        <ul>
          <li>
            Worked with RCAD Inc. to develop an{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1LAP2v3wq7_7ljqeoZSjfpAHKYZr7ZcpQ/view?usp=sharing"
            >
              on-site management system
            </a>
            .
          </li>
          <li>
            Stored data with the NoSQL cloud database and addressed
            authentication via OAuth 2.0.
          </li>
          <li>
            Optimized steel structure members according to their Z values by
            using k-means and hierarchical-clustering algorithms.
          </li>
          <li>
            Designing SRC according to the PMM Curve which used Newton&apos;s
            method and the slide algorithm.
          </li>
          <li>
            Checked whether the angle radius meets the specifications.
            (Optimized speed to 400 times faster than the previous version.)
          </li>
        </ul>
      </div>
      <div>
        <h2>Education</h2>
        <h3>National Taiwan University</h3>
        <div className="job-title">
          <div>Master&#39;s degree, Structural Engineering</div>
          <div>2017 - 2019</div>
          {/*
          以 Python 開發 GUI 與最佳化軟體
          */}
        </div>
        <ul>
          <li>
            Thesis - &quot;Feasibility of Beam Reinforcement Optimization for
            Practical Application&quot;
          </li>
          <li>Developed an algorithm to optimize beam reinforcement.</li>
          <li>Developed a GUI written in the python programming language.</li>
        </ul>
        <h3>National Taiwan University</h3>
        <div className="job-title">
          <div>Bachelor&#39;s degree, Civil Engineering</div>
          <div>2013 - 2017</div>
        </div>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@youran/704e60ffc5b7"
            >
              CSX 2003 Website Database Programming
            </a>{' '}
            (Used Azure, Node.js, and Express.js to build a website and chrome
            extension and receive the Gold Medal.)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
