import PlusButton from "../buttons/PlusButton";
import { useNavigate } from "react-router-dom";

function CoffeeInfo({ imgSrc, title, subtitle, price }) {
  const navigate = useNavigate();

  function navigateToProductPage() {
    navigate("/produto", {
      state: { imgSrc, title, subtitle, price }
    });
  }

  return (
      <div className="h-52 w-40 shadow-lg rounded-lg border border-solid border-slate-300">
        <div className="h-2/4">
          <img src={imgSrc} className="h-full object-cover w-full rounded " alt={title}  />
        </div>
        <div className="h-2/4 p-2">
          <div className="h-4/6">
            <div className="text-sm text-amber-900 font-semibold">{title}</div>
            <div className="text-xs">{subtitle}</div>
          </div>
          <div className="h-2/6 flex justify-between">
            <div className="text-sm font-semibold">{`R$${price}`}</div>
            <div onClick={navigateToProductPage}>
              <PlusButton />
            </div>
          </div>
        </div>
      </div>
  );
}

export default CoffeeInfo;