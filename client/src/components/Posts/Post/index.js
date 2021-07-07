import React, {useState} from 'react';
import useStyles from './styles'
import { deletePost } from '../../../actions/posts'
import {Card, CardActions, CardHeader, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment'

const Post = ({post}) => {
    const classes = useStyles();
    const [postStatus, setPostStatus] = useState(true);

    const handleDelete = (id) => {
        setPostStatus(false);
        deletePost(id)
    }

    const render = () => {
        if(postStatus){
            return (
                <>  
                <Card className={classes.card}>
                    <CardHeader
                        title={post.title}
                        subheader={moment(post.createdAt).fromNow()}
                    />
                        
                    <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
                    <CardActions className={classes.cardActions}>
                        <Button size="small" color="primary" onClick={() =>{handleDelete(post._id)}}>
                            <DeleteIcon fontSize="small"/>
                            Delete
                        </Button>
                    </CardActions>
                </Card>
        
                </>
            )
        }
        return (
            <>
            </>
        )

    }
    return(
        render()
    ) 
}

export default Post;