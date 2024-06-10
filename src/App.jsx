import Nav from "./components/layout/Nav.jsx";
import Footer from "./components/layout/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
