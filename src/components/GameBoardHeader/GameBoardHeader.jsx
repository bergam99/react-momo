import React, { useContext } from "react";
import Question from "./../../assets/icon/question.png";
import Context from "../../store/Context";
import "./GameBoardHeader.css";
const GameBoardHeader = ({ openModal }) => {
  const { enteredPlayerName } = useContext(Context);

  return (
    <header className="GameBoard__Header">
      <p>Prêt.e {enteredPlayerName || "anonymus player"} ?</p>
      <h2>MOMOMOTUS</h2>
      <button onClick={openModal}>
        <img className="GameBoard__question" src={Question} alt="aide" />
      </button>
    </header>
  );
};

export default GameBoardHeader;
