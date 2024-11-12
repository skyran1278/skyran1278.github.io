export default function Home() {
  return (
    <main className="bg-gray-100 p-8 text-gray-800">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <header className="mb-8">
          <div className="text-center">
            <h1 className="mb-2 text-3xl font-bold">You-Ran Nai</h1>
          </div>
          <div className="text-center text-sm text-gray-600">
            <div>Phone: (+886) 920-785-026</div>
            <div>Email: nai@u-ran.com</div>
            <div>
              GitHub:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/skyran1278"
                className="text-blue-600 hover:underline"
              >
                github.com/skyran1278
              </a>
            </div>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Summary</h2>
          <p className="leading-relaxed">
            Multi-talented software developer with 3+ years of experience in
            web, desktop, and cloud-based infrastructure development. Proficient
            in designing 3-tier architectures and renovating complex
            applications. Skilled in a wide range of technologies and tools,
            delivering high-quality software solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="rounded bg-gray-200 px-2 py-1">JavaScript</span>
            <span className="rounded bg-gray-200 px-2 py-1">C++</span>
            <span className="rounded bg-gray-200 px-2 py-1">Python</span>
            <span className="rounded bg-gray-200 px-2 py-1">React</span>
            <span className="rounded bg-gray-200 px-2 py-1">Redux</span>
            <span className="rounded bg-gray-200 px-2 py-1">Jest</span>
            <span className="rounded bg-gray-200 px-2 py-1">Node</span>
            <span className="rounded bg-gray-200 px-2 py-1">MongoDB</span>
            <span className="rounded bg-gray-200 px-2 py-1">AWS</span>
            <span className="rounded bg-gray-200 px-2 py-1">Docker</span>
            <span className="rounded bg-gray-200 px-2 py-1">
              Azure Pipeline
            </span>
            <span className="rounded bg-gray-200 px-2 py-1">
              GCP Vision API
            </span>
            <span className="rounded bg-gray-200 px-2 py-1">Firebase</span>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Experiences</h2>

          <div className="mb-6">
            <h3 className="text-lg font-medium">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://building.rcad.com.tw/"
                className="text-blue-600 hover:underline"
              >
                RCAD Inc.
              </a>
            </h3>
            <div className="text-sm text-gray-600">
              <div>Software Developer</div>
              <div>Aug 2020 - Present</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Designed, developed, tested, and documented modules for 3D
                applications using Visual C++, MFC, and OO Design Patterns.
              </li>
              <li>
                Reviewed papers and implemented algorithms to solve complex
                problems.
              </li>
              <li>
                Developed a script to migrate from multi-byte to Unicode
                applications.
              </li>
              <li>Managed GIT/TFS repositories and pipeline strategies.</li>
              <li>
                Developed and maintained integration test suites based on
                functional specifications.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://elements-str.com/"
                className="text-blue-600 hover:underline"
              >
                Elements Structure Inc.
              </a>
            </h3>
            <div className="text-sm text-gray-600">
              <div>Full Stack Web Developer</div>
              <div>Aug 2019 - Aug 2020</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Built{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://espm.in"
                  className="text-blue-600 hover:underline"
                >
                  a web application for account management and issue tracking
                </a>{' '}
                using React, Redux, Node/Express, and MongoDB.
              </li>
              <li>Developed notification and backup services with Node.js.</li>
              <li>
                Migrated from a self-hosted Linux environment to AWS
                auto-scaling infrastructure and multi-tenant architecture.
              </li>
              <li>Managed infrastructure provisioning with AWS services.</li>
              <li>
                Created a structure plan vision system using PyTorch and GCP
                Vision API.
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm text-gray-600">
              <div>Full Stack Web Developer (Internship)</div>
              <div>Jun 2016 - Jul 2019</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Developed an{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://rcbimx.web.app/"
                  className="text-blue-600 hover:underline"
                >
                  on-site management system
                </a>{' '}
                using a NoSQL cloud database and OAuth 2.0 for authentication.
              </li>
              <li>
                Optimized steel structure members using clustering algorithms.
              </li>
              <li>Designed SRC using Newton's method and slide algorithm.</li>
              <li>
                Optimized the angle radius, increasing speed by 400 times.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Education</h2>

          <div className="mb-6">
            <h3 className="text-lg font-medium">National Taiwan University</h3>
            <div className="text-sm text-gray-600">
              <div>Master's degree, Structural Engineering</div>
              <div>2017 - 2019</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Thesis: "Feasibility of Beam Reinforcement Optimization for
                Practical Application"
              </li>
              <li>Developed an algorithm to optimize beam reinforcement.</li>
              <li>Developed a GUI written in Python.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">National Taiwan University</h3>
            <div className="text-sm text-gray-600">
              <div>Bachelor's degree, Civil Engineering</div>
              <div>2013 - 2017</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@youran/704e60ffc5b7"
                  className="text-blue-600 hover:underline"
                >
                  Gold Medal
                </a>{' '}
                in CSX 2003 Website Database Programming (used Azure, Node.js,
                and Express.js to build a website and Chrome extension).
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Side Projects</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/JanHovancik/status/1572480516540223490?s=20&t=00eO2C44EZwpQWQV_abeLw"
                className="text-blue-600 hover:underline"
              >
                stretchly-raycast
              </a>
              : Built a Raycast extension using TypeScript.
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets"
                className="text-blue-600 hover:underline"
              >
                js-jsx-snippets
              </a>
              : Built a VSCode extension for React/Redux in JS with Babel and
              ES7 syntax, with over 0.5 million downloads.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
