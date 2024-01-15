import { useContext, useRef } from "react";
import Context from "../../store/Context";
import Question from "./../../assets/icon/question.png";
import "./GameBoard.css";
import Modal from "../../components/Modal";

const GameBoard = () => {
  const { enteredPlayerName } = useContext(Context);
  const dialog = useRef();

  function handleModalOpen() {
    dialog.current.open();
  }

  return (
    <>
      <Modal ref={dialog} />
      <div className="GameBoard">
        <header className="GameBoard__Header">
          <p>Prêt.e {enteredPlayerName || "anonymus player"} ?</p>
          <h2>MOMOMOTUS</h2>
          <button onClick={handleModalOpen}>
            <img className="GameBoard__question" src={Question} alt="aide" />
          </button>
        </header>
        {/* main */}
        <main className="GameBoard__Main"></main>
      </div>
    </>
  );
};

export default GameBoard;
