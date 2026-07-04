import { useState, useEffect, useRef } from "react";
import { askLLM } from "../services/api";
import { capitalize } from "../utils";


function PokemonModal({ pokemon, onClose }) {
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState("");

    const chatEndRef = useRef(null);
    const inputRef = useRef(null);

    // Scrolla até a mensagem mais recente
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages]);

    // Fecha o Modal ao soltar a tecla ESC
    useEffect(() => {
        function handleKeyUp(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [onClose]);



    function cry(){
        const audio = new Audio(pokemon.cries);
        audio.volume = 0.05;
        audio.play();
    }

    

    async function handleAsk(event){
        event.preventDefault();

        if (!question.trim()) {
            setError("Digite uma pergunta.");
            return;
        }
        if (question.length > 300) {
            setError("A pergunta deve ter no máximo 300 caracteres.");
            return;
        }


        setError("");
        setLoading(true);

        try {
            const response = await askLLM(
                pokemon,
                question
            );

            cry();

            setMessages(prev => [
                ...prev,
                {
                    role: "user",
                    content: question
                },
                {
                    role: "assistant",
                    content: response.answer
                }
            ]);

            setQuestion("");
            inputRef.current?.focus();

        } catch (error) {
            console.error(error);

        } finally {
            setLoading(false);
            inputRef.current?.focus();
        }
    }


    return (
        <div className="modal-overlay" onClick={onClose}>
            
            <div 
                className={`modal-content ${messages.length ? "expanded" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="modal-close"
                    onClick={onClose}
                >
                    X
                </button>


                <div className="modal-info">
                    <div className="modal-pokemon">
                        <h2>#{pokemon.id}</h2>
                        <h2 className="modal-name">
                            {capitalize(pokemon.name)}
                        </h2>

                        <img 
                            src={pokemon.image}
                            alt={pokemon.name}
                        />

                        <p>
                            <strong>Tipos:</strong>{" "}
                            {pokemon.types.map(capitalize).join(", ")}
                        </p>

                        <p><strong>Altura:</strong> {pokemon.height}</p>
                        <p><strong>Peso:</strong> {pokemon.weight}</p>

                        

                        <p>
                            <strong>Habilidades:</strong>{" "}
                            {pokemon.abilities.map(capitalize).join(", ")}
                        </p>
                    </div>
                    <div className="chat-container">
                        <form onSubmit={handleAsk}>

                        <input
                            ref={inputRef}
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Pergunte sobre este Pokémon..."
                        />

                    
                        <button 
                            className="ask-button" 
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Pensando..." : "Perguntar"}
                        </button>

                        </form>
                        
                        
                        {error && <p className="error-message">{error}</p>}
                        

                    </div>
                </div>
                {messages.length > 0 && (
                    <div className="chat-panel">
                        {messages.map((message, index) => (
                            <div 
                                key={index} 
                                className={`message ${message.role}`}
                            >
                                
                                {message.content}
                            </div>
                        ))}

                        <div ref={chatEndRef}></div>

                    </div>
                )}


            </div>

        </div>
    );
}

export default PokemonModal;