import React, { useState, useEffect } from "react";
import database from './firebase.setup';
import { ref, set } from "firebase";

const GameContext = React.createContext();

function GameProvider ({ children }) {
    const [id, setId] = useState(null);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [pieces, setPieces] = useState([0, 1, 2, 3, 4, 5]);

    useEffect(() => {
       // test writing
       updateUserData()
    }, [board, id])

    function writeUserData() {
        console.log("helllo dude")
        database.ref('/').set({
            game: {
                id: id,
                board: board
            }
        });
      }

    function updateUserData() {
        var updates = {};
        updates['/games/' + id] = {
            board: board
        };
    
        return database.ref().update(updates);
    }

    useEffect(() => {
        console.log("called");
        var starCountRef = database.ref('/');
        starCountRef.on('value', (snapshot) => {
            console.log(snapshot.val());
        });
    }, [id])

    return(
        <GameContext.Provider value={{
            gameId: id,
            board: board,
            pieces: pieces,
            setGameId: setId,
            setBoard: setBoard,
            setPieces: setPieces
        }}>{children}
        </GameContext.Provider>
    );
}

function PlayGame() {
    const context = React.useContext(GameContext)
    if (context === undefined) {
      throw new Error('playGame must be used within a GameProvider')
    }
    return context
  }

export { GameProvider, PlayGame }