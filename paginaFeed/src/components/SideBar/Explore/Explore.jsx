import React, { useState } from 'react';
import './Explore.css';
import Modal from './Modal'; // Importa o modal
import Sidebar from '../SideBar'

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
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (drink) => {
    setModalContent(drink); // Passa o objeto completo do drink para o modal
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="explore">
      <Sidebar />
      <h2>Explorar</h2>
      <p>Descubra novos drinks!</p>
      <div className="explore-content">
        {drinks.map((drink, index) => (
          <div key={index} className="drink-card" onClick={() => openModal(drink)}>
            <p>{drink.name}</p>
          </div>
        ))}
      </div>
      {modalContent && (
        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
      )}
    </div>
  );
}

export default Explore;
