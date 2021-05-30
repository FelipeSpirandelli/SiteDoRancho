import React from 'react'
import "../CSS/texts.css"
import "../CSS/dailymenu.css"

const DailyMenu = ({ diaDaSemana }) => {

    return (
        <div className = "wholeblock">
            <h1>{diaDaSemana}</h1>
            <div className = "meals">
                <div className = "onemeal rotated-left">
                    <h2>Café da Manhã</h2>
                    <p>Pão</p>
                    <p>Bolo</p>
                    <p>Mingau Rosa</p>
                    <p>Café</p>
               </div>
                <div className = "onemeal center">
                    <h2>Almoço</h2>
                    <p>Pão</p>
                    <p>Bolo</p>
                    <p>Mingau Rosa</p>
                    <p>Café</p>
                    <p>Carne em cubos ao molho shoyo</p>
               </div>
                <div className = "onemeal rotated-right">
                    <h2>Janta</h2>
                    <p>Pão</p>
                    <p>Bolo</p>
                    <p>Mingau Rosa</p>
                    <p>Café</p>
                    <p>Carne em cubos ao molho shoyo</p>
               </div>

            </div>
        </div>
    )

}

export default DailyMenu