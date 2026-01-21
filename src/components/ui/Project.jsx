import ProjectCard from "./ProjectCard";
import portfolioMobile from '../../assets/images/portfolioMobile.png'
import portfolioTablet from '../../assets/images/portfolioTablet.png'
import portfolioDesktop from '../../assets/images/portfolioDesktop.png';

const projects = [
  {
    role: 'Project Manager, Frontend developer.',
    thumbnail: portfolioTablet,
    image1: portfolioDesktop,
    image2: portfolioDesktop,
    title: "Portfolio Website",
    skills: ["React", "Tailwindcss", "Mobile First"],
    year: "2025",
    tags: ["REACT.JS", "TAILWINDCSS"],
    liveUrl: "https://my-portfolio-website-omega-five.vercel.app/",
    description: `Designed and developed a modern personal portfolio web application to showcase projects, 
                  skills, and professional experience. Built with React and Tailwind CSS, the site features a clean UI, 
                  responsive layout, smooth animations, and reusable components. Emphasis was placed on performance, 
                  accessibility, and scalability, delivering a polished, production-ready portfolio suitable for client 
                  presentations and personal branding.`
  }
];

const Project = () => {
  return (
    <section className="mb-15">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            projects={projects}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;

