import { useContext } from "react";
import Context from "../store/Context";

const GameBoard = () => {
  const { enteredPlayerName } = useContext(Context);

  return <div>{enteredPlayerName || "anonymus player"}</div>;
};

export default GameBoard;
