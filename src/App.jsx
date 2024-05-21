import "./App.css";
import Card from './components/Card'
import Imag from './assets/images/Imagem do produto.png'

function App() {
  return (
    <>
      <Card title="João pedro" price="R$20,00" imgSrc={Imag} description="O mais viadão de todos"></Card>
    </>
  );
}

export default App;
