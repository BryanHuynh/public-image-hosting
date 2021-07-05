import React from 'react'

const Post = ({post, key}) => {
    console.log(post);
    return(
        <h1>{post.title}</h1>
    ) 
}

export default Post;