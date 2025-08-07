import { Link } from "../Link";

export default function Page404() {
  return (
    <>
      <div className="e404">
        <h1>ERROR 404</h1>
        <img src="https://www.dochipo.com/wp-content/uploads/2024/01/404-Error-Animation-4.gif" alt="error 404, que paso?" />
        <Link to="/">Volver al Home</Link>
      </div>
    </>
  );
}
