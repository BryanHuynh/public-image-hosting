import PostMessage from '../models/PostMessage.js';

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        console.log('posts requested')
        res.status(200).json(postMessages);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    //console.log(req.body);
    const newPost = new PostMessage({title: post.title, selectedFile:post.selectedFile});
    try{
        await newPost.save();
        res.status(201).json(req.body);
    }catch(error){
        res.status(409).json({message : error.message});
    }
}