import PostMessage from '../models/PostMessage.js';

export const getPosts = (req, res) => {
    console.log('a request was made')
    res.send('HELLO FROM THE SERVER');
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