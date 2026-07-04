from pydantic import BaseModel

class ChatRequest(BaseModel):
    pokemon: dict
    question: str
