

function SearchBar({ search, setSearch }) {
    return (
        <input 
            type="text"
            placeholder="Pesquisar Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}

        />
    );
}

export default SearchBar;