import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

const HomePage = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <p className="kicker">Hi, I am Gabriel</p>
          <h1 className="h1">Full-Stack Software Engineer</h1>
          <p className="lead">
            I build practical web apps with clean architecture, thoughtful UX,
            and real-world features like auth, CRUD, and maps.
          </p>

          <div className="actions">
            <Link className="btn btn-primary" to="/projects">
              View Projects
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <h2 className="h2">Featured</h2>
          <p className="muted">A quick look at a few projects.</p>

          <ul className="list">
            {PROJECTS.slice(0, 3).map((p) => (
              <li key={p.title} className="listItem">
                <strong>{p.title}</strong> —{" "}
                <span className="muted">{p.description}</span>
              </li>
            ))}
          </ul>

          <div className="mt">
            <Link className="link" to="/projects">
              See all projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
