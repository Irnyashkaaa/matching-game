import React from "react";
import { celltype } from "../../App";
import { Cell } from "../cell/cell";
import s from './board.module.css'

type propsType = {
    cells: celltype[]
    setCells: (cells: celltype[]) => void
    currentCells: celltype[]
    setCurrentCells: (cells: celltype[]) => void
}

export const Board: React.FC<propsType> = ({ cells, setCells, currentCells, setCurrentCells }) => {
    return (
        <div className={s.board}>
            {cells.map((cell, i )=> <Cell currentCells={currentCells} setCurrentCells={setCurrentCells}
            setCells={setCells} cells={cells} cellIndex={i} image={cell.image} isCurrent={cell.isCurrent}/>)}
        </div>
    )
}