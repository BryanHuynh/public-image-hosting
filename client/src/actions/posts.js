import * as api from '../api/index';

export const getPosts = async () => {
    try {
        const {data} = await api.fetchPosts();
        return data;
    }catch (error) {
        console.log(error.messages);      
    }
}

export const createPosts = async (posts) => {
    try{
        await api.createPost(posts);
    }catch(error){
        console.log(error.message);
    }
}

export const deletePost = async (id) => {
    try{
        console.log(id);
        await api.deletePost(id);
    }catch(error){
        console.log(error.message);
    }
}