import axios from 'axios';

export const httpVideo = axios.create({
    baseURL: process.env.REACT_APP_REQRES_API_URL
}); 
