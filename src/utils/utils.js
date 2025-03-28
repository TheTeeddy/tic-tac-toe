import { createContext } from 'react'

export const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
]

export const BoardContext = createContext()

export const getColor = value =>
  value === 'X'
    ? 'text-primary'
    : value === 'O'
    ? 'text-secondary'
    : 'text-draw'
