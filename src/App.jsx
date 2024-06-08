import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
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
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/Cadastro" element={<SignUp />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Carrinho" element={<Cart />}></Route>
        <Route path="/Pedidos" element={<Orders />}></Route>
      </Routes>
      {/* <SignIn /> */}
    </Router>
  );
}

export default App;
