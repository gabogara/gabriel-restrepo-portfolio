import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

const HomePage = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container home-photo-container">
          <div className="profile-photo">
            <img
              className="profile-photo-img"
              src="https://i.imgur.com/cPvHfiW.jpeg"
              alt="Gabriel"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-hero">
          <p className="kicker">Hi, I am Gabriel</p>
          <h1 className="h1">Full-Stack Software Engineer</h1>
          <p className="lead home-hero-lead">
            I am a Full Stack Software Engineer focused on building reliable and
            easy-to-use web applications. I enjoy translating requirements into
            clean interfaces and implementing backend logic and data workflows.
            I leverage my curiosity to turn ambiguity into clear steps, and I
            thrive as an accountable, highly communicative leader in
            high-pressure environments. My goal is to join a team where I can
            make immediately impactful contributions, keep improving, and
            deliver measurable impact through thoughtful, well-structured work.
          </p>

          <div className="actions home-hero-actions">
            <Link className="btn btn-primary" to="/projects">
              View Projects
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Featured</h2>
            <p className="muted">A quick look at a few projects.</p>
            <div className="divider" />
          </div>

          <div className="grid">
            {PROJECTS.slice(0, 2).map((p) => (
              <div key={p.title} className="card">
                <h3 className="h3">{p.title}</h3>
                <p className="muted featured-desc">{p.description}</p>
                {p.tags && (
                  <div className="pillWrap">
                    {p.tags.map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

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
