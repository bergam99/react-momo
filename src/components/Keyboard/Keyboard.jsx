import { useContext, useState } from "react";
import Context from "../../store/Context";

const Keyboard = ({ onKeyPress, rowIndex, colIndex }) => {
  const { setPressedKeys } = useContext(Context);

  const keyboardLayout = [
    ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
    ["W", "X", "C", "V", "B", "N"],
  ];

  const handleClick = (key) => {
    setPressedKeys((prevKeys) => [...prevKeys, key]);
    onKeyPress(key);
  };

  return (
    <>
      <div>
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((key, keyIndex) => (
              <button key={keyIndex} onClick={() => handleClick(key)}>
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
      {}
      <button>SUPPRIMER</button>
      <button>VALIDER</button>
    </>
  );
};

export default Keyboard;
