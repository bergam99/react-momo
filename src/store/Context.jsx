import { createContext, useState } from "react";

const Context = createContext();

export const response = ["P", "R", "E", "M", "I", "C", "E", "S"];

export const InitialGameBoard = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];

export function ContextProvider({ children }) {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  const [pressedKeys, setPressedKeys] = useState([null]);
  const value = {
    enteredPlayerName,
    setEnteredPlayerName,
    pressedKeys,
    setPressedKeys,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;
