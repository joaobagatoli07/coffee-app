import SearchField from "../components/inputs/SearchField.jsx"
import FilterButton from "../components/buttons/FilterButton.jsx"
import { categories } from "../utils/categories.js";
import Card from "../components/cards/Card.jsx";
import { items } from "../utils/items.js";

function Home() {
  return (
    <>
      <main className="h-screen">
        <section className="flex justify-center my-10">
          <SearchField />
        </section>
        <div className="flex justify-center">
          <section className="flex justify-center flex-wrap gap-2 w-4/5">
            {categories.map((category, index) => (
              <FilterButton
                text={category}
                key={index}
              />
            ))}
          </section>
        </div>
        {/* <div className="flex flex-wrap justify-center">
          <section className="flex w-4/5">
            {items.map((item, index) => (
              <Card
                imgSrc={item.image}
                title={item.title}
                description={item.description}
                price={item.prices.small}
                key={index}
              ></Card>
            ))}
          </section>
        </div> */}
      </main>
    </>
  );
}

export default Home;
