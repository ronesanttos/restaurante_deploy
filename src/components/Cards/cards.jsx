import "./cards.css"

const Cards = ({ produto }) => {
    return (
        <div className="box-cards">
            <div className="cards">
                <div  className="container-imagem">
                    <img src={produto.imagem} alt={produto.nome} />
                </div>

                <div className="container-informacoes">
                    <div className="container-descricao">
                        <p className="nome">{produto.nome}</p>
                        <p className="categoria">{produto.categoria}</p>
                        <p className="descricao">{produto.descricao}</p>
                    </div>

                    <div className="container-preco">
                        <p  className="preco">{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(produto.preco)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards