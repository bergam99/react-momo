import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../store/Context";

function Home() {
  const playerName = useRef();
  const { enteredPlayerName, setEnteredPlayerName } = useContext(Context);

  function handleEnter() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <>
      <h1>MOMOMOTUS</h1>
      <br />
      <h1>🟥 🟡 🟦</h1>

      <p>Pour commencer, quel est ton prénom?</p>
      <input type="text" ref={playerName} required />
      <Link to="/gameboard">
        <button type="" onClick={handleEnter}>
          Let&apos;s go!
        </button>
      </Link>
    </>
  );
}

export default Home;
