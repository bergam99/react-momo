import React, { useContext, useEffect, useRef, useState } from "react";
import "./GameBoard.css";
import Modal from "./../../components/Modal/Modal";
import GameBoardHeader from "../../components/GameBoardHeader/GameBoardHeader";
import Keyboard from "../../components/Keyboard/Keyboard";
import Context from "../../store/Context";
import { InitialGameBoard } from "../../store/Context";
import { response } from "../../store/Context";

const GameBoard = () => {
  const { pressedKeys, enteredPlayerName } = useContext(Context);
  const [gameBoard, setGameBoard] = useState(InitialGameBoard);
  const dialog = useRef();
  const [isCorrect, setIsCorrect] = useState("default");

  useEffect(() => {
    const okResponse = gameBoard.flat().join("") === response.join("");

    if (
      gameBoard.every((row) => row.every((cell) => cell !== null)) &&
      !okResponse
    ) {
      setIsCorrect("notOk");
      handleModalOpen();
    } else if (okResponse) {
      setIsCorrect("ok");
      handleModalOpen();
    }
  }, [gameBoard, isCorrect]);

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
      <Modal
        ref={dialog}
        ok={isCorrect}
        enteredPlayerName={enteredPlayerName}
      />
      <div className="GameBoard">
        <GameBoardHeader openModal={handleModalOpen} />

        <main className="GameBoard__Main">
          <div>
            <ol className="GameBoard__Display">
              {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                  <ol>
                    {row.map((pressedKey, colIndex) => (
                      <li
                        key={colIndex}
                        className={(() => {
                          if (pressedKey === response[colIndex]) {
                            return "GameBoard__correct-position";
                          } else if (response.includes(pressedKey)) {
                            return "GameBoard__correct-wrong-position";
                          }
                          return "GameBoard__default";
                        })()}
                      >
                        <div>{pressedKey}</div>
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
