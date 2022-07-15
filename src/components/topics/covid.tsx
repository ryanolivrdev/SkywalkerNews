import { Link } from "react-router-dom";

export function Covid() {
  return (
    <>
      <div className="alertBox">
        <Link to="/topics/principaisnoticias">
          <span>Leia as principais Notícias do dia:</span> Acompanhe toda a
          cobertura de todos os jornais
        </Link>
      </div>

      <h1 className="Title">Covid-19</h1>
    </>
  );
}
