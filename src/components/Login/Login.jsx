import { KeySquare } from "lucide-react";
import Exitbar from "../Header/Header";
import Style from "./login.module.css";

export default function Login({setPage}) {

    function handleLogin () {
        setPage("dashboard")
    }

  return (
    <main className={Style.main}>
      <Exitbar />
      <section>
        <div>
          <KeySquare color="rgba(0, 255, 115, 0.212)" />{" "}
          <input type="text" placeholder="Digite sua Key aqui" />
        </div>

        <input onClick={handleLogin} type="button" value="Acess" />
      </section>
    </main>
  );
}
