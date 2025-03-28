import Header from './components/Header'
import Board from './components/Board'
import RestartBtn from './components/RestartBtn'
import { BoardContext, winningCombinations } from './utils/utils'
import { useEffect, useState } from 'react'

function App() {
  const [board, setBoard] = useState(Array(9).fill(''))
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [winner, setWinner] = useState(null)
  const [round, setRound] = useState(0)

  function checkWinner() {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination
      if (board[a] && board[a] === board[b] && board[a] === board[c])
        setWinner(board[a])
    }
    if (!board.includes('')) setWinner('Draw')
  }

  function restartGame() {
    setBoard(Array(9).fill(''))
    setWinner(null)
    setRound(0)
    setCurrentPlayer('X')
  }

  useEffect(() => {
    if (round < 5) return
    checkWinner()
  }, [board])

  return (
    <div className='bg-basegray h-screen flex items-center flex-col'>
      <BoardContext.Provider
        value={{
          board,
          currentPlayer,
          setCurrentPlayer,
          setBoard,
          winner,
          setWinner,
          round,
          setRound,
          restartGame,
        }}
      >
        <Header />
        <Board />
        <RestartBtn />
      </BoardContext.Provider>
    </div>
  )
}

export default App
