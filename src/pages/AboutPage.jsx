import SectionHeader from "../components/SectionHeader";
import { SKILLS } from "../data/skills";

const AboutPage = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container home-photo-container2">
          <div className="profile-photo2">
            <img
              className="profile-photo-img"
              src="https://i.imgur.com/WqKfE7g.jpeg"
              alt="Gabriel"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader title="About" subtitle="My background" />

          <p className="lead home-hero-lead">
            I am a Full Stack Software Engineer focused on building reliable and
            easy to use web applications. I like to work end to end, from
            translating requirements into clean interfaces to implementing
            backend logic and data workflows. I'm a very curious and fast
            learner, and I like to turn ambiguity into clear steps. I also bring
            strong transferable skills in leadership and high pressure
            environments: communication, accountability and teamwork. My goal is
            to join a team where I can contribute immediately, keep improving
            and deliver measurable impact through thoughtful, well structured
            work.
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
