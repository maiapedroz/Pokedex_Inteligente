import { useEffect, useState } from "react";
import { getGeneration, getPokemon } from "./services/api";
import PokemonCard from "./components/PokemonCard";
import GenerationTabs from "./components/GenerationTabs";
import PokemonGrid from "./components/PokemonGrid";
import SearchBar from "./components/SearchBar";
import PokemonModal from "./components/PokemonModal";


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [generation, setGeneration] = useState(1);
  const [search, setSearch] = useState("");
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function loadGeneration() {
      try {
        const data = await getGeneration(generation);
        setPokemons(data.pokemons);
      } catch (error) {
        console.error("Erro ao buscar Pokémons:", error);
      }
    }

    loadGeneration();
  }, [generation]);
  
  async function handlePokemonClick(id) {
    try {
      const pokemon = await getPokemon(id);
      setSelectedPokemon(pokemon);



    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="maindiv">
      <header>
        <h1>Pokédex</h1>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      
      </header>

      <GenerationTabs
        generation={generation}
        setGeneration={setGeneration}
      />

      <PokemonGrid
        pokemons={filteredPokemons}
        onSelect={handlePokemonClick}
      />

      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}

    </div>
  );
}

export default App;