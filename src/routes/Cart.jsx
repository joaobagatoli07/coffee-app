import SelectButon from '../components/buttons/SelectButton.jsx';
import CoffeeResume from '../components/cards/CoffeeResume.jsx';
import CoffeePrice from '../components/cards/CoffeePrice.jsx';

function Cart() {
  return (
    <div className="h-screen flex justify-center">
      <main className="w-4/5">
        <section className="flex justify-center mt-10">
          <span className="font-rosarivo text-4xl text-amber-800">Carrinho</span>
        </section>
        <section className="flex justify-center mt-10">
          <SelectButon />
        </section>
        <section className="flex justify-center h-72">
          <div className="flex items-center gap-10">
            <div>
              <CoffeeResume />
            </div>
            <div>
              <CoffeePrice />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


export default Cart;