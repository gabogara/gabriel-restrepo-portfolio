import SectionHeader from "../components/SectionHeader";

const ContactPage = () => {
  return (
    <div>
      <section>
        <div>
          <SectionHeader title="Contact" subtitle="Let’s connect" />

          <div>
            <p>The fastest way to reach me is email.</p>

            <p>
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
