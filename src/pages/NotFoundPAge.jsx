import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <section>
        <div>
          <h1>404</h1>
          <p>That page doesn’t exist.</p>
          <Link to="/">Go Home</Link>
        </div>
      </section>
    </div>
  );
}
