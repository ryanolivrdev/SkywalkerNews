import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import logo from "../../assets/logobg.png";
import { useTimer } from "react-timer-hook";

export function NotFound() {
  const navigate = useNavigate();
  let expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 15);
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => navigate("/"),
  });

  return (
    <Container>
      <div className="notFound">
        <h1>404</h1>
        <p>Page not found</p>
      </div>
      <div className="references">
        <h2>Há muito tempo,</h2>
        <h2>em uma galáxia muito, muito distante…</h2>
      </div>
      <div className="textField">
        <p>
          Back home in {minutes}:{seconds}
        </p>
        <Link to="/">Home Page</Link>
        <img src={logo} alt="" />
      </div>
    </Container>
  );
}
