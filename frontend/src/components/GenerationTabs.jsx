

function GenerationTabs({ generation, setGeneration }) {
    const generations = [
        { id: 1, name: "Kanto" },
        { id: 2, name: "Johto" },
        { id: 3, name: "Hoenn" },
        { id: 4, name: "Sinnoh" },
        { id: 5, name: "Unova" },
        { id: 6, name: "Kalos" },
        { id: 7, name: "Alola" },
        { id: 8, name: "Galar" },
        { id: 9, name: "Paldea"}
    ];

    return (
        <div className="generation-tabs">
            {generations.map((gen) => (
                <button
                    key={gen.id}
                    className={generation === gen.id ? "active" : ""}
                    onClick={() => setGeneration(gen.id)}
                >
                    {gen.name}
                </button>
            ))}
        </div>
    );
}

export default GenerationTabs;