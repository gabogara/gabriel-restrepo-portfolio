import SectionHeader from "../components/SectionHeader/SectionHeader";
import { SKILLS } from "../data/skills";

const AboutPage = () => {
  return (
    <div>
      <section>
        <div>
          <SectionHeader title="About" subtitle="My background" />

          <p>
            I’m Gabriel Restrepo. I enjoy building full-stack applications that
            solve real problems and stay maintainable over time.
          </p>
          <p>
            I focus on clear APIs, reliable data models, and UI that feels
            straightforward to use.
          </p>

          <div>
            {SKILLS.map((group) => (
              <div key={group.category}>
                <h3>{group.category}</h3>
                <div>
                  {group.items.map((s) => (
                    <span key={s}>{s}</span>
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
