import PostMessage from '../models/PostMessage.js';

export const getPosts = (req, res) => {
    console.log('a request was made')
    res.send('HELLO FROM THE SERVER');
}