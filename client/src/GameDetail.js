import React from 'react';
import './GameDetail.css';

const GameDetail = props => {
  const { game } = props


  // This code sets up the list contents based on whether any games are found or not
  let details
  if (Object.keys(game).length > 0) {
    details = (
      <div>
        <p>{game.name}</p>
        <p>Players: {game.minPlayers} to {game.maxPlayers}</p>
      </div>
    );
  } else {
    details = (<p>No game selected!</p>)
  }

  return (
    <div className='GameDetail'>
      {details}
    </div>
  )
}

export default GameDetail;
