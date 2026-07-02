


function PokemonCard({ pokemon }) {
    return (
        <div className="pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} />

            <h3>#{pokemon.id}</h3>

            <p>{pokemon.name}</p>
        </div>


    );
}

export default PokemonCard;