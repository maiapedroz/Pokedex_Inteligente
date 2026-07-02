

function PokemonModal({ pokemon, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div 
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="modal-close"
                    onClick={onClose}
                >
                    X
                </button>

                <img 
                    src={pokemon.image}
                    alt={pokemon.name}
                />

                <h2>
                    #{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h2>

                <p><strong>Altura: </strong> ALTURA </p>
                <p><strong>Peso: </strong>PESO</p>

                <p>
                    <strong>Tipos:</strong>{" "}
                    {pokemon.types.join(", ")}
                </p>

                <p>
                    <strong>Habilidades:</strong>{" "}
                    Habilidades
                </p>


            </div>

        </div>
    );
}

export default PokemonModal;