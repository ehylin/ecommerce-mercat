import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://www.amiiboapi.com/api/gameseries/'
});

export default clienteAxios;