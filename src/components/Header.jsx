import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header = ({ scoresIsShowing = false }) => {
  return (
    <div className={styles.header}>
      <h1>Yahtzə!</h1>
      {scoresIsShowing && <NavLink to="/">Back to game</NavLink>}
      {!scoresIsShowing && <NavLink to="/scores">Your scores</NavLink>}
    </div>
  );
};

export default Header;
