import SearchField from "../components/inputs/SearchField.jsx"
import FilterButton from "../components/buttons/FilterButton.jsx"
import Card from "../components/cards/Card.jsx";
import { items } from "../utils/items.js";

function Home() {
  return (
    <>
      <main className="h-screen">
        <section className="flex justify-center">
          <SearchField />
        </section>
        <section className="flex">
          <FilterButton text="Cappucino" color="bg-amber-800"/>
        </section>
        <section className="flex justify-center"></section>
      </main>
      {/* {items.map((item, index) => (
        <Card
          imgSrc={item.image}
          title={item.title}
          description={item.description}
          price={item.prices.small}
          key={index}
        ></Card>
      ))} */}
    </>
  );
}

export default Home;
