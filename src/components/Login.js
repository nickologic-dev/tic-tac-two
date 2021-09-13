import React, { useState } from "react";
import { TextField, Button, Grid } from '@material-ui/core';
import JoinGame from "./JoinGame";
import CreateGame from "./CreateGame";

const Login = ( ) => {
  const [nickname, setNickname] = useState("");
  const [joinGame, setJoinGame] = useState(false);
  const [createGame, setCreateGame] = useState(false);
  const [gameCode, setGameCode] = useState(null);

  const handleName = (e) => {
    setNickname(e.target.value);
  };

  const validName = () => {
    if (nickname === "") {
      return false;
    } else {
      return true;
    }
  }

  const handleCreate = () => {
    if (validName()) {
      setCreateGame(true);
      setJoinGame(false);
      var code = makeCode;
      setGameCode(code);
    }
  }

  const handleJoin = () => {
    if (validName()) {
      setJoinGame(true);
      setCreateGame(false);
    }
  }

  const makeCode = () => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for ( var i = 0; i < 4; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return result;
  }

  return (
    <div>
      <TextField id="outlined-basic" label="Enter nickname" variant="outlined" onChange={handleName} />
      <Grid container>
        <Grid item>
          <Button onClick={handleCreate} variant="contained">Create Game</Button>
        </Grid>
          <Grid item></Grid>
        <Grid item>
          <Button onClick={handleJoin} variant="contained">Join Existing Game</Button>
        </Grid>
      </Grid>
      {joinGame && <JoinGame nickname={nickname} />}
      {createGame && <CreateGame nickname={nickname} gameCode={gameCode} />}
    </div>
  );
}
export default Login;