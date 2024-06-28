import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import SearchField from "../components/inputs/SearchField.jsx";
import FilterButton from "../components/buttons/FilterButton.jsx";
import CoffeeInfo from "../components/cards/CoffeeInfo.jsx";
import ItemNotFound from "./ItemNotFound.jsx";
import { categories } from "../data/categories.js";
import { items } from "../data/items.js";

function Home() {
  const [coffees, setCoffees] = useState(items);
  const { homeRef } = useOutletContext();

  function filterCoffeesBySearch(search) {
    const coffeesBySearch = items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()));
    setCoffees(coffeesBySearch);
  }

  function filterCoffeesByCategory(category) {
    const coffeesByCategory = items.filter((item) => item.category === category);
    setCoffees(coffeesByCategory);
  }

  function renderCoffees(coffees) {
    if (coffees.length === 0) {
      return <ItemNotFound />;
    }

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

  useEffect(() => {
    if (homeRef) {
      homeRef.current = { resetCoffees: () => setCoffees(items) };
    }
  }, [homeRef]);

  return (
    <>
      <main>
        <section className="flex justify-center my-10">
          <SearchField
            onChange={(e) => filterCoffeesBySearch(e)}
          />
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
