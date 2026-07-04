from fastapi import APIRouter, HTTPException
from app.services.llm_service import ask_llm
from app.schemas import ChatRequest


router = APIRouter()

@router.post("/chat")
def chat(request: ChatRequest):

    try:
        answer = ask_llm(
            request.pokemon,
            request.question
        )

        return {
            "answer": answer
        }
    
    except Exception:
        raise HTTPException(
            status_code=503,
            detail="Serviço de IA indisponível."
        )