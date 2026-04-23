import Style from "./loading.module.css";
import { useEffect } from "react";

export default function Loading({ setPage }) {
  useEffect(() => {
    let i = setTimeout(() => {
      setPage("login");
    }, 3000);

    return () => clearTimeout(i);
  }, []);

  return (
    <>
      <main className={Style.main}>
        <h1>Optimizer Pro</h1>
        <div className={Style.loading}></div>
        <code>Initializing Application...</code>
      </main>
    </>
  );
}
