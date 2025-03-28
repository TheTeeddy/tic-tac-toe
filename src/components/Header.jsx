import { useContext } from 'react'
import { BoardContext, getColor } from '../utils/utils'

const Header = () => {
  const { currentPlayer, winner } = useContext(BoardContext)

  let checkValue = winner ? winner : currentPlayer
  return (
    <div className='flex gap-2 items-center flex-col text-lavender w-1/2 pt-8 pb-4 font-bold'>
      <p className='text-5xl '>Tic Tac Toe</p>

      <p className='text-2xl'>
        {winner && winner !== 'Draw' ? (
          <span>Winner:</span>
        ) : !winner ? (
          'Current player:'
        ) : null}

        <span className={`ms-3 ${getColor(checkValue)}`}>{checkValue}</span>
      </p>
    </div>
  )
}

export default Header
