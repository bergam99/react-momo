import { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  const value = { enteredPlayerName, setEnteredPlayerName };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;
