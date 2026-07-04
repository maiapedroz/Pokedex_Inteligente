import { capitalize } from "../utils";


function PokemonCard({ pokemon, onSelect }) {
    return (
        <div 
            className="pokemon-card"
            onClick={() => onSelect(pokemon.id)}
        >
            <img 
                src={pokemon.image} 
                alt={pokemon.name} 
            />

            <h3>#{pokemon.id}</h3>

            <p>{capitalize(pokemon.name)}</p>
        </div>
    );
}

export default PokemonCard;