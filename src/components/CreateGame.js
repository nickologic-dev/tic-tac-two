import React, { } from "react";
import { Button, Typography } from '@material-ui/core';
import { PlayGame } from '../GameProvider'

const CreateGame = ( { nickname, gameCode } ) => {
  const { setGameId, setPlayer, nicknames, setNicknames } = PlayGame();

  return (
    <div>
      <Typography>Hello {nickname}!</Typography>
      <Typography>{gameCode}</Typography>
      <Button variant="contained" onClick={() => {
        setGameId(gameCode);
        setPlayer(0);
        nicknames[0] = nickname;
        setNicknames(nicknames);
      }}>Start Game</Button>
    </div>
  );
}
export default CreateGame;