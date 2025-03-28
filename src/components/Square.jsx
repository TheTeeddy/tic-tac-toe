import React, { useContext } from 'react'
import { BoardContext, getColor } from '../utils/utils'

const Square = ({ id, value }) => {
  const { setCurrentPlayer, currentPlayer, board, setBoard, setRound, winner } =
    useContext(BoardContext)

  return (
    <div
      className={`grid place-items-center border-1 border-solid border-black w-50 aspect-[3/2] text-8xl cursor-pointer ${getColor(
        value
      )}`}
      id={id}
    >
      {value}
    </div>
  )
}

export default Square
