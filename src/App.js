import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
