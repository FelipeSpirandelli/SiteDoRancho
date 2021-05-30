import "../CSS/texts.css"
import "../CSS/footer.css"
import logo from "../assets/images/gapsj.png"

const Footer = () => {


    return (
        <div className ="footer">
            <div className = "logo">
                <img src = {logo} alt = "Logo do GAP-SJ"/>
                <p>GAP-SJ</p>
            </div>
            <div className = "titulo">
                <h1>Grupamento de Apoio</h1>
            </div>
            <div className = "adress">
                <h6>Praça Marechal do Ar Eduardo Gomes nº 50 - Vila das Acácias</h6>
                <h6>São José dos Campos - São Paulo</h6>
            </div>
        </div>
    )
}

export default Footer