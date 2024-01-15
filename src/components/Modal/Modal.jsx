import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Context from "../../store/Context";
import Img from "../../assets/img/aide.png";
import { response } from "../../store/Context";

const Modal = forwardRef(function Modal({ ok }, ref) {
  const { enteredPlayerName, setEnteredPlayerName } = useContext(Context);
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      // close() {
      //   dialog.current.close();
      // },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      <form method="dialog">
        <button>X</button>
      </form>
      {ok === "default" && (
        <div>
          <h2>RÈGLES</h2>
          <p>
            Vous avez six essais pour deviner le mot du jour, entre 6 et 9
            lettres, commun à tous. Vous ne pouvez proposer que des mots
            commençant par la même lettre que le mot recherché, et qui se
            trouvent dans notre dictionnaire. Les noms propres ne sont pas
            acceptés.
          </p>
          <img src={Img} alt="ex" />
          <br />
          <p>
            🟥 Les lettres entourées d'un carré rouge sont bien placées <br />
            🟡 Les lettres entourées d'un cercle jaune sont mal placées (mais
            présentes dans le mot). <br />
            🟦 Les lettres qui restent sur fond bleu ne sont pas dans le mot.
          </p>
        </div>
      )}
      {ok === "ok" && (
        <div>
          <h2>FÉLICITATIONS {enteredPlayerName} !</h2> <br />
          <p>
            Le mot était bien &nbsp;
            {response.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
            . Tu l'as découvert en {} coups!
          </p>
        </div>
      )}
      {ok === "notOk" && (
        <div>
          <h2>OH NON {enteredPlayerName} ... </h2>
          <p>Ici, tout le monde a une seconde chance!</p>
          <button>Réssayer!</button>
        </div>
      )}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
