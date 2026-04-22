import { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import Login from "./components/Login/Login"
import './App.css'

function App() {
  const [page, setPage] = useState("login");

  return <>

  {page === "loading" && <Loading />}
  {page === "login" && <Login />}
  
  
  
  </>;
}

export default App;
