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
      icon: <i className="fab fa-js"></i>,
      name: "JavaScript(ES6+)",
    },
    {
      icon: <i className="fas fa-code"></i>,
      name: "TypeScript(Basics)",
    },
    {
      icon: <i className="fab fa-react"></i>,
      name: "React JS",
    },
    {
      icon: <i className="fab fa-node-js"></i>,
      name: "Node JS",
    },
    {
      icon: <i className="fas fa-code"></i>,
      name: "Gatsby",
    },
    {
      icon: <i className="fab fa-bootstrap"></i>,
      name: "Bootstrap",
    },
    {
      icon: <i className="fas fa-code"></i>,
      name: "Tailwind CSS",
    },
    {
      icon: <i className="fas fa-code"></i>,
      name: "MUI",
    },
    {
      icon: <i className="fab fa-php"></i>,
      name: "PHP (8x+)",
    },
    {
      icon: <i className="fab fa-python"></i>,
      name: "Python (Scripting)",
    },
    {
      icon: <i className="fas fa-database"></i>,
      name: "MySQL",
    },
    {
      icon: <i className="fab fa-linux"></i>,
      name: "Linux",
    },
    {
      icon: <i className="fas fa-server"></i>,
      name: "Apache",
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
      icon: <i className="fab fa-jenkins"></i>,
      name: "Jenkins",
    },
    {
      icon: <i className="fab fa-docker"></i>,
      name: "Docker",
    },
    {
      icon: <i className="fas fa-tools"></i>,
      name: "Prometheus",
    },
    {
      icon: <i className="fas fa-toolbox"></i>,
      name: "Grafana",
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
        <a target="_blank" href="/public/light-cv-01.pdf">
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
              <h2 className="text-2xl text-white font-bold mb-5">About Me</h2>
              <div className="sectionContentList text-gray-400">
                As a designer and developer with years of industry experience
                and freelancing opportunities, I create user interfaces as
                smooth as filter coffee. I have a strong grasp of various modern
                tools and technologies. Thriving in collaborative environments,
                I bring excellent communication with humour to the table, making
                me a valuable asset to any team.{" "}
              </div>

              <div className="sectionContentList text-gray-400 mt-2">
                Let’s build something visually stunning and user-friendly
                together, like a perfect tamil movie climax.
              </div>

              {/* <div className="sectionContentList text-gray-400 mt-2">
                "Talk is cheap, Show me the code." - Linus Torvalds as our
                legend speaks, here is some of mine in {""}
                <a
                  href={socialMedia.mySocials.github}
                  target="_blank"
                  className="text-primary"
                >
                  Github
                </a>{" "}
              </div> */}
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
          {/* past experience */}
          <div className="mb-3 pt-10 pb-10 pl-10 pr-10 projectCard rounded-lg group-hover:scale-[1.1] group-hover:drop-shadow-2xl transition duration-200 shadow-md">
            <div>
              <h2 className="text-2xl text-white font-bold mb-5">
                Past Experience
              </h2>
              <div>
                {/* experiences */}
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
          {/* certfications */}
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
