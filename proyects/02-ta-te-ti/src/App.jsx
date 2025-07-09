import { Children, use, useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";

import { Square } from "./components/Square.jsx";
import { TURNS,} from "./constants.js";
import { checkWinnerFrom } from "./logic/board.js";
import { checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";


function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  });
  //null es que no hay ganador, false es que hay un empate.
  const [winner, setWinner] = useState(null);

const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn'); 
}

  const updateBoard = (index)=>{

    // no actualiza la posicion si ya tiene algo.
    if(board[index] || winner) return

    //Actualiza el tablero.
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //Cambia de turnos.
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  //Guarrdar partida
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)
  //Revisar si hay un ganador.
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // -> Si no hay ganador, es un empate.
    }
  }


  return (
    <main className="board">
      <h1>ta-te-ti</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square
            key={index} 
            index={index}
            updateBoard={updateBoard}
              >
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
export default App;
