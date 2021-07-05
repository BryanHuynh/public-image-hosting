import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

const Post = ({post}) => {
    return(
        <>  
            <Card>
                <CardMedia component='img' image={post.selectedFile} title={post.title}/>
            </Card>

        </>
    ) 
}

export default Post;