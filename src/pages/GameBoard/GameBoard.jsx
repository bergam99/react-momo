import { useContext, useRef, useState } from "react";
import "./GameBoard.css";
import Modal from "./../../components/Modal/Modal";
import GameBoardHeader from "../../components/GameBoardHeader/GameBoardHeader";
import Keyboard from "../../components/Keyboard/Keyboard";
import Context from "../../store/Context";
import { InitialGameBoard } from "../../store/Context";

const GameBoard = () => {
  const { pressedKeys } = useContext(Context);
  const [gameBoard, setGameBoard] = useState(InitialGameBoard);

  const dialog = useRef();

  function handleModalOpen() {
    dialog.current.open();
  }

  function handleKeyPress(key) {
    setGameBoard((prevGameBoard) => {
      const rowIndex = prevGameBoard.findIndex((innerArray) =>
        innerArray.includes(null)
      );

      if (rowIndex !== -1) {
        const updatedGameBoard = [...prevGameBoard];
        const columnIndex = updatedGameBoard[rowIndex].indexOf(null);
        updatedGameBoard[rowIndex][columnIndex] = key;
        return updatedGameBoard;
      }

      return prevGameBoard;
    });
    console.log(key);
  }

  console.log(gameBoard);

  return (
    <>
      <Modal ref={dialog} />
      <div className="GameBoard">
        <GameBoardHeader openModal={handleModalOpen} />

        <main className="GameBoard__Main">
          <div>
            <ol className="GameBoard__Display">
              {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                  <ol>
                    {row.map((pressedKeys, colIndex) => (
                      <li key={colIndex}>
                        <div>{pressedKeys}</div>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ol>
          </div>
          <Keyboard onKeyPress={handleKeyPress} />
        </main>
      </div>
    </>
  );
};

export default GameBoard;
