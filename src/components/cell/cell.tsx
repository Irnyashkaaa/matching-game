import React, { useState } from "react";
import firstImage from '../../images/catWithTea.png'
import secondImage from '../../images/warmCat.png'
import thirdImage from '../../images/lapa.png'
import fourthImage from '../../images/angryCat.png'
import fifthImage from '../../images/bigCat.png'
import sixthImage from '../../images/hugyCat.png'
import seventhImage from '../../images/justCat.png'
import eighthImage from '../../images/shyCat.png'
import s from '../board/board.module.css'
import { celltype } from "../../App";

type propsType = {
    image: number | null
    isCurrent: boolean
    cellIndex: number
    setCells: (cell: celltype[]) => void
    cells: celltype[]
    currentCells: celltype[]
    setCurrentCells: (cells: celltype[]) => void
}

export const Cell: React.FC<propsType> = ({ image, isCurrent, cellIndex, setCells, cells, currentCells, setCurrentCells }) => {

    let currentImage;

    switch (image) {
        case 1:
            currentImage = firstImage
            break
        case 2:
            currentImage = secondImage
            break
        case 3:
            currentImage = thirdImage
            break
        case 4:
            currentImage = fourthImage
            break
        case 5:
            currentImage = fifthImage
            break
        case 6: currentImage = sixthImage
            break
        case 7:
            currentImage = seventhImage
            break
        case 0:
            currentImage = eighthImage
            break
    }

    const [isClick, setIsClick] = useState<boolean>(false)

    const onClick = () => {
        setIsClick(true)
        let newCells = [...cells]
        newCells[cellIndex].isCurrent = true
        setCells(newCells)
        let newCurrentCells = [...currentCells]
        if (newCurrentCells[0].image === 8) {
            newCurrentCells[0] = {image: image, isCurrent: true, cellId: cellIndex}
        } else {
            newCurrentCells[1] = {image: image, isCurrent: true, cellId: cellIndex}
        }
        setCurrentCells(newCurrentCells)
    }

    return (
        <div className={`${s.cell}`} onClick={onClick}>
            <div className={s.imageContainer}>
                <img className={`${isCurrent ? s.currentImage : s.notCurrentImage} ${isClick ? s.imageOnClick : s.imageHide}`} src={currentImage} />
            </div>
        </div>
    )
}