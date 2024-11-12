import React, { useState, useRef } from 'react';
import './Explore.css';
import Sidebar from '../SideBar';

const drinks = [
  { name: "BARBADOS PUNCH", link: "./receitas/barbadosPunch.html", image: "../../../public/receitas/barbados.jpg" },
  { name: "BLOODY MARY", link: "./receitas/bloodyMary.html", image: "../../../public/receitas/bloodyMary.jpg" },
  { name: "CAIPIRINHA", link: "./receitas/caipirinha.html", image: "../../../public/receitas/caipirinha.jpg" },
  { name: "CASINO", link: "./receitas/casino.html", image: "../../../public/receitas/casino.jpg" },
  { name: "CUCUMBER GIN", link: "./receitas/cucumberGin.html", image: "../../../public/receitas/cucumberGin.jpg" },
  { name: "GODFATHER", link: "./receitas/godfather.html", image: "../../../public/receitas/godfather.jpg" },
  { name: "GRASSHOPPER", link: "./receitas/grasshopper.html", image: "../../../public/receitas/grasshopper.jpg" },
  { name: "GREEN FIZZ", link: "./receitas/greenFizz.html", image: "../../../public/receitas/greenFizz.jpg" },
  { name: "MAI TAI", link: "./receitas/maiTai.html", image: "../../../public/receitas/maiTai.jpg" },
  { name: "MARGARITA", link: "./receitas/margarita.html", image: "../../../public/receitas/margarita.jpg" },
  { name: "MOJITO DE MORANGO", link: "./receitas/mojitoMorango.html", image: "../../../public/receitas/mojitoMorango.jpg" },
  { name: "MOSCOW MULE", link: "./receitas/moscowMule.html", image: "../../../public/receitas/moscow.jpg" },
  { name: "NEGRONI", link: "./receitas/negroni.html", image: "../../../public/receitas/negroni.jpg" },
  { name: "OLD FASHIONED", link: "./receitas/oldFashioned.html", image: "../../../public/receitas/oldFashioned.jpg" },
  { name: "ORANGE NEGRONI", link: "./receitas/orangeNegroni.html", image: "../../../public/receitas/orangeNegroni.jpg" },
  { name: "QUARTER MILLER", link: "./receitas/quarterMiller.html", image: "../../../public/receitas/quarterMiller.jpg" },
  { name: "RAMOS GIN", link: "./receitas/ramosGin.html", image: "../../../public/receitas/ramosGin.jpg" },
  { name: "SOUTHSIDE", link: "./receitas/southside.html", image: "../../../public/receitas/southside.jpg" },
  { name: "TEQUILA COLLINS", link: "./receitas/tequilaCollins.html", image: "../../../public/receitas/tequilaCollins.jpg" },
  { name: "WHISKY SOUR", link: "./receitas/whiskySour.html", image: "../../../public/receitas/whiskySour.jpg" }
];

function Explore() {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const detailsRef = useRef(null); // Referência para o elemento dos detalhes do drink

  const showDrinkDetails = (drink) => {
    setSelectedDrink(drink); // Armazena o drink selecionado no estado
    detailsRef.current.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente para os detalhes do drink
  };

  const clearDrinkDetails = () => {
    setSelectedDrink(null); // Limpa os detalhes do drink
  };

  return (
    <div className="explore">
      <Sidebar />
      <h2>Explorar</h2>
      <p>Descubra novos drinks!</p>
      <div className="explore-content">
        {drinks.map((drink, index) => (
          <div key={index} className="drink-card" onClick={() => showDrinkDetails(drink)}>
            <img src={drink.image} alt={drink.name} className="drink-card-image" />
            <p>{drink.name}</p>
          </div>
        ))}
      </div>

    {/* Exibe detalhes do drink selecionado */}
    {selectedDrink && (
        <div className="drink-details" ref={detailsRef}>
          <header>
            <h1>{selectedDrink.name}</h1>
          </header>

          <img src={selectedDrink.image} alt={selectedDrink.name} className="drink-large-image" />

          <div className="textoReceita">
            <p>
              Esta é uma receita antiga. Na verdade, ela contém muitas coisas. O
              que acontece com essas bebidas tropicais - alguns de vocês podem
              chamá-las de bebidas Tiki, mas isso é um pouco mais do Oceano
              Pacífico, não Atlântico, para o meu gosto - é que elas têm muitos
              ingredientes.
            </p>
            <p>
              Escute aqui! Só porque esta bebida tem muitos componentes, não
              seja avarento com eles! À menos que você goste de bebidas baratas.
            </p>
          </div>

          <div className="textoReceita">
            <h2>Ingredientes</h2>
            <ul>
              <li>- 1 colher de sopa de geléia de goiaba.</li>
              <li>- 60 ml de água.</li>
              <li>- Uma colher de sopa de açúcar.</li>
              <li>- 60 ml de conhaque.</li>
              <li>- 30 ml de rum.</li>
              <li>- Meio limão.</li>
              <li>- 2 fatias de laranja.</li>
              <li>- Gelo</li>
              <li>- Copo: Old Fashioned</li>
            </ul>
          </div>

          <div className="textoReceita">
            <h2>Como fazer</h2>
            <ul>
              <li>- Esprema o limão no shaker e depois adicione a geleia de goiaba, o açúcar e uma pitada de água morna (30 ml).</li>
              <li>- Misture para dissolver tudo.</li>
              <li>- Adicione o restante da água, o conhaque e o rum.</li>
              <li>- Agite.</li>
              <li>- Decore com uma fatia de laranja.</li>
            </ul>
          </div>

          <button onClick={clearDrinkDetails} className="close-button" style={{ marginTop: '20px' }}>Fechar</button>
        </div>
      )}
    </div>
  );
}

export default Explore;
