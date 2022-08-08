import React, { useEffect, useState } from 'react';
import './App.css';
import { Board } from './components/board/board';
import { FinishAlert } from './components/finishAlert/finishAlert';

export type celltype = {
  image: number | null
  isCurrent: boolean
  cellId: number
}

const App: React.FC = () => {

  let initCells: celltype[] = [
    { image: null, isCurrent: false, cellId: 0 },
    { image: null, isCurrent: false, cellId: 1 },
    { image: null, isCurrent: false, cellId: 2 },
    { image: null, isCurrent: false, cellId: 3 },
    { image: null, isCurrent: false, cellId: 4 },
    { image: null, isCurrent: false, cellId: 5 },
    { image: null, isCurrent: false, cellId: 6 },
    { image: null, isCurrent: false, cellId: 7 },
    { image: null, isCurrent: false, cellId: 8 },
    { image: null, isCurrent: false, cellId: 9 },
    { image: null, isCurrent: false, cellId: 10 },
    { image: null, isCurrent: false, cellId: 11 },
    { image: null, isCurrent: false, cellId: 12 },
    { image: null, isCurrent: false, cellId: 13 },
    { image: null, isCurrent: false, cellId: 14 },
    { image: null, isCurrent: false, cellId: 15 },
  ]

  const initCurrentCell: celltype = { image: 8, isCurrent: true, cellId: 17 }

  const [cells, setCells] = useState<celltype[] | []>(initCells)
  const [isGame, setIsGame] = useState<boolean>(false)
  const [currentCells, setCurrentCells] = useState<celltype[]>([initCurrentCell, initCurrentCell])
  const [openCells, setOpenCells] = useState<celltype[]>([])
  const [gameFinish, setIsGameFinish] = useState<boolean>(false)

  let imageNumber = 0
  let imageCount: number[] = [0, 0, 0, 0, 0, 0, 0, 0]
  let cellsWithImage = 0


  useEffect(() => {
    //check is current cells` images are the same
    if (currentCells && currentCells.length === 2 && currentCells[0].image !== 8 && currentCells[1].image !== 8 && currentCells[0].cellId !== currentCells[1].cellId) {
      if (currentCells[0].image === currentCells[1].image) {
        let newCells = [...openCells]
        let newCurrentCells = [...currentCells]
        newCells.push(newCurrentCells[0], newCurrentCells[1])
        setOpenCells(newCells)
        setCurrentCells([initCurrentCell, initCurrentCell])
      } else {
        let newCells = [...cells]
        newCells[currentCells[0].cellId].isCurrent = false
        newCells[currentCells[1].cellId].isCurrent = false
        setTimeout(setCells, 900, newCells)
        setTimeout(setCurrentCells, 900, [initCurrentCell, initCurrentCell])
      }
    }
  }, [currentCells])



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
      !cell.image ? cell.image = 0 : console.log();

    })

  }

  useEffect(() => {
    if (openCells && openCells.length === 16) {
      setIsGameFinish(true)
    }
  }, [openCells])

  useEffect(() => {
    setRandomImageToCells()
    setIsGame(true)
  }, [])




  return (
    <div className="App">
      <FinishAlert isGameFinish={gameFinish}/>
      <Board currentCells={currentCells} setCurrentCells={setCurrentCells} setCells={setCells} cells={cells} />
    </div>
  )

}

export default App;
