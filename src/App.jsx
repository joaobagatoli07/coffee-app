import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Orders from './pages/Orders.jsx'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Carrinho" element={<Cart />}></Route>
        <Route path="/Pedidos" element={<Orders />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
