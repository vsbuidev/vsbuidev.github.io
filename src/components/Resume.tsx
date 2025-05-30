// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume({
  experiences,
}: // socialMedia,
{
  experiences: { company: string; role: string; date: string }[];
  socialMedia: { mySocials: { github: string } };
}) {
  const tech_stack = [
    {
      icon: <i className="fab fa-aws"></i>,
      name: "AWS",
    },
    {
      icon: <i className="fa-solid fa-cloud"></i>,
      name: "Azure",
    },
    {
      icon: <i className="fa-brands fa-ubuntu"></i>,
      name: "Linux (Ubuntu)",
    },
    {
      icon: <i className="fa-brands fa-windows"></i>,
      name: "Windows Server",
    },
    {
      icon: <i className="fab fa-jenkins"></i>,
      name: "Jenkins",
    },
    {
      icon: <i className="fab fa-docker"></i>,
      name: "Docker",
    },
    {
      icon: <i className="fas fa-toolbox"></i>,
      name: "Terraform",
    },
    {
      icon: <i className="fas fa-tools"></i>,
      name: "Prometheus",
    },
    {
      icon: <i className="fas fa-desktop"></i>,
      name: "Grafana",
    },
    {
      icon: <i className="fab fa-git-alt"></i>,
      name: "Git",
    },
    {
      icon: <i className="fab fa-github"></i>,
      name: "Github",
    },
    {
      icon: <i className="fa-solid fa-scroll"></i>,
      name: "Bash Scripts",
    },
    {
      icon: <i className="fab fa-python"></i>,
      name: "Python (Scripting)",
    },
    {
      icon: <i className="fa-solid fa-database"></i>,
      name: "SQL",
    },
    {
      icon: <i className="fa-solid fa-database"></i>,
      name: "NoSQL",
    },
  ];
  const education = [
    {
      inst: "ACGCET Karaikudi",
      course: "Mechanical Engineering",
      level: "B.E",
      year: "Jun 2018 - Jul 2022",
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

  return (
    <div>
      <div className="flex items-center justify-between text-white">
        <div className="flex gap-x-2 items-center">
          <div>
            <i className="fa-solid fa-file-lines"></i>
          </div>
          <div className="font-bold text-xl">My Resume</div>
        </div>
        <a target="_blank" href="/vsb-resume-off.pdf">
          <div className="text-gray-300 hover:text-white flex gap-x-2 items-center cursor-pointer">
            <div className="pr-1">View</div>
            <div>
              <i className="fa-solid fa-file-lines"></i>
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
                Let’s build something visually stunning and user-friendly
                together, like a perfect movie climax.
              </div>
            </div>
          </div>
          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard rounded-lg group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200 shadow-md">
            <div>
              <h2 className="text-2xl text-white font-bold mb-5">Tech Stack</h2>
              <div>
                <div className="flex flex-wrap gap-x-5 gap-y-3 pr-2 my-text-grey-1">
                  {/* tech stack */}
                  {tech_stack.map((tech, index) => (
                    <div key={index} className="flex gap-x-2 gap-y-1 text-md">
                      <div>{tech.icon}</div>
                      <div>{tech.name}</div>
                    </div>
                  ))}
                </div>
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
                    <div className="text-gray-400">{education.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* past experience
          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard rounded-lg group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200 shadow-md">
            <div>
              <h2 className="text-2xl text-white font-bold mb-5">
                Past Experience
              </h2>
              <div>
                {experiences.map((experience, index) => (
                  <div className="my-text-grey-1 mb-6" key={index}>
                    <div className="font-bold text-white mb-2">
                      {experience.company}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {experience.role.split(",").map((role, index) => (
                        <div
                          key={index}
                          className="mb-1 my-bg-blue-1 w-fit rounded-xl pt-[0.05rem] pb-[0.05rem] pl-3 pr-3"
                        >
                          {role.trim()}
                        </div>
                      ))}
                    </div>
                    <div>{experience.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
           certfications */}
          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard rounded-lg group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200 shadow-md">
            <div>
              <h2 className="text-2xl text-white font-bold mb-5">
                Certifications
              </h2>
              <div>
                {/* certification loop */}
                {certification.map((certification, index) => (
                  <div key={index} className="text-white">
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
