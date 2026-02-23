const ProjectCard = ({ project }) => {
  return (
    <article>
      <div>
        <h3>{project.title}</h3>
        <div>
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
        </div>
      </div>

      <p>{project.description}</p>

      <div>
        {project.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
