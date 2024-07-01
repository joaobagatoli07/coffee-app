import SelectButon from '../components/buttons/SelectButton.jsx';
import CoffeeResume from '../components/cards/CoffeeResume.jsx'

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
        <section className="flex mt-10 h-72">
          <div className="flex w-3/5 items-center justify-center">
            <div className="flex w-11/12 h-5/6 rounded-lg border-solid bg-zinc-100 border-gray-800 shadow-[_10px_10px_15px_rgba(0,0,0,0.1)]">
              <CoffeeResume />
            </div>
            {/* <div className="flex w-2/5 items-center justify-center">
              <div className="flex items-center justify-center w-11/12 h-5/6 bg-zinc-100 rounded-lg shadow-[_10px_10px_25px_rgba(0,0,0,0.1)] border-solid border-slate-200">

              </div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  )
}


export default Cart;