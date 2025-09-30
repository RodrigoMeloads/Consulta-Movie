import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0923ac32d20ebd91568b4141bf65e2f5", // sua chave
    language: "pt-BR"
  }
});

export default api;
