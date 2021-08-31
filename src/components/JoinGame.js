import React, { useState } from "react";
import {TextField, Button, Typography} from '@material-ui/core';

const JoinGame = ( { nickname, setGameId } ) => {
  const [id, setId] = useState(null);

  const handleButton = () => {
    console.log("poop")
    if (id !== null) {
      console.log("successs",id)
      setGameId(id);
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
      <Button variant="contained" handleClick={handleButton} >Join Room</Button>
    </div>
  );
}
export default JoinGame;