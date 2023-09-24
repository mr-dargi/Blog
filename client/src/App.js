import NavBar from "./components/NavbarPanel";
import CategoryBox from "./components/CategoryBox";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="main container">
        <CategoryBox />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
