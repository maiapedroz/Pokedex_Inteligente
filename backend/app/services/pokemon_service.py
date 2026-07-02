import requests

BASE_URL = "https://pokeapi.co/api//v2/pokemon"
GEN_URL = "https://pokeapi.co/api/v2/generation"
IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

def get_pokemon(name: str):
    url = f"{BASE_URL}/{name.lower()}"
    response = requests.get(url)

    if response.status_code != 200:
        return None
    
    data = response.json()

    return {
        "name": data["name"],
        "id": data["id"],
        "types": [t["type"]["name"] for t in data["types"]],
        "image": data["sprites"]["front_default"],
        "stats": {
            stat["stat"]["name"]: stat["base_stat"]
            for stat in data["stats"]
        }
    }

def get_gen(id: int):
    url = f"{GEN_URL}/{id}"
    response = requests.get(url)

    if response.status_code != 200:
        return None
    
    data = response.json()

    return {
        "generation": data["id"],
        "pokemons": sorted([
            ({
                "name": pokemon["name"],
                "id": int(pokemon["url"].split("/")[-2]),
                "image": f"{IMG_URL}{pokemon["url"].split("/")[-2]}.png"
            })
            for pokemon in data["pokemon_species"]
        ],
        key=lambda pokemon: pokemon["id"]
        )
    }