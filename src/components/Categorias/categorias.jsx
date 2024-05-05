
import icone1 from "../../assets/inicio/entrada.png";
import icone2 from "../../assets/inicio/massa.png";
import icone3 from "../../assets/inicio/carne.png";
import icone4 from "../../assets/inicio/bebidas.png";
import icone5 from "../../assets/inicio/salada.png";
import icone6 from "../../assets/inicio/sobremesa.png";

const categorias = ({ handleFiltro, limpaFiltro }) => {
    return (
        <div className='container-botoes'>
            <button onClick={() => handleFiltro("Entradas")}> <img src={icone1} alt="ícone" />Entradas
            </button>

            <button
                onClick={() => handleFiltro("Massas")}>
                <img src={icone2} alt="ícone" />Massas
            </button>

            <button
                onClick={() => handleFiltro("Carnes")}>
                <img src={icone3} alt="ícone" />Carnes
            </button>
            <button
                onClick={() => handleFiltro("Bebidas")}>
                <img src={icone4} alt="ícone" />Bebidas
            </button>
            <button
                onClick={() => handleFiltro("Saladas")}>
                <img src={icone5} alt="ícone" />Saladas
            </button>
            <button
                onClick={() => handleFiltro("Sobremesas")}>
                <img src={icone6} alt="ícone" />Sobremesas
            </button>
            <button  onClick={() => limpaFiltro()}>Limpar Filtro</button>
        </div>
    )
}

export default categorias
