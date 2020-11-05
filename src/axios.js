import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-mern1.herokuapp.com'
});

export default instance;