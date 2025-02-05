import axios from "axios";

const api = axios.create({
    baseURL: "https://mahindra-challenge-2024.onrender.com/",
});

export default api;
