import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

let greeting: string;
const getHours = new Date().getHours();
if (getHours < 12) {
  greeting = "Bom dia!";
}
if (getHours >= 12 && getHours <= 17) {
  greeting = "Boa Tarde!";
}
if (getHours >= 17 && getHours <= 24) {
  greeting = "Boa Noite!";
}
const today = format(new Date(), "d 'de' MMMM',' eeee'.'", { locale: ptBR });

export function Greetings() {
  return (
    <div>
      <h1>{greeting}</h1>
      <p>{today}</p>
    </div>
  );
}
