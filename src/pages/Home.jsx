import Card from '../components/Card.jsx'

function Home(){

    const items = [
        {
          id: 1,
          title: 'Caramel Macchiato',
          subtitle: 'Rico espresso com um toque doce de caramelo',
          description: 'Uma combinação perfeita de rico espresso, leite vaporizado e xarope de caramelo, coberto com um fio de calda de caramelo. Ideal para uma experiência de café doce e cremosa.',
          prices: {
              small: 3.50,
              medium: 4.50,
              large: 5.50
          },
          image: '../assets/images/Caramel_Macchiato1'
        }
    ]

    return (
        <>
          {
            items.map(item => ( 
                <Card imgSrc={item.image} title={item.title} description={item.description} price={item.price}></Card>
            ))
        }
        </> 
    )
}

export default Home