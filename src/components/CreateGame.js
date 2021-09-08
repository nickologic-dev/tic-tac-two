import React, { } from "react";
import { Button, Typography } from '@material-ui/core';
import { PlayGame } from '../GameProvider'

const CreateGame = ( { nickname } ) => {
  const { setGameId } = PlayGame();

  return (
    <div>
      <Typography>Hello {nickname}!</Typography>
      <Typography>AAAA</Typography>
      <Button variant="contained" onClick={() => {
        setGameId("BBBB");
      }}>Start Game</Button>
    </div>
  );
}
export default CreateGame;