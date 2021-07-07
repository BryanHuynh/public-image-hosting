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
    const newPost = new PostMessage({title: post.title, selectedFile: post.selectedFile});
    try{
        await newPost.save();
        res.status(201).json(req.body);
    }catch(error){
        res.status(409).json({message : error.message});
    }
}

export const deletePost = async (req, res) => {
    console.log('please delete post with id: ' + req.body.Id);
    try{
        const postMessages = await PostMessage.find().deleteOne({_id: req.body.Id})
        res.status(201).json('deleted post: ' + req.body);
    }catch(error){
        res.status(408).json({error : error.message, message: 'failed to delete post: ' + req.body});
    }
}