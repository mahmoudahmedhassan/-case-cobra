"use client";

import React, { useState } from 'react';
// import './TicTacToe.css'; 

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [message, setMessage] = useState(`Player X's turn`);

  // Handle player move
  const makeMove = (index) => {
    if (board[index] || checkWinner()) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      setMessage(`${winner} wins!`);
    } else if (newBoard.every(cell => cell)) {
      setMessage("It's a tie!");
    } else {
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);
      setMessage(`Player ${nextPlayer}'s turn`);
    }
  };

  // Check for a winner
  const checkWinner = (board) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  return (
    <div className="game-container">
      <div className="game-board">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell ? 'taken' : ''}`}
            onClick={() => makeMove(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="message">{message}</div>
    </div>
  );
}

export default TicTacToe;

// CSS (TicTacToe.css)
// .game-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   font-family: Arial, sans-serif;
//   background-color: #f4f4f4;
// }
// .game-board {
//   display: grid;
//   grid-template-columns: repeat(3, 100px);
//   grid-gap: 5px;
// }
// .cell {
//   width: 100px;
//   height: 100px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #fff;
//   border: 2px solid #000;
//   font-size: 2rem;
//   font-weight: bold;
//   cursor: pointer;
// }
// .cell.taken {
//   cursor: not-allowed;
// }
// .message {
//   margin-top: 20px;
//   font-size: 1.2rem;
// }
