import PostMessage from '../models/PostMessage.js';

export const getPosts = (req, res) => {
    console.log('a request was made')
    res.send('HELLO FROM THE SERVER');
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage({selectedFile:post});
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({message : error.message});
    }
}