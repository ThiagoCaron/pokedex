export default function Card(atributos)
{
    let pokemon = atributos.person;
    return (
        <div className="card">
            <div className="card-header">
                {pokemon.name}
            </div>
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt="Imagem de um pokemon" className="card-img-top" />
                <div className="card-body">
                    
                    <p>Altura: <strong>{pokemon.height}</strong></p>
                    <p>Peso: <strong>{pokemon.weight}</strong></p>
                    <div>
                        Habilidades: 
                        <ul>
                            {
                            pokemon.abilities.map(function(item)
                            {
                                return(<li key={item.ability.name}>{item.ability.name}</li>)
                            })
                            }
                            
                        </ul>
                    </div>
                </div>
        </div>
    )
}