import { Routes, Route } from "react-router-dom";

// CONTEXTS
import { GameProvider } from "./contexts/GameContext";

// PAGES
import GamePage from "./pages/GamePage";
import PastPlays from "./pages/PastPlays";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";

const App = () => {
  return (
    <GameProvider>
      <Routes>
        <Route index element={<GamePage />} />
        <Route path="scores" element={<PastPlays />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </GameProvider>
  );
};

export default App;
