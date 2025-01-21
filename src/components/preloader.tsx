import { useState, useEffect } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for when page content is fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Small delay for smooth transition
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ background: "var(--col-dark)" }}
    >
      <div className="relative h-0.5 w-48">
        <div
          className="absolute h-full w-full"
          style={{
            background: "var(--text-light)",
            animation: "lineWobble 1.5s ease-in-out infinite",
          }}
        ></div>
      </div>

      <div className="mt-4 text-lg" style={{ color: "var(--text-light)" }}>
        Loading...
      </div>
    </div>
  );
};

export default Preloader;
