import { useState } from "react";

interface ProjectCardProps {
  repoName: string;
  link: string;
  demoLink?: string;
  lang: string | string[];
  imageUrl?: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  repoName,
  link,
  demoLink,
  imageUrl,
  description,
}) => {
  const [expanded, setExpanded] = useState(false);

  // Function to truncate description
  const truncateDescription = (text: string, maxLength: number) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  // Determine if description needs truncation
  const needsTruncation = description && description.length > 100;
  const displayDescription = expanded
    ? description
    : truncateDescription(description || "", 100);

  // Convert lang to array if it's a string
  // const languages = Array.isArray(lang) ? lang : [lang].filter((l) => l !== "");

  return (
    <>
      <div className="mb-3 p-5 projectCard rounded-lg hover:scale-[1.02] hover:drop-shadow-2xl transition duration-300 flex flex-col md:flex-row gap-5 h-full">
        {/* Image container */}
        <div className="overflow-hidden rounded-md bg-gray-800 flex items-center justify-center w-full md:w-1/3 h-48 md:h-auto shrink-0">
          <img
            src={imageUrl}
            loading="lazy"
            className="object-cover w-full h-full hover:scale-105 transition duration-500"
            alt={`${repoName} project thumbnail`}
          />
        </div>

        {/* Content container */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-xl text-white font-bold mb-3">{repoName}</h2>

            {/* {languages.length > 0 && (
              <div className="mt-2 flex gap-2 flex-wrap mb-3">
                {languages.map((technology, index) => (
                  <div key={index} className="projectTags otherProjectTags">
                    {technology}
                  </div>
                ))}
              </div>
            )} */}

            {description && (
              <div className="text-gray-300 mb-4 text-sm">
                <p>{displayDescription}</p>
                {needsTruncation && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setExpanded(!expanded);
                    }}
                    className="text-gray-500 hover:text-gray-400 text-xs mt-1 font-medium"
                  >
                    {expanded ? "Show less" : "Read more"}
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-2 items-center mt-3">
            {demoLink && (
              <a
                href={demoLink}
                className="text-gray-300 hover:text-white mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-globe text-gray-400"></i>
                  <span className="text-sm font-medium">Live Demo</span>
                </div>
              </a>
            )}

            {link && (
              <a
                href={link}
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-github text-gray-400"></i>
                  <span className="text-sm font-medium">Source Code</span>
                </div>
              </a>
            )}

            <div className="ml-auto">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-right text-gray-400 hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
