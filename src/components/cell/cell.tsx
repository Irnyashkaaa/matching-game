import React from "react";
import { celltype } from "../../App";
import firstImage from '../../images/catWithTea.png'
import secondImage from '../../images/warmCat.png'
import thirdImage from '../../images/lapa.png'
import fourthImage from '../../images/angryCat.png'
import fifthImage from '../../images/bigCat.png'
import sixthImage from '../../images/hugyCat.png'
import seventhImage from '../../images/justCat.png'
import eighthImage from '../../images/shyCat.png'
import s from '../board/board.module.css'

export const Cell: React.FC<celltype> = ({ image, isCurrent }) => {

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
    return (
        <div className={s.cell}>
            <img className={s.flipImage} src={currentImage} />
        </div>
    )
}