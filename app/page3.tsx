export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center border-b-2 pb-4 mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-4xl font-bold">You-Ran Nai</h1>
          </div>
          <div className="text-center md:text-right space-y-1">
            <div>Phone: (+886) 920-785-026</div>
            <div>Email: nai@u-ran.com</div>
            <div>
              GitHub:{" "}
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/skyran1278"
              >
                github.com/skyran1278
              </a>
            </div>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <p className="leading-relaxed">
            Multi-talented software developer with 3+ years of experience in
            web, desktop, and cloud-based infrastructure development. Proficient
            in designing 3-tier architectures and renovating complex
            applications. Skilled in a wide range of technologies and tools,
            delivering high-quality software solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript",
              "C++",
              "Python",
              "React",
              "Redux",
              "Jest",
              "Node",
              "MongoDB",
              "AWS",
              "Docker",
              "Azure Pipeline",
              "GCP Vision API",
              "Firebase",
            ].map((skill) => (
              <span
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experiences</h2>
          {[
            {
              company: "RCAD Inc.",
              role: "Software Developer",
              period: "Aug 2020 - Present",
              link: "http://building.rcad.com.tw/",
              tasks: [
                "Designed, developed, tested, and documented modules for 3D applications using Visual C++, MFC, and OO Design Patterns.",
                "Reviewed papers and implemented algorithms to solve complex problems.",
                "Developed a script to migrate from multi-byte to Unicode applications.",
                "Managed GIT/TFS repositories and pipeline strategies.",
                "Developed and maintained integration test suites based on functional specifications.",
              ],
            },
            {
              company: "Elements Structure Inc.",
              role: "Full Stack Web Developer",
              period: "Aug 2019 - Aug 2020",
              link: "https://elements-str.com/",
              tasks: [
                "Built a web application for account management and issue tracking using React, Redux, Node/Express, and MongoDB.",
                "Developed notification and backup services with Node.js.",
                "Migrated from a self-hosted Linux environment to AWS auto-scaling infrastructure and multi-tenant architecture.",
                "Managed infrastructure provisioning with AWS services.",
                "Created a structure plan vision system using PyTorch and GCP Vision API.",
              ],
            },
            {
              role: "Full Stack Web Developer (Internship)",
              period: "Jun 2016 - Jul 2019",
              tasks: [
                "Developed an on-site management system using a NoSQL cloud database and OAuth 2.0 for authentication.",
                "Optimized steel structure members using clustering algorithms.",
                "Designed SRC using Newton's method and slide algorithm.",
                "Optimized the angle radius, increasing speed by 400 times.",
              ],
            },
          ].map(({ company, role, period, link, tasks }, index) => (
            <div className="mb-6" key={index}>
              <h3 className="text-xl font-medium">
                {link ? (
                  <a
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}
                  >
                    {company}
                  </a>
                ) : (
                  company || role
                )}
              </h3>
              <div className="flex justify-between items-center text-sm">
                <div>{role}</div>
                <div>{period}</div>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-sm leading-relaxed">
                {tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          {[
            {
              institution: "National Taiwan University",
              degree: "Master's degree, Structural Engineering",
              period: "2017 - 2019",
              details: [
                "Thesis: 'Feasibility of Beam Reinforcement Optimization for Practical Application'",
                "Developed an algorithm to optimize beam reinforcement.",
                "Developed a GUI written in Python.",
              ],
            },
            {
              institution: "National Taiwan University",
              degree: "Bachelor's degree, Civil Engineering",
              period: "2013 - 2017",
              details: [
                "Gold Medal in CSX 2003 Website Database Programming (used Azure, Node.js, and Express.js to build a website and Chrome extension).",
              ],
            },
          ].map(({ institution, degree, period, details }, index) => (
            <div className="mb-6" key={index}>
              <h3 className="text-xl font-medium">{institution}</h3>
              <div className="flex justify-between items-center text-sm">
                <div>{degree}</div>
                <div>{period}</div>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-sm leading-relaxed">
                {details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Side Projects</h2>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-sm leading-relaxed">
            {[
              {
                title: "stretchly-raycast",
                description: "Built a Raycast extension using TypeScript.",
                link: "https://twitter.com/JanHovancik/status/1572480516540223490?s=20&t=00eO2C44EZwpQWQV_abeLw",
              },
              {
                title: "js-jsx-snippets",
                description:
                  "Built a VSCode extension for React/Redux in JS with Babel and ES7 syntax, with over 0.5 million downloads.",
                link: "https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets",
              },
            ].map(({ title, description, link }, index) => (
              <li key={index}>
                <a
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                >
                  {title}
                </a>
                : {description}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
