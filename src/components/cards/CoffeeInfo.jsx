import PlusButton from "../buttons/PlusButton";

function CoffeeInfo({ imgSrc, title, subtitle, price }) {
  return (
      <div className="h-52 w-40 shadow-md rounded-md">
        <div className="h-2/4">
          <img src={imgSrc} className="h-full w-full rounded" alt={title}  />
        </div>
        <div className="h-2/4 p-2">
          <div className="h-4/6">
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-xs">{subtitle}</div>
          </div>
          <div className="h-2/6 flex justify-between">
            <div className="text-sm font-semibold">{`R$${price}`}</div>
            <div>
              <PlusButton />
            </div>
          </div>
        </div>
      </div>
  );
}

export default CoffeeInfo;