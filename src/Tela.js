import axios from "axios";
import { useState } from "react";
import Card from "./Card";

export default function Tela()
{
    const [pokemon, setPokemon] = useState(null);
    const [pesquisa, setPesquisa] = useState("");
    const [alertErro, setAlertErro] = useState(false);

    async function carregaPokemon()
    {
        try 
        {
            setAlertErro(0)
            setPokemon(null)
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`);
            setPokemon(data);
        }
        catch (erro)
        {
            setAlertErro(true)
            
        }
    }

    function pokeNome(evento)
    {
        setPesquisa(evento.target.value)
    }

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" onChange={pokeNome} className="form-control" placeholder="Digite o nome" />
                <button disabled={pesquisa === ""} onClick={carregaPokemon} className="btn btn-outline-secondary" type="button" >Pesquisar</button>
            </div>

            {/* Exibe o pokemon caso tenha sido feita uma pesquisa */}
            {pokemon != null ? <Card person={pokemon} /> : ""}
            {alertErro === true? <div className="alert alert-danger" role="alert">Pokemon não encontrado!</div> : ""}
        </div>
    )
}