interface Clue {
  clue: string;
}

interface ClueListProps {
  across: { [key: number]: { clue: string } };
  down: { [key: number]: { clue: string } };
}

const ClueList: React.FC<ClueListProps> = ({ across, down }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Dicas</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold">Horizontal</h3>
          <ul className="list-disc pl-5">
            {Object.entries(across).map(([key, { clue }]) => (
              <li key={key} className="my-2">
                {key}: {clue}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Vertical</h3>
          <ul className="list-disc pl-5">
            {Object.entries(down).map(([key, { clue }]) => (
              <li key={key} className="my-2">
                {key}: {clue}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClueList;
