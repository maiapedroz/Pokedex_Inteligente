import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000"
});

export default api;

export async function getGeneration(id){
    const response = await api.get(`/pokemon/generation/${id}`);
    return response.data;
}

export async function getPokemon(id){
    const response = await api.get(`/pokemon/${id}`);
    return response.data;
}

export async function askLLM(pokemon, question){
    const response = await api.post("/chat", {
        pokemon,
        question
    });

    return response.data;
}