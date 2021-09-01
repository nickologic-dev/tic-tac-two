import React, { useState } from "react";

const GameContext = React.createContext();

function GameProvider ({ children }) {
    const [id, setId] = useState(null);
    const [board, setBoard] = useState(Array(9).fill(null));

    return(
        <GameContext.Provider value={{
            gameId: id,
            board: board,
            setId: setId,
            setBoard: setBoard
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