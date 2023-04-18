export default function Tela()
{
    return (
        <div>
            <div>
                <div className="input-group mb-3">
                    
                    <input type="text" className="form-control" placeholder="Digite o nome" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    <button className="btn btn-outline-secondary" type="button" >Pesquisar</button>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    Nome do Pokemon
                </div>
                <img src="https://placehold.co/400x200" className="card-img-top"  alt="..." />
                <div className="card-body">
                    
                    Detalhes do Pokemon
                </div>
                
            </div>
        </div>
    );
}