// Simulação de uma resposta de uma requisição GET a uma API de cafés
// 
// id - informa o id do produto 
// title - informa o titulo do produto 
// subtitle -  informa o subtitulo do produto 
// description - informa a descrição do produto 
// prices -  informa o preço do produto 
// image - informa a imagens do produto 
// category - informa a categoria do produto 
// 

export const items = [
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
    image: 'src/assets/images/coffee/product/Caramel_Macchiato4.png',
    category:'Saborizados'
  },
  {
    id: 2,
    title: 'Expresso',
    subtitle: 'O clássico dos clássicos!',
    description: 'Um shot de café concentrado que desperta seus sentidos. Experimente-o na sua forma mais pura.',
    prices: {
        small: 3.50,
        medium: 4.50,
        large: 6.50
    },
    image: 'src/assets/images/coffee/product/Expresso3.png',
    category:'Expresso'
  },
  {
    id: 3,
    title: 'Café Americano',
    subtitle: 'Uma explosão de sabor americano!',
    description: 'Nosso espresso suave e robusto misturado com água quente para criar uma bebida reconfortante e revigorante.',
    prices: {
        small: 4.50,
        medium: 5.50,
        large: 7.50
    },
    image: 'src/assets/images/coffee/product/Cafe_Americano1.jpg',
    category:'Tradicionais'
  },
  {
    id: 4,
    title: 'Café Latte',
    subtitle: 'Um abraço em uma xícara!',
    description: 'Espresso cremoso combinado com leite vaporizado, resultando em uma experiência macia e reconfortante.',
    prices: {
        small: 4.50,
        medium: 5.90,
        large: 7.50
    },
    image: 'src/assets/images/coffee/product/Cafe_Latte3.jpg',
    category:'Cafés com Leite'
  },
  {
    id: 5,
    title: 'Cappuccino',
    subtitle: 'O equilíbrio perfeito de café, leite e espuma!',
    description: 'Nosso espresso encorpado misturado com leite vaporizado e uma generosa camada de espuma cremosa.',
    prices: {
        small: 5.50,
        medium: 7.60,
        large: 8.50
    },
    image: 'src/assets/images/coffee/product/Cappuccino1.jpg',
    category:'Cafés com Leite'
  },
  {
    id: 6,
    title: 'Macchiato',
    subtitle: 'Uma explosão de sabor em cada gole!',
    description: 'Nosso espresso marcante com um toque sutil de leite vaporizado para adoçar sua jornada.',
    prices: {
        small: 7.50,
        medium: 9.50,
        large: 10.90
    },
    image: 'src/assets/images/coffee/product/Macchiato2.jpg',
    category:'Cafés com Leite'
  },
  {
    id: 7,
    title: 'Mocha',
    subtitle: 'Uma indulgência irresistível!',
    description: 'Espresso rico e chocolate cremoso combinados com leite vaporizado e cobertos com uma nuvem de chantilly.',
    prices: {
        small: 11.99,
        medium: 15.50,
        large: 17.50
    },
    image: 'src/assets/images/coffee/product/Mocha1.jpg',
    category:'Saborizados'
  },
  {
    id: 8,
    title: 'Affogato',
    subtitle: 'Uma sobremesa e uma bebida em uma só!',
    description: 'Sorvete de baunilha luxuoso afogado em um shot de espresso quente. Uma explosão de prazer!',
    prices: {
        small: 15.50,
        medium: 18.50,
        large: 20.50
    },
    image: 'src/assets/images/coffee/product/Affogato1.jpg',
    category:''
  },
  {
    id: 9,
    title: 'Café Frappé',
    subtitle: 'Uma explosão de frescor e sabor!',
    description: 'Café gelado batido com gelo, leite e seu xarope favorito, proporcionando uma delícia refrescante para qualquer ocasião.',
    prices: {
        small: 11.50,
        medium: 15.50,
        large: 17.50
    },
    image: 'src/assets/images/coffee/product/Cafe_Frappe4.jpg',
    category:''
  },
  {
    id: 10,
    title: 'Flat White',
    subtitle: 'Uma experiência suave e sedosa!',
    description: 'Espresso encorpado misturado com leite vaporizado, sem a espuma, para um acabamento aveludado.',
    prices: {
        small: 9.99,
        medium: 12.50,
        large: 16.50
    },
    image: 'src/assets/images/coffee/product/Flat_White4.jpg',
    category:'Cafés com Leite'
  },
  {
    id: 11,
    title: 'Café Viennese',
    subtitle: 'Uma indulgência clássica com um toque especial!',
    description: 'Espresso suave coberto com chantilly sedoso e um toque de cacau, uma verdadeira obra-prima',
    prices: {
        small: 9.50,
        medium: 13.50,
        large: 15.99
    },
    image: 'src/assets/images/coffee/product/Cafe_Viennese2.jpg',
    category:''
  },
  {
    id: 12,
    title: 'Café Turco',
    subtitle: 'Sabor e Tradição em Cada Gole',
    description: 'Café forte e aromático, preparado de maneira tradicional, garantindo uma experiência intensa e memorável.',
    prices: {
        small: 4.60,
        medium: 5.50,
        large: 6.50
    },
    image: 'src/assets/images/coffee/product/Cafe_Turco1.jpg',
    category:'Filtrados'
  },
  {
    id: 13,
    title: 'Café com Rum',
    subtitle: 'Um deleite para os sentidos!',
    description: 'Espresso aromático com uma pitada de rum e uma generosa cobertura de chantilly. Uma verdadeira indulgência!',
    prices: {
        small: 6.50,
        medium: 8.50,
        large: 10.50
    },
    image: 'src/assets/images/coffee/product/Cafe_com_Rum4.jpg',
    category:'Cafés com Licor'
  },
  {
    id: 14,
    title: 'Café Irlandês',
    subtitle: 'Uma explosão de sabores!',
    description: 'Café quente misturado com o caloroso sabor do uísque irlandês, coberto com chantilly e um toque de açúcar mascavo. Uma experiência para ser saboreada.',
    prices: {
        small: 10.50,
        medium: 13.50,
        large: 16.50
    },
    image: 'src/assets/images/coffee/product/Cafe_Irlandes3.jpg',
    category:'Especiais'
  },
  {
    id: 15,
    title: 'Café Gelado',
    subtitle: 'O refresco perfeito para qualquer dia!',
    description: 'Café gelado, adoçado na medida certa e servido com cubos de gelo para uma experiência revigorante.',
    prices: {
        small: 6.50,
        medium: 8.50,
        large: 12.50
    },
    image: 'src/assets/images/coffee/product/Cafe_Gelado1.jpg',
    category:'Gelados'
  }
];
