import { useGame } from "../contexts/GameContext";

import PastPlaysRow from "./PastPlaysRow";

const PastPlaysTable = () => {
  const { pastPlays } = useGame();

  return (
    <>
      {pastPlays.length > 0 && (
        <table className="table-plays">
          <thead>
            <tr>
              <th>Date Played</th>
              <th>Game Number</th>
              <th>Total Score</th>
              <th>Upper Total</th>
              <th>Upper Bonus Scored</th>
              <th>Number of Yahtzees</th>
              <th>Lower Total</th>
              <th>Rounds Played</th>
              <th>Complete Game</th>
            </tr>
          </thead>
          <tbody>
            {pastPlays.map((play, i) => (
              <PastPlaysRow play={play} key={i} />
            ))}
          </tbody>
        </table>
      )}
      {pastPlays.length === 0 && <p>You do not have any past plays saved.</p>}
    </>
  );
};

export default PastPlaysTable;
