import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Orders from './pages/Orders.jsx'
import Footer from './components/layout/Footer.jsx'

function App() {
  return (
    <Router>
      <Nav />
      <Footer />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Carrinho" element={<Cart />}></Route>
        <Route path="/Pedidos" element={<Orders />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
