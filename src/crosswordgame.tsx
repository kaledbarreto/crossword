// CrosswordGame.tsx
import { useState } from "react";
import Crossword from "@slikslaks/react-crossword";
import ClueList from "./cluelist";

// Dados do jogo de palavras cruzadas
const data = {
  across: {
    2: { clue: "Fruta da Magali", answer: "MELANCIA", row: 2, col: 1 },
    3: { clue: "No diminutivo é um doce", answer: "MORANGO", row: 4, col: 0 },
    5: { clue: "Fica em cachos", answer: "BANANA", row: 8, col: 2 },
  },
  down: {
    1: { clue: "Fruta Azeda", answer: "LIMAO", row: 0, col: 1 },
    4: { clue: "Fruta com Coroa", answer: "ABACAXI", row: 4, col: 3 },
  },
};

const CrosswordGame: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-96">
        <h1 className="text-2xl font-bold mb-4">Palavras Cruzadas</h1>
        <Crossword data={data} />
      </div>
    </div>
  );
};

export default CrosswordGame;
