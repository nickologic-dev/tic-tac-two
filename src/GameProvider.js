import React, { useState, useEffect } from "react";
import database from './firebase.setup';
import { ref, set } from "firebase";

const GameContext = React.createContext();

function GameProvider ({ children }) {
    const [id, setId] = useState(null);
    const [player, setPlayer] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [nicknames, setNicknames] = useState([0, 0]);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [pieces, setPieces] = useState([0, 1, 2, 3, 4, 5]);

    useEffect(() => {
       // test writing
       updateUserData()
    }, [board, id])

    function writeUserData() {
        database.ref('/').set({
            game: {
                id: id,
                board: board
            }
        });
    }

    function updateUserData() {
        console.log("helllo dude");

        var nextPlayer;
        if (player === 0) {
            nextPlayer = 1;
        } else {nextPlayer = 0;}

        var updates = {};
        updates['/games/' + id] = {
            nextPlayer: nextPlayer,
            nicknames: nicknames,
            board: board
        };
    
        return database.ref().update(updates);
    }

    useEffect(() => {
        console.log("called");
        var starCountRef = database.ref('/');
        starCountRef.on('value', (snapshot) => {
            console.log(snapshot.val());
            var snap = snapshot.val();
            if (snap.games[id].board) {
                var tempBoard = Array(9).fill(null);
                for (var i = 0; i < 8; i++) {
                    if (snap.games[id].board[i]) {
                        tempBoard[i] = snap.games[id].board[i];
                    }
                }
                setBoard(tempBoard);
                setNicknames(snap.games[id].nicknames);
                console.log("QWRETRYT", snap.games[id].nextPlayer);
                setCurrentPlayer(snap.games[id].nextPlayer);
            }
        });
    }, [id])

    return(
        <GameContext.Provider value={{
            gameId: id,
            board: board,
            pieces: pieces,
            player: player,
            nicknames: nicknames,
            currentPlayer: currentPlayer,
            setGameId: setId,
            setBoard: setBoard,
            setPieces: setPieces,
            setPlayer: setPlayer,
            setNicknames: setNicknames
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