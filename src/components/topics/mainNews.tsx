import { Link } from "react-router-dom";

export function MainNews() {
  return (
    <>
      <div className="alertBox">
        <Link to="/topics/covid-19">
          <span>Notícias sobre a COVID-19:</span> Acompanhe toda a cobertura
          sobre o coronavírus (COVID-19)
        </Link>
      </div>

      <h1 className="Title">Principais Notícias</h1>
    </>
  );
}
