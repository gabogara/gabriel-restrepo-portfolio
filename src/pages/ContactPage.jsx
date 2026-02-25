import SectionHeader from "../components/SectionHeader";

const ContactPage = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <SectionHeader title="Contact" subtitle="Let’s connect" />

          <div className="card">
            <p className="lead2">
              The fastest way to reach me is email or LinkedIn.
            </p>

            <p className="muted">
              Email:{" "}
              <a href="mailto:gabriel.acosta.rest@gmail.com">
                gabriel.acosta.rest@gmail.com
              </a>
            </p>
            <p className="muted">
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/gabriel-restrepo-acosta/">
                in/gabriel-restrepo-acosta
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
