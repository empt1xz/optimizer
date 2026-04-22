import Exitbar from "../Header/Header"
import Style from "./login.module.css"



export default function Login() {




    return ( 
        <main className={Style.main}>
            <Exitbar />
            <section className={Style.sectionLogin}>
                
                <form>
                    <input type="text" placeholder="KEY" />
                    <button>Sign In</button>
                </form>
            </section>


        </main>
    )
}