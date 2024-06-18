
function CoffeeDetails({ imgSrc, title, subtitle, description }) {

    return (
        <div class="flex h-52 w-96 shadow-lg rounded-lg border border-solid border-slate-300">
            <div class="flex justify-center w-2/5" >
                <img src={imgSrc} className="flex h-32 w-62 justify-center mt-6 rounded-lg" alt={title} />
            </div>
            <div className="w-3/5 ">

            </div> 
        </div>
    );
}

export default CoffeeDetails