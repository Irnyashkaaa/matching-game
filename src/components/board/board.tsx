import React from "react";
import { celltype } from "../../App";
import { Cell } from "../cell/cell";
import s from './board.module.css'

type propsType = {
    cells: celltype[]
}

export const Board: React.FC<propsType> = ({ cells }) => {
    return (
        <div className={s.board}>
            {cells.map(cell => <Cell image={cell.image} isCurrent={cell.isCurrent}/>)}
        </div>
    )
}