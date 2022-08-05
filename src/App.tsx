import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Board } from './components/board/board';

export type celltype = {
  image: number | null
  isCurrent: boolean
}

const App: React.FC = () => {

  let initCells: celltype[] = [
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
    { image: null, isCurrent: true },
  ]

  const [cells, setCells] = useState<celltype[] | []>(initCells)
  const [isGame, setIsGame] = useState<boolean>(false)

  let imageNumber = 0
  let imageCount: number[] = [0, 0, 0, 0, 0, 0, 0, 0]
  let cellsWithImage = 0



  const setRandomImageToCells = () => {
    const randomCellNumber: number = Math.floor(Math.random() * 16)
    while (cellsWithImage !== 16) {
      if (!initCells[randomCellNumber].image) {
        if (imageCount[imageNumber] < 2) {
          imageCount[imageNumber] += 1
          initCells[randomCellNumber].image = imageNumber
          cellsWithImage++
          if (imageCount[imageNumber] === 2) imageNumber++
        } 
      } else {
        setRandomImageToCells()
      }
    }

    initCells.map(cell => {
      !cell.image? cell.image = 0: console.log();
      
    })
    
  }

  useEffect(() => {
    setRandomImageToCells()
    setIsGame(true)
    console.log(initCells);
    
  }, [])

  
  return (
    <div className="App">
      <Board cells={cells} />
    </div>
  )

}

export default App;
