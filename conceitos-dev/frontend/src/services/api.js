import axios from 'axios';

const api = axios.create({  //cria uma instancia do AXIOS
            //criamos uma instancia porque aqui podemos passar uma base_url
  baseURL: 'http://localhost:3333'
});

export default api;