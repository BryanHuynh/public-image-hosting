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
        for(let post in posts){
            console.log(posts[post]);
            await api.createPost(posts[post]);
        }
    }catch(error){
        console.log(error.message);
    }
}
