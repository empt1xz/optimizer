import { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [page, setPage] = useState("loading");

  function myButton() {
    invoke("prompt");
  }

  return (
    <>
      {page === "loading" && <Loading setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} />}
      {page === "dashboard" && <Dashboard />}
    </>
  );
}

export default App;
