import { Plus } from 'lucide-react';

function Card({ imgSrc, title, description, price }) {
  return (
    <main className=' w-full h-[100vh] flex flex-col justify-center items-center '>
      <div className='flex flex-col justify-center items-center' >
        <img className='rounded-t-xl' src={imgSrc} alt="cofe" />
        <div class=' flex flex-col justify-center shadow-xl p-4 bg-black-500- w-full rounded-xl'>
          <div className='grid gap-3'>
            <div className="text ">
              <h3 className='font-bold'>{title}</h3>
              <p className='font-light text-xs'>{description}</p>
            </div>
            <div className="value">
            </div>
            <div className='flex '>
              <h3 className='font-semibold'>{price}</h3>
              <button className='flex justify-end w-full transition-transform duration-20 hover:scale-110'><Plus className='  bg-orange-800 color text-white rounded-md' /></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Card;