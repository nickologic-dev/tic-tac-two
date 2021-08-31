import React, { useState } from "react";
import {TextField, Button, Typography} from '@material-ui/core';

const CreateGame = ( { nickname } ) => {

  return (
    <div>
      <Typography>Hello {nickname}!</Typography>
      <Typography>CODE</Typography>
      <Button variant="contained">Start Game</Button>
    </div>
  );
}
export default CreateGame;