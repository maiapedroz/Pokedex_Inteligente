import PokemonCard from "./PokemonCard"

function PokemonGrid({ pokemons }) {
    return (
        <div className="pokemon-grid">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                />
        ))}
      </div>
    );
}

export default PokemonGrid;