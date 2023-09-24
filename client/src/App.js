import NavBar from "./components/NavbarPanel";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container-fluid">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
