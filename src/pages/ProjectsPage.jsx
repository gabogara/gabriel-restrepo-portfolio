import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";

const ProjectsPage = () => {
  return (
    <div>
      <section>
        <div>
          <SectionHeader title="Projects" subtitle="Selected work" />
          <div>
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProjectsPage;
