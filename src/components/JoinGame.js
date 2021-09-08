import React, { useState } from "react";
import {TextField, Button, Typography} from '@material-ui/core';
import { PlayGame } from '../GameProvider'

const JoinGame = ( { nickname } ) => {
  const { setGameId } = PlayGame();
  const [id, setId] = useState(null);

  const handleButton = () => {
    console.log("poop")
    if (id !== null) {
      console.log("successs",id)
      setGameId("AAAA");
    }
  }

  const onChange = (e) => {
    console.log(e)
    setId(e.target.value);
    console.log(id)
  }

  return (
    <div>
      <Typography>Hello {nickname}!</Typography>
      <TextField id="outlined-basic" label="Enter code" variant="outlined" onChange={onChange} />
      <Button variant="contained" onClick={handleButton} >Join Room</Button>
    </div>
  );
}
export default JoinGame;