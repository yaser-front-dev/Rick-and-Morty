import axios from "axios";

 const Instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export default Instance;
