import React, { useState } from "react";
import {TextField, Button} from '@material-ui/core';

const Login = () => {
  const [nickname, setNickname] = useState("");

  const handleName = (e) => {
    setNickname(e.target.value);
  };

  const handleStart = () => {
    if (nickname === "") {
      console.log("boo", nickname);
    } else {
      console.log("yay", nickname);
    }
  }

  return (
    <div>
      <TextField id="outlined-basic" label="Enter nickname" variant="outlined" onChange={handleName} />
      <Button onClick={handleStart} variant="contained">Create Game</Button>
    {false && <TextField id="outlined-basic" label="Enter code" variant="outlined" onChange={handleName} />}
    <Button onClick={handleStart} variant="contained">Join Game</Button>
    </div>
  );
}
export default Login;