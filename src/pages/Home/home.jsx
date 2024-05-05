
import { useState } from 'react';
import { filtrarProdutos, buscarProduto, produtosEntradas } from '../../service/service'
import Cards from '../../components/Cards/cards'
import CampoDeBusca from '../../components/CampoDeBusca/campoDeBusca';
import Categorias from '../../components/Categorias/categorias';



const Home = () => {
  const [listaProdutos, setListaProdutos] = useState(produtosEntradas());
  const [textoDigitado, setTextoDigitado] = useState("");

  const handleBusca = (textoDigitado) => {
    setTextoDigitado(textoDigitado);
    setListaProdutos(buscarProduto(textoDigitado));
  };

  const handleFiltro = (categoria) => {
    setListaProdutos(filtrarProdutos(categoria));
    setTextoDigitado("");
  };

  const limpaFiltro = () => {
    setListaProdutos(produtosEntradas())
    setTextoDigitado(" ")
  }

  return (
    <div className='body'>
      <header className='topo img-banner'>
        <div className='titulo-banner'>
          <h1>RESTAURANT</h1>
          <p>
            De pratos clássicos a criações surpreendentes, nosso cardápio é um
            requinte de sabores refinados.
          </p>
        </div>
      </header>
      <div className='main container-limite'>
        <div className='pesquisa-filtro'>

            <Categorias handleFiltro={handleFiltro} limpaFiltro={limpaFiltro} />

            <CampoDeBusca textoDigitado={textoDigitado} handleBusca={handleBusca} />
        </div>

              <h2>Cardápio</h2>

            <div className='container-cards'>
              {
                listaProdutos.map((produto) => (
                  <Cards key={produto.id} produto={produto} />
                ))
              }
            </div>

      </div>
    </div>
  );
};

export default Home;
