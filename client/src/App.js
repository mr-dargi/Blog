import NavBar from "./components/NavbarPanel";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Outlet />
    </div>
  );
}

export default App;
