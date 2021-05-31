import kitchen from "../assets/images/kitchen.jpg"

import "../CSS/description.css"
import "../CSS/texts.css"


const Description = () => {

    return (
        <div className='description'>
            <h1 className="title">Sobre Nós</h1>
            <p className="text">
                O rancho é uma organização militar criado juntamente com a força aérea brasileira,
                para prover as refeições diárias dos militares. Cada instituição militar possui seu
                próprio rancho, possuindo cardápios distintos.
                Porém, a excelente qualidade da comida é a mesma para qualquer um.
            </p>
            <img className="kitchen" src={kitchen} alt="Foto bonita" />
        </div>
    )
}

export default Description