import { useState } from "react";
import SearchField from "../components/inputs/SearchField.jsx";
import FilterButton from "../components/buttons/FilterButton.jsx";
import CoffeeInfo from "../components/cards/CoffeeInfo.jsx";
import { categories } from "../utils/categories.js";
import { items } from "../utils/items.js";


function Home() {

  const [coffees, setCoffees] = useState(items);

  function filterCoffeesByCategory(value) {
    const filteredCoffees = items.filter(item => item.category === value);
    setCoffees(filteredCoffees);
  }

  function renderCoffees(coffees) {
    return coffees.map((item, index) => (
      <CoffeeInfo
      imgSrc={item.image}
      title={item.title}
      subtitle={item.subtitle}
      price={item.prices.small}
      key={index}
    />
    ));   
  }

  return (
    <>
      <main>
        <section className="flex justify-center my-10">
          <SearchField />
        </section>
        <div className="flex justify-center">
          <section className="flex justify-center flex-wrap gap-2 w-4/5">
            {categories.map((category, index) => (
              <FilterButton
                text={category}
                onClick={() => filterCoffeesByCategory(category)}
                key={index}
              />
            ))}
          </section>
        </div>
        <div className="flex justify-center my-10">
          <section className="flex justify-center flex-wrap gap-8 w-4/5">
            {renderCoffees(coffees)}
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
