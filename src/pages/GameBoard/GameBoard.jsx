import { useRef } from "react";
import "./GameBoard.css";
import Modal from "./../../components/Modal/Modal";
import GameBoardHeader from "../../components/GameBoardHeader/GameBoardHeader";

const GameBoard = () => {
  const dialog = useRef();

  function handleModalOpen() {
    dialog.current.open();
  }

  return (
    <>
      <Modal ref={dialog} />
      <div className="GameBoard">
        <GameBoardHeader openModal={handleModalOpen} />

        <main className="GameBoard__Main"></main>
      </div>
    </>
  );
};

export default GameBoard;
