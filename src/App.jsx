import Nav from "./components/layout/Nav.jsx";
import Footer from "./components/layout/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { useRef } from "react";

function App() {
  const location = useLocation();
  const hideNavAndFooterRoutes = ['/login', '/cadastro'];
  const shouldShowNavAndFooter = hideNavAndFooterRoutes.includes(location.pathname);
  const homeRef = useRef();

  return (
    <>
      {!shouldShowNavAndFooter && <Nav resetCoffees={() => homeRef.current.resetCoffees()} />}
      <Outlet context={{ homeRef }} />
      {!shouldShowNavAndFooter && <Footer />}
    </>
  );
}

export default App;
