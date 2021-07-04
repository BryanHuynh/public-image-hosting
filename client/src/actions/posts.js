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
        console.log(posts);
        await api.createPost(posts);
    }catch(error){
        console.log(error.message);
    }
}
