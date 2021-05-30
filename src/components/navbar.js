import logo from "../assets/images/gapsj.png"
import BaseButton from "./button.js"
import "../CSS/texts.css"
import "../CSS/navbar.css"

const Navbar = () => {

    return(
        <div className = "navbar">
            <div className = "within">
                <img src = {logo} alt = "Logo GAP-SJ" />
                <h4> GAP </h4>
            </div>
            <div className = "within">
                <BaseButton classname = "text-button" text = "CARDÁPIO" />
                <BaseButton classname = "text-button" text = "SOBRE NÓS" />
            </div>
        </div>
    )
}

export default Navbar