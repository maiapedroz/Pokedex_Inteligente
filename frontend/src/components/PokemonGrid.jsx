import PokemonCard from "./PokemonCard"

function PokemonGrid({ pokemons, onSelect }) {
    return (
        <div className="pokemon-grid">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    onSelect={onSelect}
                />
        ))}
      </div>
    );
}

export default PokemonGrid;