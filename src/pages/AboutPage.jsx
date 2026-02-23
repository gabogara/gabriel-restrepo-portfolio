import SectionHeader from "../components/SectionHeader";
import { SKILLS } from "../data/skills";

const AboutPage = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <SectionHeader title="About" subtitle="My background" />

          <p className="lead">
            I’m Gabriel Restrepo. I enjoy building full-stack applications that
            solve real problems and stay maintainable over time.
          </p>
          <p className="lead muted">
            I focus on clear APIs, reliable data models, and UI that feels
            straightforward to use.
          </p>

          <div className="stackLg">
            {SKILLS.map((group) => (
              <div key={group.category} className="card">
                <h3 className="h3">{group.category}</h3>
                <div className="pillWrap">
                  {group.items.map((s) => (
                    <span key={s} className="pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPage;
