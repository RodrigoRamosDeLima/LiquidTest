import './BarBot.css';
import axios from 'axios';
import { useState } from 'react';
import Sidebar from '../SideBar';

function BarBot() {
  const [answer, setAnswer] = useState('');
  const [userInput, setUserInput] = useState(''); // Para controlar a entrada do usuário

  // Definindo as keywords
  const keywords = [
    'whisky',
    'whiskey',
    'uísque',
    'vodka',
    'gin',
    'cachaça',
    'rum',
    'tequila',
    'cerveja',
    'vinho',
    'champagne',
    'licor',
    'martini',
    'brandy',
    'cognac',
    'absinto',
    'sake',
    'aguardente',
    'conhaque',
    'mojito',
    'margarita',
    'caipirinha',
    'sangria',
    'piña colada',
    'soco',
    'zarco',
    'moonshine',
    'amaretto',
    'schnapps',
  ];

  const client = axios.create({
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_CHATGPT_KEY}`, // Usando a variável de ambiente correta para Vite
      'Content-Type': 'application/json', // Garantindo que a API reconheça o formato
    },
  });

  const handleSubmit = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault(); // Evitar nova linha ao pressionar Enter
      const messageText = userInput.toLowerCase();

      // Verifica se a mensagem contém alguma keyword
      if (!keywords.some((keyword) => messageText.includes(keyword))) {
        const botMessage =
          'Eu sou o seu BarBot, pergunte-me como fazer um drink com o que você possui na sua casa.';
        setAnswer(botMessage);
        setUserInput(''); // Limpa a entrada do usuário
        return; // Retorna sem fazer a chamada à API
      }

      const params = {
        model: 'gpt-3.5-turbo-instruct', // Altere o modelo conforme necessário
        prompt: `Me de sugestões de 3 drinks eu consigo fazer com os ingredientes: ${messageText}. Explique como preparar os drinks.`,
        max_tokens: 500,
        temperature: 0,
      };

      client
        .post('https://api.openai.com/v1/completions', params)
        .then((result) => {
          setAnswer(result.data.choices[0].text.trim());
          setUserInput(''); // Limpa a entrada do usuário após enviar
        })
        .catch((err) =>
          console.error(
            'Error Response:',
            err.response ? err.response.data : err.message,
          ),
        );
    }
  };

  return (
    <div className="BarBot">
      <Sidebar />
      <textarea
        className="answer-box"
        id="answer-box"
        placeholder="Eu sou o seu BarBot, pergunte-me como fazer um drink com o que você possui na sua casa."
        value={answer}
        readOnly
      />
      <div className="textarea-container">
        <textarea
          className="text-box"
          id="text-box"
          placeholder="Quais Bebidas você possui em casa?"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)} // Atualiza o estado da entrada do usuário
          onKeyDown={(e) => handleSubmit(e)}
        />
        <button className="send-button">↑</button>
      </div>
    </div>
  );
}

export default BarBot; // Exportação correta
