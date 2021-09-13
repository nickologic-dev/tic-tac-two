import React from "react";
import {TextField, Button, Typography} from '@material-ui/core';
import { PlayGame } from '../GameProvider'

const JoinGame = ( { nickname } ) => {
  const { setGameId, setPlayer, nicknames, setNicknames } = PlayGame();

  const handleButton = () => {
    console.log("poop")
    var code = document.getElementById('join-game').value;
    if (code !== null) {
      console.log("success", code)
      setGameId(code);
      setPlayer(1);
      nicknames[0] = nickname;
      setNicknames(nicknames);
    }
  }

  return (
    <div>
      <Typography>Hello {nickname}!</Typography>
      <TextField id="join-game" label="Enter code" variant="outlined" />
      <Button variant="contained" onClick={handleButton} >Join Room</Button>
    </div>
  );
}
export default JoinGame;