import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000"
});

export default api;

export async function getGeneration(id){
    const response = await api.get(`/pokemon/generation/${id}`);
    return response.data;
}