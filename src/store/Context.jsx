import { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [pressedKeys, setPressedKeys] = useState([]);
  // const [gameBoard, setGameBoard] = useState([InitialGameBoard]);
  const value = {
    enteredPlayerName,
    setEnteredPlayerName,
    pressedKeys,
    setPressedKeys,
    // gameBoard,
    // setGameBoard,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;
