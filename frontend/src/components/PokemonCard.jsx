


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

            <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
    );
}

export default PokemonCard;