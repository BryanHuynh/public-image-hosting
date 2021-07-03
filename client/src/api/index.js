import axios from 'axios';

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url)
    .then((response) =>{
        return response;
    })

export const createPost = (file) => axios.post(url, file)
    .then((response) =>{
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
