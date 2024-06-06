import Card from '../components/Card.jsx'
import { items } from '../utils/items.js'

function Home(){
    return (
        <>
          {
            items.map(item => ( 
                <Card imgSrc={item.image} title={item.title} description={item.description} price={item.prices.small}></Card>
            ))
        }
        </> 
    )
}

export default Home