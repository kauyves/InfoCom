import Navbar from "./components/NavBar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;