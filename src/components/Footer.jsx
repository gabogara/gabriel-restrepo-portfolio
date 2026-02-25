import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="muted">{new Date().getFullYear()} Gabriel Restrepo</p>
      </div>
    </footer>
  );
};
export default Footer;
