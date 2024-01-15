import { useContext, useRef, useState } from "react";
import "./GameBoard.css";
import Modal from "./../../components/Modal/Modal";
import GameBoardHeader from "../../components/GameBoardHeader/GameBoardHeader";
import Keyboard from "../../components/Keyboard/Keyboard";
import Context from "../../store/Context";

const InitialGameBoard = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];

const GameBoard = () => {
  const { pressedKeys } = useContext(Context);
  const [gameBoard, setGameBoard] = useState([InitialGameBoard]);

  const dialog = useRef();

  function handleModalOpen() {
    dialog.current.open();
  }

  function handleKeyPress(key) {
    console.log(key);
  }

  return (
    <>
      <Modal ref={dialog} />
      <div className="GameBoard">
        <GameBoardHeader openModal={handleModalOpen} />

        <main className="GameBoard__Main">
          {pressedKeys}
          <Keyboard onKeyPress={handleKeyPress} />
        </main>
      </div>
    </>
  );
};

export default GameBoard;
