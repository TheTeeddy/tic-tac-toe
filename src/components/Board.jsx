import React, { useContext } from 'react'
import Square from './Square'
import { BoardContext } from '../utils/utils'

const Board = () => {
  const { board, winner, setBoard, setRound, currentPlayer, setCurrentPlayer } =
    useContext(BoardContext)
  function handleBoardClick(event) {
    const id = event.target.id
    if (!id || board[id] !== '' || winner) return

    setBoard(prev =>
      prev.map((square, index) => (index == id ? currentPlayer : square))
    )
    setRound(prev => prev + 1)
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  return (
    <div
      className='grid grid-cols-3 border shadow-black/50  shadow-2xl mb-6'
      onClick={handleBoardClick}
    >
      {board.map((square, index) => {
        return <Square key={index} id={index} value={square} />
      })}
    </div>
  )
}

export default Board
