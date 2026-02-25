import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="h2">404</h1>
          <p className="muted">That page doesn’t exist.</p>
          <Link className="btn btn--primary" to="/">
            Go Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
