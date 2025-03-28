import React, { useContext } from 'react'
import { BoardContext } from '../utils/utils'

const RestartBtn = () => {
  const { restartGame } = useContext(BoardContext)

  return (
    <button
      className='text-lavender text-3xl font-bold border-2 border-lavender rounded-xl py-1 px-3 hover:cursor-pointer hover:text-basegray hover:border-basegray transition-colors duration-300 hover:bg-gradient-to-br from-basegray to-lavender'
      onClick={restartGame}
    >
      Restart
    </button>
  )
}

export default RestartBtn
