import { useState, useEffect, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog"; 
import { Cross2Icon } from "@radix-ui/react-icons";
import { HiOutlineEye } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cn } from "@/lib/Utils";

// UI helpers

const Features = ({ children, others }) => (
  <div className={cn("bg-accent-primary/15 w-22 rounded-2xl md:rounded-3xl text-center py-1.5 text-xs", others)}>
    <p className="font-medium text-accent-primary">{children}</p>
  </div>
);

const P = ({ children, others }) => (
  <p className={cn("text-text-secondary/80 font-semibold", others)}>
    {children}
  </p>
);

const IconContainer = ({ onPreview, liveUrl }) => {
  const iconHover = "group-hover:scale-105 group-hover:translate-y-[1px] group-hover:text-white";
  const containerHover = "soft-transition hover:scale-105 hover:bg-accent-primary";

  return (
    <div className="flex gap-2">
      <div
        className={cn("group bg-white rounded-full flex items-center justify-center w-11 h-11 cursor-pointer", containerHover)}
        onClick={onPreview}
      >
        <HiOutlineEye className={cn("w-6 h-6 text-accent-primary", iconHover)} />
      </div>

      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("group bg-white rounded-full flex items-center justify-center w-11 h-11", containerHover)}
      >
        <MdOpenInNew className={cn("w-6 h-6 text-accent-primary", iconHover)} />
      </a>
    </div>
  );
};

// Main Component 

const ProjectCard = ({ project, index, projects }) => {
  const cardRef = useRef(null);
  const [viewActive, setViewActive] = useState(false);

  // Modal state logic
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(index);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (touchDevice) setViewActive(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const openModal = () => {
    setCurrent(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const next = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setDirection("left");
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const activeProject = projects[current];
  const navClasses = 'sm:text-base text-sm inline-flex items-center gap-2 mt-4 sm:px-5 sm:py-2 px-2.5 py-1.5 bg-accent-primary text-white font-bold rounded-md hover:scale-x-105 transition-all active:scale-90'
  return (
    <>
      {/* radix modal */}
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay
            className="fixed inset-0 z-[100] bg-bg-primary/40 overflow-auto animate-in fade-in duration-300"
          >
            <Dialog.Content
              className="mx-auto w-full max-w-3xl xl:max-w-[80%] bg-bg-card sm:rounded-xl focus:outline-none"
            >
              {/* Header */}
              <div className="w-full flex bg-bg-primary items-center justify-between p-4 sm:p-6">
                <div>
                  <Dialog.Title className="text-2xl font-bold text-text-primary">
                    {activeProject.title}
                  </Dialog.Title>
                  <Dialog.Description className="text-text-secondary text-base">
                    {activeProject.year}
                  </Dialog.Description>
                </div>

                <div className="flex items-center sm:flex-row flex-col-reverse sm:gap-6 gap-2">
                  <span className="text-text-secondary/40 font-mono">
                    {current + 1}/{projects.length}
                  </span>
                  <Dialog.Close asChild className="sm:focus:outline-none">
                    <button
                      className={cn(
                        "hover:rotate-90 text-text-secondary active:scale-90",
                        "flex items-center justify-center md:w-13 md:h-13 w-8 h-8 rounded-full bg-text-primary/10",
                        "transform transition-all duration-300 ease-out hover:bg-accent-primary"
                      )}
                      aria-label="Close"
                    >
                      <Cross2Icon width={28} height={28} />
                    </button>
                  </Dialog.Close>
                </div>
              </div>
              {/* main content body */}
              <div className="w-full mx-auto mt-8 flex flex-col gap-6 p-4 xl:p-8">
                {/* Description */}
                <div className="flex flex-col xl:flex-row gap-3">
                  {/* content, role, description, liveSite, deliverables */}
                  <div className="space-y-5 xl:basis-[42%] xl:flex-none">
                      <p className="text-base text-text-primary md:text-xl leading-relaxed">
                    <span className="text-text-secondary/50">My role:</span>{" "}
                    {activeProject.role}
                  </p>

                  <p className="text-base md:text-xl leading-relaxed text-text-primary">
                    <span className="text-text-secondary/50">Description:</span>{" "}
                    {activeProject.description}
                  </p>

                  <div className="flex flex-col gap-2 md:text-xl leading-relaxed">
                    <span className="text-text-secondary/50">
                      Skills and Deliverables:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {activeProject.skills.map((skill, i) => (
                        <Features key={i} others='md:text-sm py-2 w-24'>{skill}</Features>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:text-base text-sm group inline-flex items-center gap-2 mt-4 sm:px-5 sm:py-2 px-2.5 py-1.5 bg-accent-primary text-white font-bold rounded-3xl hover:scale-x-105 transition-all active:scale-90"
                  >
                    View Live Site
                    <MdOpenInNew
                      size={20}
                      className="group-hover:rotate-[45deg] transition-all"
                    />
                  </a>
                  </div>
                  
                  <div className="flex flex-col gap-3 md:gap-5 xl:flex-1">
                    <img
                      src={activeProject.image1}
                      alt={activeProject.title}
                      className="w-full h-auto rounded-lg"
                    />
                    <img
                      src={activeProject.image2}
                      alt={activeProject.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>

                </div>

  
                
                {/* Navigation */}
                <div className="flex justify-between">
                  <button onClick={next} className={navClasses}>
                    Previous
                  </button>
                  <button onClick={prev} className={navClasses}>
                    Next
                  </button>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>


      <div ref={cardRef}>
        <div className="project-container relative overflow-hidden rounded-xl">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="project-image soft-transition rounded-xl"
          />
          
          {/* Overlay */}
          <div
            className={cn(
              "overlayMiddle projectGradient flex flex-col justify-between p-6 absolute text-white w-full h-full",
              viewActive ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="flex justify-end items-end h-full">
              <IconContainer
                onPreview={openModal}
                liveUrl={project.liveUrl}
              />
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex gap-1">
            {project.tags.map((tag, i) => (
              <Features key={i}>{tag}</Features>
            ))}
          </div>
          <P others="text-sm">{project.year}</P>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
