import React, { useEffect } from 'react'
import logo from "../assets/images/gapsj.png"
import BaseButton from "./button.js"
import "../CSS/texts.css"
import "../CSS/navbar.css"

const Navbar = () => {

    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses = ['within'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }else{
        navbarClasses.push("text-button");
    }

    return (
        <div className= "navbar">
            <div className="within">
                <img src={logo} alt="Logo GAP-SJ" />
                <h4> GAP </h4>
            </div>
            <div className="within">
                <BaseButton classname={navbarClasses.join(" ")} text="CARDÁPIO" />
                <BaseButton classname="text-button" text="SOBRE NÓS" />
            </div>
        </div>
    )
}

export default Navbar