import React from "react";

function PlayerScore({ player, players, setPlayers }) {
    const scores = [1, 2, 3];

    const addScores = (score) => {
        setPlayers(players => players.map(players => {
            return players.name === player.name ?
                {...players, score: player.score + score} : players
        }))
    };

  return (
    <div className="score-section">
      <h1>{player.name}</h1>
      <div className="player-score">
        <h2>{player.score}</h2>
      </div>
      <div className="add-points">
        {scores.map(score => 
            <button key={score} 
                    onClick={() => addScores(score)}>
            {`+${score}`}</button>)}
      </div>
    </div>
  );
}

export default PlayerScore;
