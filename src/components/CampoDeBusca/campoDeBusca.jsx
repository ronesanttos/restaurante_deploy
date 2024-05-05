import Lupa from '../../assets/inicio/lupa.png'

const CampoDeBusca = ({textoBuscaDigitado, handleBusca}) => {
    return (
        <div className="container-busca">
            <img src={Lupa} alt="icone"/>
            <input type="text" value={textoBuscaDigitado} onChange={(event) => handleBusca(event.target.value)} placeholder="Pesquise por um prato do cardápio"/>
        </div>
    );
};

export default CampoDeBusca;