from fastapi import APIRouter, HTTPException
from app.services.pokemon_service import get_pokemon, get_gen

router = APIRouter()

@router.get("/pokemon/{name}")
def pokemon(name: str):
    data = get_pokemon(name)

    if not data:
        raise HTTPException(status_code=404, detail="Pokémon não encontrado")
    
    return data

@router.get("/pokemon/generation/{id}")
def generation(id: int):
    data = get_gen(id)

    if not data:
        raise HTTPException(status_code=404, detail="Geração não encontrada")
    
    return data
