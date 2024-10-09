import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpLeft,
  CornerDownLeft,
  CornerDownRight,
  CornerUpLeft,
  CornerUpRight,
} from "lucide-react";
import React, { useState } from "react";

type Cell =
  | string
  | "Up"
  | "Down"
  | "Right"
  | "Left"
  | "UpLeft"
  | "UpRight"
  | "DownLeft"
  | "DownRight";

type CrosswordProps = {
  solutionMatrix: Cell[][];
};

const Crossword: React.FC<CrosswordProps> = ({ solutionMatrix }) => {
  const [userMatrix, setUserMatrix] = useState<string[][]>(
    Array.from({ length: 13 }, () => Array(13).fill(""))
  );

  const handleInputChange = (row: number, col: number, value: string) => {
    const updatedMatrix = userMatrix.map((rowArr, rowIndex) =>
      rowArr.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? value.toUpperCase() : cell
      )
    );
    setUserMatrix(updatedMatrix);
  };

  const handleSubmit = () => {
    let isCorrect = true;

    for (let rowIndex = 0; rowIndex < solutionMatrix.length; rowIndex++) {
      for (
        let colIndex = 0;
        colIndex < solutionMatrix[rowIndex].length;
        colIndex++
      ) {
        const solutionCell = solutionMatrix[rowIndex][colIndex];
        const userCell = userMatrix[rowIndex][colIndex];

        if (
          ![
            "Up",
            "Down",
            "Right",
            "Left",
            "UpLeft",
            "UpRight",
            "DownLeft",
            "DownRight",
          ].includes(solutionCell) &&
          solutionCell !== "" &&
          solutionCell !== userCell
        ) {
          isCorrect = false;
          break;
        }
      }
    }

    if (isCorrect) {
      alert("Parabéns! Você completou a cruzadinha corretamente.");
    } else {
      alert("Algumas respostas estão incorretas, continue tentando!");
    }
  };

  return (
    <div className="crossword-container flex flex-col items-center">
      <div className="grid grid-cols-[repeat(13,_minmax(0,_1fr))] gap-1">
        {solutionMatrix.map((rowArr, rowIndex) =>
          rowArr.map((cell, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`}>
              {[
                "Up",
                "Down",
                "Right",
                "Left",
                "UpLeft",
                "UpRight",
                "DownLeft",
                "DownRight",
              ].includes(cell) ? (
                <div className="border w-10 h-10 flex items-center justify-center bg-red-500">
                  {cell === "Right" && (
                    <span className="text-white">
                      <ArrowRight />
                    </span>
                  )}
                  {cell === "Left" && (
                    <span className="text-white">
                      <ArrowLeft />
                    </span>
                  )}
                  {cell === "Up" && (
                    <span className="text-white">
                      <ArrowUp />
                    </span>
                  )}
                  {cell === "Down" && (
                    <span className="text-white">
                      <ArrowDown />
                    </span>
                  )}
                  {cell === "UpLeft" && (
                    <span className="text-white">
                      <CornerUpLeft />
                    </span>
                  )}
                  {cell === "UpRight" && (
                    <span className="text-white">
                      <CornerUpRight />
                    </span>
                  )}
                  {cell === "DownLeft" && (
                    <span className="text-white">
                      <CornerDownLeft />
                    </span>
                  )}
                  {cell === "DownRight" && (
                    <span className="text-white">
                      <CornerDownRight />
                    </span>
                  )}
                </div>
              ) : (
                <input
                  value={userMatrix[rowIndex][colIndex]}
                  onChange={(e) =>
                    handleInputChange(rowIndex, colIndex, e.target.value)
                  }
                  className="border w-10 h-10 text-center text-lg font-bold text-black leading-none"
                  maxLength={1}
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

// Definindo a matriz de solução com as novas direções
const solutionMatrix: Cell[][] = [
  ["Right", "D", "O", "G", "", "", "", "", "", "G", "O", "D", "Left"],
  ["", "", "", "DownRight", "", "", "", "", "DownLeft", "", "", "", ""],
  ["", "", "", "D", "O", "G", "G", "O", "D", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "G", "O", "D", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "UpLeft", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "G", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "O", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "D", "", "D", "O", "G", "", "", ""],
  ["", "", "", "", "", "Up", "", "UpRight", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", ""],
];

// Usando a matriz de solução na apliDação
export function App() {
  return <Crossword solutionMatrix={solutionMatrix} />;
}
