import React, { useState } from "react";

type Cell = {
  letter: string;
  hintDirection?: "horizontal" | "vertical" | null; // direção da dica ou null se não for um quadrado de dica
};

type CrosswordProps = {
  solutionMatrix: Cell[][];
};

const Crossword: React.FC<CrosswordProps> = ({ solutionMatrix }) => {
  // Inicializa a matriz 13x13 do usuário com inputs vazios
  const [userMatrix, setUserMatrix] = useState<string[][]>(
    Array(13).fill(Array(13).fill(""))
  );

  // Atualiza a matriz de respostas do usuário conforme ele digita
  const handleInputChange = (row: number, col: number, value: string) => {
    const updatedMatrix = userMatrix.map((rowArr, rowIndex) =>
      rowArr.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? value.toUpperCase() : cell
      )
    );
    setUserMatrix(updatedMatrix);
  };

  // Verifica se as respostas do usuário estão corretas ao submeter
  const handleSubmit = () => {
    const isCorrect = userMatrix.every((rowArr, rowIndex) =>
      rowArr.every(
        (cell, colIndex) => cell === solutionMatrix[rowIndex][colIndex].letter
      )
    );
    if (isCorrect) {
      alert("Parabéns! Você completou a cruzadinha corretamente.");
    } else {
      alert("Algumas respostas estão incorretas, continue tentando!");
    }
  };

  return (
    <div className="crossword-container flex flex-col items-center">
      {/* Grid 13x13 da cruzadinha */}
      <div className="grid grid-cols-[repeat(13,_minmax(0,_1fr))] gap-1">
        {solutionMatrix.map((rowArr, rowIndex) =>
          rowArr.map((cell, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`}>
              {/* Se for um quadrado de dica (vermelho) */}
              {cell.hintDirection ? (
                <div
                  className="border w-10 h-10 flex items-center justify-center bg-red-500"
                  style={{ color: "white" }}
                >
                  {/* Exibe a seta baseada na direção da dica */}
                  {cell.hintDirection === "horizontal" ? (
                    <span>&rarr;</span> // Seta para direita (horizontal)
                  ) : cell.hintDirection === "vertical" ? (
                    <span>&darr;</span> // Seta para baixo (vertical)
                  ) : null}
                </div>
              ) : (
                // Quadrados normais para o usuário preencher
                <input
                  value={userMatrix[rowIndex][colIndex]}
                  onChange={(e) =>
                    handleInputChange(rowIndex, colIndex, e.target.value)
                  }
                  className="border w-10 h-10 text-center text-lg font-bold text-black leading-none"
                  maxLength={1} // Apenas 1 letra por input
                />
              )}
            </div>
          ))
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Enviar
      </button>
    </div>
  );
};

export default Crossword;
