const PastPlaysRow = ({ play }) => {
  const {
    date,
    countGame,
    grandTotalGameScored,
    yahtzeeCount,
    upperTotalScored,
    lowerTotalScored,
    countRound,
    upperBonusScored,
    complete,
  } = play;

  function dateCleaner(date) {
    const d = new Date(date.slice(0, 4), date.slice(5, 7), date.slice(8, 10));
    return d.toLocaleString("en-US", { dateStyle: "long" });
  }

  return (
    <tr>
      <td>{dateCleaner(date)}</td>
      <td>{countGame}</td>
      <td>{grandTotalGameScored}</td>
      <td>{upperTotalScored}</td>
      <td>{upperBonusScored ? "✅" : "Not scored"}</td>
      <td>{yahtzeeCount ? "⭐️".repeat(yahtzeeCount) : "None"}</td>
      <td>{lowerTotalScored}</td>
      <td>{countRound}</td>
      <td>{complete ? "Complete game" : "Ended early"}</td>
    </tr>
  );
};

export default PastPlaysRow;
