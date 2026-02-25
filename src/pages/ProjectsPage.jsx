import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";

const ProjectsPage = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <SectionHeader title="Projects" subtitle="Selected work" />
          <div className="grid">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>
      <Link
        className="btn btn-primary"
        to="https://github.com/gabogara?tab=repositories"
      >
        See more on GitHub
      </Link>
    </div>
  );
};
export default ProjectsPage;
