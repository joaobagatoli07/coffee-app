import Nav from "./components/layout/Nav.jsx";
import Footer from "./components/layout/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideNavAndFooterRoutes = ['/login', '/cadastro'];
  const shouldShowNavAndFooter = hideNavAndFooterRoutes.includes(location.pathname);
  
  return (
    <>
      { !shouldShowNavAndFooter && <Nav />}
      <Outlet />
      { !shouldShowNavAndFooter && <Footer />}
    </>
  );
}

export default App;
