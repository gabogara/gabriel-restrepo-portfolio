import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <article className="card projectCard">
      <div className="projectCard_top">
        <h3 className="h3">{project.title}</h3>
        <div className="projectCard_links">
          <a
            className="link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {project.live && (
            <a
              className="link"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}
        </div>
      </div>

      <p className="muted">{project.description}</p>

      <div className="pillWrap">
        {project.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
