import ProjectCard from "./ProjectCard";
import portfolioPicOne from '../../assets/images/portfolione.png';
import portfolioPicTwo from '../../assets/images/portfoliotwo.png';
import flintmallPicOne from '../../assets/images/flintmallone.png';
import flintmallPicTwo from '../../assets/images/flintmalltwo.png';

const projects = [
  {
    role: 'Project Manager, Frontend developer.',
    thumbnail: portfolioPicOne,
    image1: portfolioPicOne,
    image2: portfolioPicTwo,
    title: "Portfolio Website",
    skills: ["React ●", "Tailwindcss ●", "Mobile First"],
    year: "2025",
    tags: ["REACT.JS", "TAILWINDCSS"],
    liveUrl: "https://my-portfolio-website-omega-five.vercel.app/",
    description: `Designed and developed a modern personal portfolio web application to showcase projects, 
                  skills, and professional experience. Built with React and Tailwind CSS, the site features a clean UI, 
                  responsive layout, smooth animations, and reusable components. Emphasis was placed on performance, 
                  accessibility, and scalability, delivering a polished, production-ready portfolio suitable for client 
                  presentations and personal branding.`
  },
  {
    role: "Frontend Developer",
    thumbnail: flintmallPicTwo,
    image1: flintmallPicTwo,
    image2: flintmallPicOne,
    title: "Multivendor Marketplace Platform",
    skills: [
              "React.js ●",
              "Zustand State Management ●",
              "Tailwind CSS ●",
              "Mobile-First Design ●",
              "Multivendor Architecture ●",
              "In-App Chat System ●",
              "Admin Dashboard ●",
              "Cross-Browser Compatibility ●",
              "Authentication & User Roles ●",
              "Marketplace UI/UX"
    ],
    year: "2026",
    tags: ["REACT.JS", "ZUSTAND"],
    liveUrl: "https://flintmallonline.com/",
    description: `Currently developing a scalable multivendor marketplace platform using React.js, 
            Zustand for state management, and Tailwind CSS with a mobile-first approach. The platform supports 
            buying and selling, posting ads, ad boosting, category-based listings, and in-app real-time chat. 
            Users can register as personal or business accounts, manage listings, and interact securely. 
            The project also includes an admin dashboard for moderation, user management, and content control, 
            with full cross-browser compatibility and performance-focused UI/UX architecture.`
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
            data-aos='zoom-in-up'
            data-delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;

