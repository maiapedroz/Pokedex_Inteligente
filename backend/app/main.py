from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.pokemon_routes import router as pokemon_router
from app.api.chat_routes import router as chat_router



app = FastAPI(title="Pokédex API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(pokemon_router)
app.include_router(chat_router)