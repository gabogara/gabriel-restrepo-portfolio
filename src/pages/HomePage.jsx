import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

export default function HomePage() {
  return (
    <div>
      <section>
        <div>
          <p>Hi, I am Gabriel</p>
          <h1>Full-Stack Software Engineer</h1>
          <p>
            I build practical web apps with clean architecture, thoughtful UX,
            and real-world features like auth, CRUD, and maps.
          </p>

          <div>
            <Link to="/projects">View Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>Featured</h2>
          <p>A quick look at a few projects.</p>

          <ul>
            {PROJECTS.slice(0, 3).map((p) => (
              <li key={p.title}>
                <strong>{p.title}</strong> — <span>{p.description}</span>
              </li>
            ))}
          </ul>

          <div>
            <Link to="/projects">See all projects →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
