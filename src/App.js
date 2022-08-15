import React, { useState } from "react";
import PlayerScore from "./PlayerScore";

function App() {
  const [players, setPlayers] = useState([
    { name: "HOME", score: 0 },
    { name: "GUEST", score: 0 }
  ]);

  const newGame = () => {
    setPlayers(players => players.map(players => ({...players, score: 0})
  ))
  }

  return (
    <>
      <div className="scoreboard-section">
        {players.map(player => 
          <PlayerScore key={player.name} 
                      player={player} 
                      players={players}
                      setPlayers={setPlayers}/>)}
      </div>
      <button className="restart-btn" onClick={newGame}>New Game</button>
    </>
  );
}

export default App;
