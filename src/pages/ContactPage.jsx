import SectionHeader from "../components/SectionHeader";

const ContactPage = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <SectionHeader title="Contact" subtitle="Let’s connect" />

          <div className="card">
            <p className="lead">The fastest way to reach me is email.</p>

            <p className="muted">
              Email:{" "}
              <a href="mailto:gabriel.acosta.rest@gmail.com">
                gabriel.acosta.rest@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
