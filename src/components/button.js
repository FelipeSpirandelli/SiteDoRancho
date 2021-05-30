import React from 'react'
import "../CSS/texts.css"
import "../CSS/button.css"

const BaseButton = ({ text, classname }) => {

    return (
        <button className = {classname}>
            {text}
        </button>
    )

}

export default BaseButton