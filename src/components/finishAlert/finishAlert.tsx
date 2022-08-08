import React from 'react'
import s from './finishAlert.module.css'

type propsType = {
    isGameFinish: boolean
}

export const FinishAlert: React.FC<propsType> = ({ isGameFinish }) => {
    return (
        <div>
            {isGameFinish ? <div className={s.finishAlert}>
                Congratulations, you are winning!
            </div> : ''}
        </div>
    )
}