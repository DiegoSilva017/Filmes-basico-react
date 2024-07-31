import axios from "axios";
 //https://api.themoviedb.org/3/movie/now_playing?api_key=5f3897718fc8a5bd4bb8bc40e9c0b3ff
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api