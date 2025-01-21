import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Preloader from "./components/preloader.tsx";
import experiences from "./data/experiences.json";
import socialMedia from "./data/socialMedia.json";
import Projects from "./components/Projects.tsx";
import Resume from "./components/Resume.tsx";
import Experience from "./components/experience.tsx";
import axios from "axios";
import "./index.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [activeLink, setActiveLink] = useState("projects");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [, setFirstTimeLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComponent, setLoadingComponent] = useState("Loading...");
  const [totalRepos, setTotalRepos] = useState("-");

  useEffect(() => {
    const currentPath = window.location.pathname.slice(1); // remove the leading '/'
    setActiveLink(currentPath);
  }, []);

  useEffect(
    function () {
      if (isLoading === false) {
        setFirstTimeLoading(false);
        setLoadingComponent(""); // No change needed
        setTotalRepos(repos.length.toString());
      }
    },
    [isLoading, repos.length]
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handlePathChange = () => {
      if (location.pathname === "/resume") {
        setActiveLink("resume");
      } else {
        setActiveLink("projects");
      }
      setIsSidebarOpen(false);
    };

    handlePathChange();

    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    setIsSidebarOpen(false);
  };

  const api = "https://api.github.com/users/vsbuidev/repos?sort=pushed";
  const socials = [
    {
      name: "Gmail",
      link: "mailto:vsb.uidev@gmail.com",
      icon: <i className="fab fa-at"></i>,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/vsbuidev/",
      icon: <i className="fab fa-linkedin"></i>,
    },
    {
      name: "Github",
      link: "https://github.com/vsbuidev/",
      icon: <i className="fab fa-github"></i>,
    },
    {
      name: "Figma",
      link: "https://figma.com/@vsbuidev",
      icon: <i className="fab fa-figma"></i>,
    },
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(api);
        setRepos(response.data);
      } catch (error) {
        /* empty */
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <>
      <Preloader />
      <BrowserRouter>
        <div>
          <div className="flex flex-wrap w-full p-6 md:p-[100px] md:flex md:flex-wrap md:justify-between">
            <div className="w-full md:w-1/2 md:block pb-10 md:pb-0">
              <div className="md:w-4/5">
                <div className="flex justify-between items-center">
                  <div className="text-white font-bold text-4xl my-ubuntu-font">
                    Vishwa Balamurugan
                  </div>
                  <div className="md:hidden block text-gray-400 text-2xl">
                    <div className="cursor-pointer" onClick={toggleSidebar}>
                      <i className="fa-solid fa-bars-staggered"></i>
                    </div>
                  </div>
                </div>
                <div className="text-white font-semibold text-2xl pt-5">
                  Full-Stack Developer and UI Designer
                </div>
                <div className="pt-10 text-gray-400 line-height-2 text-[1rem]">
                  I'm a design-minded{" "}
                  <span className="text-white">engineer</span> focused on
                  building beautiful{" "}
                  <span className="text-white">front-end solutions</span> with
                  great <span className="text-white">user experiences</span> and{" "}
                  <span className="text-white">backend solutions</span> with
                  adapdable <span className="text-white">business logic</span>,
                  Currently I'm also exploring about cloud and devops
                  technologies.
                </div>
                <br />
                <br />
                <div className="">
                  <Link to="/" onClick={() => handleSetActiveLink("projects")}>
                    <div
                      className={`${
                        activeLink === "projects" ? "nav-link-active" : ""
                      } flex group items-center text-gray-400 hover:text-white gap-3 w-fit justify-items-center cursor-pointer text-xs tracking-[.2em] mb-5`}
                    >
                      <div>00</div>
                      <div>
                        <div className="bg-white w-6 h-[1px] group-hover:w-16 duration-300"></div>
                      </div>
                      <div className="uppercase">Projects</div>
                    </div>
                  </Link>
                  <Link
                    to="/experience"
                    onClick={() => handleSetActiveLink("experience")}
                  >
                    <div
                      className={`${
                        activeLink === "experience" ? "nav-link-active" : ""
                      } flex group items-center text-gray-400 hover:text-white gap-3 w-fit justify-items-center cursor-pointer text-xs tracking-[.2em] mb-5`}
                    >
                      <div>01</div>
                      <div>
                        <div className="bg-white w-6 h-[1px] group-hover:w-16 duration-300"></div>
                      </div>
                      <div className="uppercase">Experience</div>
                    </div>
                  </Link>
                  <Link
                    to="/resume"
                    onClick={() => handleSetActiveLink("resume")}
                  >
                    <div
                      className={`${
                        activeLink === "resume" ? "nav-link-active" : ""
                      } flex group items-center text-gray-400 hover:text-white gap-3 w-fit justify-items-center cursor-pointer text-xs tracking-[.2em]`}
                    >
                      <div>02</div>
                      <div>
                        <div className="bg-white w-6 h-[1px] group-hover:w-16 duration-300"></div>
                      </div>
                      <div className="uppercase">Resume</div>
                    </div>
                  </Link>
                </div>
                <div className="pt-10 md:pt-[6.8rem]">
                  <div className="flex flex-wrap gap-3">
                    {socials.map((social, index) => (
                      <a
                        key={index}
                        target="_blank"
                        href={social.link}
                        className="cursor-pointer"
                      >
                        <div className="text-white flex gap-2 text-xl items-center rounded-md px-2 py-1 ring-1 ring-inset ring-gray-500/10">
                          <span>{social.icon}</span>
                          {/* {social.name} */}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Projects
                        repos={repos}
                        totalRepos={totalRepos}
                        loadingComponent={loadingComponent}
                        projects={[]}
                      />
                    }
                  />
                  <Route
                    path="/resume"
                    element={
                      <Resume
                        experiences={experiences}
                        socialMedia={socialMedia}
                      />
                    }
                  />
                  <Route
                    path="/experience"
                    element={<Experience experiences={experiences} />}
                  />
                </Routes>
              </div>
            </div>
          </div>
          <div
            className={`sidebar ${
              isSidebarOpen ? "open" : ""
            } fixed p-10 shadow-2xl`}
          >
            <div className="flex flex-wrap justify-between mb-10 items-center">
              <div className="font-bold text-2xl">Vishwa</div>
              <div className="cursor-pointer" onClick={toggleSidebar}>
                <i className="fa-solid fa-times text-xl text-gray-400"></i>
              </div>
            </div>

            <div>
              <Link to="/" onClick={() => handleSetActiveLink("projects")}>
                <div
                  className={`${
                    activeLink === "projects" ? "nav-link-active2" : ""
                  } flex gap-2 text-[1.1rem] mb-5 text-gray-400 tracking-[0.2em]`}
                >
                  <div>00</div>
                  <div className="uppercase">Project</div>
                </div>
              </Link>
              <Link
                to="/resume"
                onClick={() => handleSetActiveLink("experience")}
              >
                <div
                  className={`${
                    activeLink === "experience" ? "nav-link-active2" : ""
                  } flex gap-2 text-[1.1rem] text-gray-400 tracking-[0.2em] mb-5`}
                >
                  <div>01</div>
                  <div className="uppercase">Experience</div>
                </div>
              </Link>
              <Link to="/resume" onClick={() => handleSetActiveLink("resume")}>
                <div
                  className={`${
                    activeLink === "resume" ? "nav-link-active2" : ""
                  } flex gap-2 text-[1.1rem] text-gray-400 tracking-[0.2em]`}
                >
                  <div>02</div>
                  <div className="uppercase">Resume</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
