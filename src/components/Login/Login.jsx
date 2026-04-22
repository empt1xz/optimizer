import Style from "./login.module.css"



export default function Login() {




    return ( 
        <main className={Style.main}>
            <section className={Style.sectionLogin}>
                <h1>Welcome back!</h1>
                <form>
                    <label htmlFor="key">Key</label>
                    <input type="text" placeholder="Key" />
                    <button>Sign in</button>
                    
                </form>
            </section>


        </main>
    )
}