import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Preloader from "./components/preloader.tsx";
import experiences from "./data/experiences.json";
import Projects from "./components/Projects.tsx";
import Resume from "./components/Resume.tsx";
import Experience from "./components/experience.tsx";
import "./index.css";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { LuFigma } from "react-icons/lu";

function App() {
  const [activeLink, setActiveLink] = useState("projects");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname.slice(1);
    setActiveLink(currentPath || "projects");
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handlePathChange = () => {
      if (location.pathname === "/resume") {
        setActiveLink("resume");
      } else if (location.pathname === "/experience") {
        setActiveLink("experience");
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

  const socials = [
    {
      name: "Gmail",
      link: "mailto:vsb.uidev@gmail.com",
      icon: <SiGmail />,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/vsbuidev/",
      icon: <FaLinkedin />,
    },
    {
      name: "Github",
      link: "https://github.com/vsbuidev/",
      icon: <FaGithub />,
    },
    {
      name: "Figma",
      link: "https://figma.com/@vsbuidev",
      icon: <LuFigma />,
    },
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const titles = [
    "Cloud Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "DevOps Engineer",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === titles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [titles.length]);

  return (
    <>
      <Preloader />
      <BrowserRouter>
        <div>
          <div className="flex flex-wrap w-full p-6 md:p-6 lg:p-[64px] xl:p-[100px] md:flex md:flex-wrap md:justify-between">
            <div className="w-full md:w-1/2 md:block pb-10 md:pb-0">
              <div className="md:w-4/5">
                <div className="flex justify-between items-center">
                  <div className="text-white font-bold text-4xl my-ubuntu-font">
                    Vishwa Balamurugan
                  </div>
                  <div className="md:hidden block text-gray-400 text-2xl">
                    <div className="cursor-pointer" onClick={toggleSidebar}>
                      <FaBars />
                    </div>
                  </div>
                </div>
                <div className="text-white font-semibold text-2xl pt-5">
                  <div className="text-slide-container">
                    <div className="text-slide" key={currentTextIndex}>
                      {titles[currentTextIndex]}
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-10 pb-10 text-gray-400 line-height-2 text-[1rem]">
                  I'm a {""}
                  <span className="text-white">cloud engineer</span> passionate
                  about designing scalable and reliable cloud solutions. I
                  specialize in optimizing infrastructure, enhancing system
                  performance, and ensuring seamless deployments.
                </div>
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
                      <div className="uppercase">Information</div>
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
                        <div className="text-white flex gap-2 text-xl items-center rounded-md px-2 py-2 ring-2 ring-inset ring-gray-500/10">
                          <span>{social.icon}</span>
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
                  <Route path="/" element={<Projects />} />
                  <Route path="/resume" element={<Resume />} />
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
              <div className="font-bold text-2xl">VSB_UI_DEV</div>
              <div className="cursor-pointer" onClick={toggleSidebar}>
                <MdClose className="text-3xl text-gray-400" />
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
                  <div className="uppercase">Projects</div>
                </div>
              </Link>
              <Link
                to="/experience"
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
                  <div className="uppercase">Information</div>
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
