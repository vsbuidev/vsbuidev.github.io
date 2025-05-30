import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiGithubactions,
  SiJenkins,
  SiDocker,
  SiTerraform,
  SiGnubash,
  SiPython,
  SiSonarqube,
  SiPrometheus,
  SiGrafana,
  SiGit,
  SiGithub,
  SiJira,
  SiPostman,
} from "react-icons/si";
import { FaAws, FaDownload } from "react-icons/fa";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import { HiDocumentText } from "react-icons/hi";
import { TbApi } from "react-icons/tb";
import { MdAnalytics } from "react-icons/md";

export default function Resume() {
  const fullstack_languages = [
    {
      icon: <SiJavascript />,
      name: "JavaScript (ES6+)",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiNodedotjs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiPhp />,
      name: "PHP",
    },
  ];

  const fullstack_frameworks = [
    {
      icon: <SiReact />,
      name: "React.js",
    },
    {
      icon: <SiHtml5 />,
      name: "HTML5",
    },
    {
      icon: <SiCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ];

  const design_tools = [
    {
      icon: <SiFigma />,
      name: "Figma",
    },
  ];

  const databases = [
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
  ];

  const api_tools = [
    {
      icon: <TbApi />,
      name: "RESTful API's",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
  ];

  const cloud_platforms = [
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <VscAzure />,
      name: "Azure",
    },
  ];

  const cicd_automation = [
    {
      icon: <SiGithubactions />,
      name: "GitHub Actions",
    },
    {
      icon: <VscAzureDevops />,
      name: "Azure DevOps",
    },
    {
      icon: <SiJenkins />,
      name: "Jenkins",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
  ];

  const infrastructure_scripting = [
    {
      icon: <SiTerraform />,
      name: "Terraform",
    },
    {
      icon: <SiGnubash />,
      name: "Bash",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
  ];

  const monitoring_logging = [
    {
      icon: <SiPrometheus />,
      name: "Prometheus",
    },
    {
      icon: <SiGrafana />,
      name: "Grafana",
    },
    {
      icon: <MdAnalytics />,
      name: "Log Analytics",
    },
    {
      icon: <SiSonarqube />,
      name: "SonarQube",
    },
  ];

  const version_control = [
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
    },
    {
      icon: <SiJira />,
      name: "Jira",
    },
  ];

  const education = [
    {
      inst: "ACGCET Karaikudi",
      course: "Mechanical Engineering",
      level: "B.E",
      year: "Jun 2018 - Jul 2022",
      description: [
        "As a Mechanical Engineering graduate, I developed a strong foundation in problem-solving, system-level thinking, and process optimization all of which I now apply in the world of software development and cloud engineering. My academic projects and lab work emphasized analytical reasoning, attention to detail, and collaboration skills that translate seamlessly into agile software development, system reliability, and scalable infrastructure design.",
        "During my degree, I independently explored coding, built web apps, and transitioned into tech via freelance frontend work and full-time cloud support engineering.",
      ],
    },
  ];

  const certification = [
    {
      title: "The Complete Full-Stack Web Development Bootcamp at Udemy",
      placeholder: "Click here to get certification link",
      link: "https://www.udemy.com/certificate/UC-b259eeb0-f05b-4904-b116-2835f44ffd64/",
    },
    {
      title: "The Complete PHP MYSQL Professional Course at Udemy",
      placeholder: "Click here to get certification link",
      link: "https://www.udemy.com/certificate/UC-cfa4ac9d-d028-432f-9021-af3b777aeb11/",
    },
    {
      title:
        "Career Essentials in Software Development by Microsoft and LinkedIn",
      about: "",
      placeholder: "Click here to get certification link",
      link: "https://www.linkedin.com/learning/certificates/25ed80b492262b2b76cb305f043feff59d9f9df7d2d030d67a370c312d5f12f1?trk=share_certificate",
    },
    {
      title: "Career Essentials in Sustainable Tech by Microsoft and LinkedIn",
      placeholder: "Click here to get certification link",
      link: "https://www.linkedin.com/learning/certificates/468841276458ad26a0c660fb34b2ec4902f90b1770921e89c635127eda7d6936?trk=share_certificate",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      placeholder: "Click here to get certification link",
      link: "https://api.badgr.io/public/assertions/-J36yXOsRj-SwTbH_MsS4g?identity__email=yogeshak472%40gmail.com",
    },
    {
      title: "Postman API Beginner Learning Path",
      placeholder: "Click here to get certification link",
      link: "http://verify.skilljar.com/c/ywhoue5bfk2e",
    },
  ];

  const TechSection = ({
    title,
    techStack,
  }: {
    title: string;
    techStack: { icon: React.ReactNode; name: string }[];
  }) => (
    <div className="mb-6">
      <h3 className="text-lg text-white font-semibold mb-3 border-b border-gray-600 pb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-x-5 gap-y-3 pr-2 my-text-grey-1">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex gap-x-2 gap-y-1 text-md items-center"
          >
            <div className="text-lg">{tech.icon}</div>
            <div>{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const TechCategory = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="mb-8">
      <h2 className="text-xl text-white font-bold mb-4 border-l-4 border-gray-500 pl-3">
        {title}
      </h2>
      <div className="ml-4">{children}</div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between text-white">
        <div className="flex gap-x-2 items-center">
          <div>
            <HiDocumentText className="text-xl" />
          </div>
          <div className="font-bold text-xl">Resume</div>
        </div>
        <a target="_blank" href="/vsb-resume-off.pdf">
          <div className="group flex gap-x-2 items-center cursor-pointer">
            <div className="opacity-0 duration-[1200ms] group-hover:opacity-100 pr-1 group-hover:pr-4">
              View
            </div>
            <div>
              <FaDownload />
            </div>
          </div>
        </a>
      </div>
      <div>
        <div className="mt-5">
          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard rounded-lg group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200 shadow-md">
            <div>
              <h2 className="text-2xl text-white font-bold mb-5">
                Intro about me
              </h2>
              <div className="sectionContentList text-gray-400">
                I'm a performance-driven Cloud and DevOps Engineer with a
                passion for building scalable, resilient, and secure systems
                that power real-world applications. With hands-on experience
                across AWS and Azure, I specialize in optimizing infrastructure,
                automating deployment pipelines, and ensuring system reliability
                through proactive monitoring and troubleshooting. Recently, I've
                been expanding into frontend engineering, crafting seamless user
                interfaces using modern frameworks like React and TypeScript. I
                bring a product-focused mindset to everything I build—whether
                it's streamlining CI/CD workflows or enhancing user experience
                on the frontend. My approach blends cloud expertise, DevOps best
                practices, and a deep sense of ownership, enabling rapid
                iteration and innovation. I thrive in agile teams, collaborating
                closely with developers, designers, and product managers to
                deliver secure, high-quality solutions that align with business
                goals.{" "}
              </div>

              <div className="sectionContentList text-gray-400 mt-2">
                Let's build something visually stunning and user-friendly
                together, like a perfect movie climax.
              </div>
            </div>
          </div>

          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard rounded-lg group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200 shadow-md">
            <div>
              <h2 className="text-2xl text-white font-bold mb-5">
                Technical Competency
              </h2>
              <div>
                <TechCategory title="Full Stack Development">
                  <TechSection
                    title="Languages & Frameworks"
                    techStack={[
                      ...fullstack_languages,
                      ...fullstack_frameworks,
                    ]}
                  />
                  <TechSection
                    title="Design & Prototyping"
                    techStack={design_tools}
                  />
                  <TechSection title="Databases" techStack={databases} />
                  <TechSection
                    title="API Development & Integration"
                    techStack={api_tools}
                  />
                </TechCategory>

                <TechCategory title="Cloud & DevOps">
                  <TechSection
                    title="Cloud Platforms"
                    techStack={cloud_platforms}
                  />
                  <TechSection
                    title="CI/CD & Automation"
                    techStack={cicd_automation}
                  />
                  <TechSection
                    title="Infrastructure as Code & Scripting"
                    techStack={infrastructure_scripting}
                  />
                  <TechSection
                    title="Monitoring & Logging Tools"
                    techStack={monitoring_logging}
                  />
                </TechCategory>

                <TechCategory title="Version Control & Collaboration">
                  <TechSection title="Tools" techStack={version_control} />
                </TechCategory>
              </div>
            </div>
          </div>

          {/* education */}
          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard rounded-lg group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200 shadow-md">
            <div>
              <h2 className="text-2xl text-white font-bold mb-5">Education</h2>
              <div>
                {/* education loop */}
                {education.map((education, index) => (
                  <div key={index} className="text-white">
                    <div className="font-bold mb-2">{education.inst}</div>
                    <div className="mb-2 text-gray-400">
                      {education.level} {education.course}
                    </div>
                    <div className="mb-2 text-gray-400">{education.year}</div>
                    <div className="text-gray-400">{education.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* certifications */}
          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard rounded-lg group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200 shadow-md">
            <div>
              <h2 className="text-2xl text-white font-bold mb-5">
                Certifications
              </h2>
              <div>
                {/* certification loop */}
                {certification.map((certification, index) => (
                  <div key={index} className="text-white mb-4">
                    <div className="font-bold mb-2">{certification.title}</div>
                    <div className="mb-2 text-gray-400 text-underline">
                      <a target="_blank" href={certification.link}>
                        {certification.placeholder}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
